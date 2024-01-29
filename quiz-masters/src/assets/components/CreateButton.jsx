import { Button, Container } from "react-bootstrap";

const CreateButton = () => {
  return (
    <Container className="secondaryColor d-flex justify-content-center ">
     <Button variant="outline-light">Create New Quiz</Button>
    </Container>
  )
}

export default CreateButton;