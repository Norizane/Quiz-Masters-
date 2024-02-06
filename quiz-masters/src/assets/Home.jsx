import NavBar from "./components/NavBar";
import GameModeCarousel from "./components/Carousel";
import CreateButton from "./components/CreateButton";
import Footer from "../assets/Footer";
import { Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
  
      <Container className=" mw-100 vh-100 d-flex flex-column secondaryColor" >
        <Row className="vh-100 d-flex justify-content-center">
          <NavBar />
          <CreateButton />
          <GameModeCarousel />         
          <Footer/>         
        </Row>
      </Container>
   
  );
};

export default HomePage;
