import { Form, Button } from 'react-bootstrap';


const LogIn = () => {
  return (
    <div className="logIn vh-100 d-flex justify-content-center align-items-center flex-column">
      <div className='text-center'>
        <div className='titleContainer'>
          <h1 className='title'>Quiz Masters</h1>
        </div>
        <div className='logInForm text-white rounded w-570px d-flex justify-content-center align-items-center'>
        <Form className='p-4'>
      <Form.Group className="mb-4 mt-4" controlId="formBasicEmail">
        <Form.Control className='bg-transparent border-1 border-white' type="email" placeholder="Enter email " />
      </Form.Group>

      <Form.Group className="mb-4 mt-4" controlId="formBasicPassword">
        <Form.Control className='logInInputs bg-transparent border-1 border-white'  type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicCheckbox">
      </Form.Group>
      <Button className='bg-transparent border-white mt-4'   variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
        <Button className='singUpButton mt-4'>don't have account ? sign up</Button>
     </div>
    </div>
  );
};

export default LogIn;
