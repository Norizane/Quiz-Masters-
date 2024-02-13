import NavBar from "./components/NavBar";
import GameModeCarousel from "./components/Carousel";
import UserDashboard from "./components/UserDashboard";
import Footer from "./components/Footer";
import PlayButton from "./components/PlayButton";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container fluid  className=" secondaryColor vh-100">
     <Row className="vh-100 d-flex justify-content-center ">
      <Row>
        <div><NavBar></NavBar></div>
        <div style={{height:'100%'}} className="px-4 shadow-none"><UserDashboard></UserDashboard></div>
      </Row>
      <Row>
        <PlayButton></PlayButton>
      </Row>
      <Row>
       <GameModeCarousel></GameModeCarousel>
      </Row>
      <Row className="d-flex justify-content-center">
       <Footer></Footer>
      </Row>
      </Row> 
    </Container>
  );
};

export default HomePage;
