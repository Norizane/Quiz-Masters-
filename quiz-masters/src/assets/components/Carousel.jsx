import { Carousel, Container, Col } from "react-bootstrap";
import FirstPhoto from "../images/p1.jpeg";
import SecondPhoto from "../images/p2.jpeg";
import ThirdPhoto from "../images/p3.webp";
const GameModeCarousel = () => {
  return (
    <Container className="w-75 h-50">
      <Carousel fade className="secondaryColor">
        <Carousel.Item className="d-flex primaryColor align-items-center justify-content-center">
        <img src={FirstPhoto} alt="Pasja informatyki" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex millionairesPrimaryColor  align-items-center justify-content-center">
        <img className="millionairesPrimaryColor vh-75" src={SecondPhoto} alt=" FirstPhoto" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex jeopardyPrimaryColor  align-items-center justify-content-center">
        <img src={ThirdPhoto} alt="Pasja informatyki" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default GameModeCarousel;
