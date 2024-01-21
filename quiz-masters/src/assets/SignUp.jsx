import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { dataBase } from "../../FirebaseConfig";


const SignUp = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const navigateBack = useNavigate();

  const handleSubmit = async (e) => {
   e.preventDefault();
   try {
    const userCredential = await createUserWithEmailAndPassword(dataBase, email, password)
    const user = userCredential.user;
    localStorage.setItem('token', user.accessToken)
    localStorage.setItem('user', JSON.stringify(user))
  
    navigateBack("/LogInForm")
   } catch (error) {
    // console.error(error)
   }
  }


  return (
    <>
      <div className="singUp vh-100 d-flex justify-content-center align-items-center flex-column">
        <div className="text-center">
          <div className="titleContainer">
            <h1 className="title">Quiz Masters</h1>
          </div>
          <div className="singUpForm text-white rounded w-570px d-flex justify-content-center align-items-center">
            <Form className="p-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-4 mt-4" controlId="formBasicEmail">
                <Form.Control
                  className="bg-transparent border-1 border-white"
                  required
                  type="email"
                  value={email}
                  placeholder="Enter email "
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4 mt-4" controlId="formBasicPassword">
                <Form.Control
                  className="singUpInputs bg-transparent border-1 border-white"
                  required
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4 mt-4" controlId="formBasicPassword">
                <Form.Control
                  className="singUpInputs bg-transparent border-1 border-white"
                  type="password"
                  placeholder="Repeat Password"
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <Button
                className="submitButton bg-transparent border-white mt-4"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
          <Button className="singUpButton mt-4" onClick={() => navigate("/LogInForm")}>
            go back to logIn
          </Button>
        </div>
        <div>
          <Alert className="mt-4" key={"success"} variant={"success"} >
            Your create account successfully, go back to logIn page 
          </Alert>
      </div>
      </div>
     
    </>
  );
};

export default SignUp;
