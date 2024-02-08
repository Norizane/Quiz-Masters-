import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
const Millionaires = () => {
  const navigate = useNavigate();

  return (
  
      <Container className="mw-100 vh-100" style={{backgroundColor:'#D9DCD6'}}>
      <NavBar />
        <Row>
          <Col className="mt-5 mx-4 text-center">
            <h1 style={{ color: "#A393BF" }}>Millionaires</h1>
          </Col>
        </Row>
        <Row>
          <Col className="mb-4 text-center d-flex justify-content-center">
            <p style={{ color: "#672A4E", width:'600px'  }}>
              {" "}
              Welcome to 'Who Wants to Be a Millionaire'! Are you ready for an
              exciting adventure? Answer increasingly difficult questions,
              collect prizes, and go for the million! You have three helpful
              options available: ask the audience, phone a friend, and '50/50'.
              Remember that every answer has its price, and a wrong one can cost
              you the money you've earned. Will you dare to go for the million?
              Play now and test your knowledge!
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card
              className="rounded"
              style={{ height: "400px", width: "400px" }}
            >
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title style={{ color: "#A393BF", fontSize: "64px" }}>
                Grafika
                </Card.Title>
              </Card.Body>
              <Card.Footer className="millionairesPrimaryColor rounded-bottom d-flex justify-content-center">
                <Button
                  size="lg" 
                  onClick={() => navigate("/Millionaires")}
                  variant="outline-light"
                >
                  Create
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card
              className="rounded"
              style={{ height: "400px", width: "400px" }}
            >
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title style={{ color: "#A393BF", fontSize: "64px" }}>
                 Grafika
                </Card.Title>
              </Card.Body>
              <Card.Footer className="millionairesPrimaryColor rounded-bottom d-flex justify-content-center">
                <Button
                  size="lg"
                  onClick={() => navigate("/Millionaires")}
                  variant="outline-light"
                >
                  Play
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
   
  );
};

export default Millionaires;
