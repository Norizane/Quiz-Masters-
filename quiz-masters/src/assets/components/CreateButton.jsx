import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateButton = () => {
  const navigate = useNavigate();

  const goToCreate = () => {
    navigate("/Create");
  };

  return (
    <Container className="secondaryColor d-flex justify-content-center align-items-start ">
      <Button onClick={goToCreate} size="lg" variant="outline-secondary" style={{width:'300px'}}>
        Create New Quiz
      </Button>
    </Container>
  );
};

export default CreateButton;
