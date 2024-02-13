import { Button } from "react-bootstrap";

const MillionairesCreateFooter = () => {
  return (
    <div className="col d-flex justify-content-around align-items-center mt-2">
      <h1 style={{ color: "#A393BF" }}>check the box next to the correct answer</h1>
      <Button size="lg" style={{color:'#672A4E'}} variant="outline-light">PLAY</Button>
    </div>
  );
};

export default MillionairesCreateFooter;
