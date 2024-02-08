import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate } from "react-router-dom";

const QuizContainers = () => {

  const navigate = useNavigate();
  return (
    
        <Col className="d-flex justify-content-center align-items-center">
          <CardGroup className=" text-center">
            <Card className="rounded" style={{ height: "400px", width: "400px" }}>
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title style={{ color: "#A393BF", fontSize: "64px" }}>
                  Millionaires
                </Card.Title>
              </Card.Body>
              <Card.Footer className="millionairesPrimaryColor rounded-bottom">
                <Button onClick={() => navigate('/Millionaires')} variant="outline-light">Create</Button>
              </Card.Footer>
            </Card>
            <Card className="mx-3 rounded" style={{ height: "400px", width: "400px" }}>
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title style={{ color: "#16425B", fontSize: "64px" }}>
                  Jeopardy
                </Card.Title>
              </Card.Body>
              <Card.Footer className="jeopardyPrimaryColor rounded-bottom">
                <Button variant="outline-light">Create</Button>
              </Card.Footer>
            </Card>
            <Card className="rounded" style={{ height: "400px", width: "400px" }}>
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title style={{ color: "#15616D", fontSize: "64px" }}>
                  Custom Quiz
                </Card.Title>
              </Card.Body>
              <Card.Footer className="primaryColor rounded-bottom">
                <Button variant="outline-light">Create</Button>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
   
  );
};

export default QuizContainers;
