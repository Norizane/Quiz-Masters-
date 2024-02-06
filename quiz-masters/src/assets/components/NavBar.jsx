import { signOut } from "firebase/auth";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Col,
  
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { dataBase } from "../../../FirebaseConfig";

const NavBar = () => {

  const logOut = useNavigate();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await signOut(dataBase);
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    logOut('/LogInForm')
  }

  return (
    <Container className="mw-100 p-0 m-0 ">
      <Navbar key={false} expand={false} className=" mb-3 ">
        <Container fluid className="justify-content-center ">
          <Navbar.Toggle
            className="outline-none"
            aria-controls={`offcanvasNavbar-expand-${false}`}
          />
          <Navbar.Offcanvas
            style={{height:'300px', backgroundColor:'#FEFEFA'}}
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="top"
          >
            <Offcanvas.Header closeButton>QuziMasters</Offcanvas.Header>
            <Offcanvas.Body className=" pb-3 pt-0 d-flex flex-column justify-content-center align-items-center">
              <Nav className="flex-grow-1  d-flex align-items-center" style={{fontWeight:'bold', fontSize:'20px', color:'#6c757d'}}>
                <Nav.Link onClick={() => navigate("/HomePage")}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/Create")}>Quizzes</Nav.Link>
                <Nav.Link onClick={() => navigate("/Account")}>Account</Nav.Link>
                <Nav.Link onClick={() => navigate("/Settings")}>Settings</Nav.Link>        
              </Nav>
              <Col className="d-flex justify-content-center">
                <Button onClick={handleLogOut} variant="outline-danger" style={{width:'200px'}}>
                  Log Out
                </Button>
              </Col>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;