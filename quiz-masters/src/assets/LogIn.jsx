import { Form, Button, Container, Row, Col } from "react-bootstrap";
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
    <Container className="logIn mw-100 vh-100 d-flex justify-content-center align-items-center flex-column">
      <Row className="text-center">
        <Container className="titleContainer ">
          <h1 className="title">Quiz Masters</h1>
        </Container>
        <Container className="logInForm text-white rounded w-570px d-flex justify-content-center align-items-center">
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
        </Container>
      </Row>
      <Container  className="mt-4 wm-100 d-flex justify-content-center">
        <Button
        className="singUpButton wm-25"
          onClick={() => navigate("/SignUpForm")}
        >
          don't have account ? sign up
        </Button>
      </Container>
      <Container className="mt-4 wm-100 d-flex justify-content-center ">
          <Alert className="invisible wm-50"  key={"danger"} variant={"danger"}>
            this account does not exist, please check your email or password
          </Alert>
      </Container>
    </Container>
  );
};

export default LogIn;
