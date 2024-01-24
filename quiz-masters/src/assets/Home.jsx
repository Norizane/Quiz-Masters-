import NavBar from "./components/NavBar"
import GameModeCarousel from "./components/Carousel"
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container className="secondaryColor vh-100 mw-100">
        <NavBar/>
        <GameModeCarousel/>
      </Container>
    </>
  );
};

export default HomePage;
