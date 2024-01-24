import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { dataBase } from "../../FirebaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  const navigate = useNavigate();
  const navigateBack = useNavigate();

  const Validation = () => {
    const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  
    const passwordValid = passwordRegx.test(password);
    const emailValid = emailRegx.test(email);
  
    const errorAlerts = [];
    
    if (!passwordValid) {
      errorAlerts.push(
        <Alert  className="wm-50" key="password-error" variant="danger">
          Your password needs to contain a minimum of eight characters, at least one uppercase letter, one lowercase letter, and one number
        </Alert>
      );
    }
  
    if (!emailValid) {
      errorAlerts.push(
        <Alert  className="wm-25" key="email-error" variant="danger">
          Invalid email address
        </Alert>
      );
    }
  
    return errorAlerts;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
    
      const userCredential = await createUserWithEmailAndPassword(
        dataBase,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
    
      navigateBack("/HomePage");
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
      <Container className="singUp  mw-100 vh-100 d-flex justify-content-center align-items-center flex-column">
        <Row className="text-center">
          <Container className="titleContainer">
            <h1 className="title">Quiz Masters</h1>
          </Container>
          <Container className="singUpForm text-white rounded w-570px d-flex justify-content-center align-items-center">
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
              <Button
                className="submitButton bg-transparent border-white mt-4"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Container>
          <Container  className="mt-4 wm-100 d-flex justify-content-center">
          <Button
            className="singUpButton wm-25"
            onClick={() => navigate("/LogInForm")}
          >
            go back to logIn
          </Button>
          </Container>
        </Row>
       <Container  className="mt-4 wm-100 d-flex justify-content-center ">
        <Row>
          {Validation().map((alert, index) => (
            <Container  key={index}>{alert}</Container>
          ))}
        </Row>
      </Container>
      </Container>
  );
};

export default SignUp;
