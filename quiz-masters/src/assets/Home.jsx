import NavBar from "./components/NavBar"
import GameModeCarousel from "./components/Carousel"

const HomePage = () => {
  return (
    <>
      <div className="secondaryColor vh-100">
        <NavBar/>
        <GameModeCarousel/>
      </div>
    </>
  );
};

export default HomePage;
