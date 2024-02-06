import { Carousel } from "react-bootstrap";

const GameModeCarousel = () => {
  return (
    <Carousel fade className="px-5" style={{ height: "400px", width: "800px" }}>
      <Carousel.Item>
        <div
          className="rounded text-center d-flex justify-content-center align-items-center flex-column"
          style={{ backgroundColor: "#A393BF", height: "400px" }}
        >
          <h3 className="text-white">Millionaires</h3>
          <p className="text-white px-5 mx-5">
            Witajcie w "Milionerach"! Gotowi na emocjonującą przygodę?
            Odpowiadajcie na coraz trudniejsze pytania, zbierajcie nagrody i
            sięgnijcie po milion! Macie do dyspozycji trzy pomocne opcje:
            pytanie publiczności, telefon do przyjaciela i "Pół na pół".
            Pamiętajcie, że każda odpowiedź ma swoją cenę, a błędna może
            kosztować Was zdobytą gotówkę. Czy odważycie się sięgnąć po milion?
            Zagrajcie teraz i sprawdźcie swoją wiedzę!
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="rounded text-center d-flex justify-content-center align-items-center flex-column"
          style={{ backgroundColor: "#15616D", height: "400px" }}
        >
          <h3 className="text-white">Jeopardy</h3>
          <p className="text-white px-5 mx-5">
            Witajcie w "Milionerach"! Gotowi na emocjonującą przygodę?
            Odpowiadajcie na coraz trudniejsze pytania, zbierajcie nagrody i
            sięgnijcie po milion! Macie do dyspozycji trzy pomocne opcje:
            pytanie publiczności, telefon do przyjaciela i "Pół na pół".
            Pamiętajcie, że każda odpowiedź ma swoją cenę, a błędna może
            kosztować Was zdobytą gotówkę. Czy odważycie się sięgnąć po milion?
            Zagrajcie teraz i sprawdźcie swoją wiedzę!
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="rounded text-center d-flex justify-content-center align-items-center flex-column"
          style={{ backgroundColor: "#16425B", height: "400px" }}
        >
          <h3 className="text-white">Custom Quiz</h3>
          <p className="text-white px-5 mx-5">
            Create your own quiz limited only by your imagination{" "}
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default GameModeCarousel;
