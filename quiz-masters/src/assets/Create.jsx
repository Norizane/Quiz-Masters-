import { Container,Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import NavBar from "./components/NavBar";

const Create = () => {
  return (
  
    <div className="secondaryColor  vh-100 w-100 ">

      <NavBar></NavBar>
      <h1 className="text-center pb-5" style={{fontSize:"96px"}}>Quizes</h1>
        
          <CardGroup className=" text-center p-5 mt-5 d-flex justify-content-center align-items-center">
            <Card style={{ height: '400px', width: '300px' }}>
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title  style={{color:"#A393BF", fontSize:"64px"}}>Millionaires</Card.Title>
              </Card.Body>
              <Card.Footer className="millionairesPrimaryColor">
              <Button variant="outline-light">Create</Button>
              </Card.Footer>
            </Card>
            <Card style={{  height: '400px', width: '300px'}}>
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title  style={{color:"#16425B", fontSize:"64px"}}>Jeopardy</Card.Title>       
              </Card.Body>
              <Card.Footer className="jeopardyPrimaryColor">
              <Button variant="outline-light">Create</Button>
              </Card.Footer>
            </Card>
            <Card style={{  height: '400px', width: '300px' }}>
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title style={{color:"#15616D", fontSize:"64px"}}>Custom Quiz</Card.Title>            
              </Card.Body>
              <Card.Footer className="primaryColor">
              <Button variant="outline-light">Create</Button>
              </Card.Footer>
            </Card>
          </CardGroup>
        

      </div>
   
  );
};

export default Create;
