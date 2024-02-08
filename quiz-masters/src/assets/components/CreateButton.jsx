import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const CreateButton = () => {
  const navigate = useNavigate();

  const goToCreate = () => {
    navigate("/Create");
  };

  return (
  
      <Col className="d-flex align-items-center justify-content-center mx-2">
        <Button
          onClick={goToCreate}
          size="lg"
          className="btn-outline-secondary"
          style={{
            width: "250px",
            height: "50px",
            border: "none",
            backgroundColor: "#D9DCD6",
            color: "#6c757d",
          }}
        >
          Create New Quiz
        </Button>
      </Col>
    
  );
};

export default CreateButton;
