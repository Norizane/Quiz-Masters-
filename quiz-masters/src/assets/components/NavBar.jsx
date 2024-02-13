import { signOut } from "firebase/auth";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas, 
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { dataBase } from "../../../FirebaseConfig";

const NavBar = () => {

 
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await signOut(dataBase);
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/LogInForm')
  }

  return (
    <Container style={{backgroundColor:'white'}}  className="mw-100 p-0 m-0">
      <Navbar key={false} expand={false}>
        <Container fluid className="justify-content-center ">
          <Navbar.Toggle
            className="outline-none"
            aria-controls={`offcanvasNavbar-expand-${false}`}
          />
          <Navbar.Offcanvas
            style={{height:'110px', backgroundColor:'white'}}
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="top"
          >
            <Offcanvas.Header closeButton>QuziMasters</Offcanvas.Header>
            <Offcanvas.Body className=" p-0 ">
              <Nav className="d-flex flex-row justify-content-around mx-5" style={{fontWeight:'bold', fontSize:'20px', color:'#6c757d'}}>
                <Button variant="outline-dark" style={{width:'200px'}} onClick={() => navigate("/HomePage")}>Home</Button>
                <Button variant="outline-dark" style={{width:'200px'}} onClick={() => navigate("/Create")}>Quizzes</Button>
                <Button variant="outline-dark" style={{width:'200px'}} onClick={() => navigate("/Account")}>Account</Button>
                <Button variant="outline-dark" style={{width:'200px'}} onClick={() => navigate("/Settings")}>Settings</Button> 
                <Button onClick={handleLogOut} variant="outline-danger" style={{width:'200px'}}>
                  Log Out
                </Button>       
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;