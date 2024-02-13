import NavBar from "../../NavBar"
import { Container,Row,Col } from "react-bootstrap";
import MillionairesCreateFooter from "../Millionaires/MillionairesCreateFooter";
import MillionairesCreateFormNav from "../Millionaires/MillionairesCreateFormNav";

const MillionairesCreate = () => {
  return (
    <Container className="mw-100 vh-100" style={{backgroundColor:'#D9DCD6'}}>
    <NavBar/>
    <Row>
          <Col className="mt-5 mx-4 text-start">
            <h1 style={{ color: "#A393BF" }}>Millionaires</h1>
          </Col>
        </Row>
        <Row>
          <Col className="mb-4 mx-4 text-center d-flex justify-content-start">
            <p style={{ color: "#672A4E" }}>
              {" "}
             Create Mode
            </p>
          </Col>
        </Row>
    
        <Row>
          <Col><MillionairesCreateFormNav/></Col>
        </Row>
        <Row>
         <MillionairesCreateFooter/>
        </Row>
      
    </Container>
  ) 
}

export default MillionairesCreate;