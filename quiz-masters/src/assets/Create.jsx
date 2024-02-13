import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import QuizContainers from "../assets/components/QuizContainers";

const Create = () => {
  return (
    <Container className="mw-100 vh-100 d-flex flex-column secondaryColor">
      <NavBar/>
      <QuizContainers/>
    </Container>
  );
};

export default Create;
