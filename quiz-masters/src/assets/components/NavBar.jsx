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

  const logOut = useNavigate();

  const handleLogOut = async () => {
    await signOut(dataBase);
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    logOut('/LogInForm')
  }

  return(
    <Container className="mw-100 p-0 m-0 ">
     <Navbar key={false} expand={false} className="primaryColor mb-3 ">
        <Container fluid>
          <Navbar.Brand className="text-white" href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle className="outline-none" aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Quiz Masters
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Quizzes</Nav.Link>
                <Nav.Link href="#action2">Account</Nav.Link>
                <Nav.Link href="#action2">Settings</Nav.Link>
              </Nav>
              <dvi>
              <Button onClick={handleLogOut} variant="outline-danger" >Log Out</Button>
              </dvi>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Container>
  )
}

export default NavBar;