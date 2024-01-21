import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { signInWithEmailAndPassword } from "firebase/auth";
import { dataBase } from "../../FirebaseConfig";
import { useState } from "react";
const LogIn = () => {
  const navigate = useNavigate();
  const navigateToHome = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const userCredential = await signInWithEmailAndPassword(dataBase, email, password)
     const user = userCredential.user;
     localStorage.setItem('token', user.accessToken)
     localStorage.setItem('user', JSON.stringify(user))
   
     navigateToHome("/HomePage")
    } catch (error) {
     // console.error(error)
    }
   }

  return (
    <div className="logIn vh-100 d-flex justify-content-center align-items-center flex-column">
      <div className="text-center">
        <div className="titleContainer">
          <h1 className="title">Quiz Masters</h1>
        </div>
        <div className="logInForm text-white rounded w-570px d-flex justify-content-center align-items-center">
          <Form className="p-4" onSubmit={handleSubmit}>
            <Form.Group className="mb-4 mt-4" controlId="formBasicEmail">
              <Form.Control
                className="bg-transparent border-1 border-white"
                type="email"
                value={email}
                placeholder="Enter email "
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4 mt-4" controlId="formBasicPassword">
              <Form.Control
                className="logInInputs bg-transparent border-1 border-white"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              className="bg-transparent border-white mt-4"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
        <Button
          className="singUpButton mt-4"
          onClick={() => navigate("/SignUpForm")}
        >
          don't have account ? sign up
        </Button>
      </div>
      <div>
          <Alert className="mt-4" key={"danger"} variant={"danger"}>
            this account does not exist, please check your email or password
          </Alert>
      </div>
    </div>
  );
};

export default LogIn;
