import { Container,ProgressBar, Row, Col } from "react-bootstrap";

const UserInterface = () => {
  return (
    <Container style={{width:'450px'}}>
      <Row>
        <Col  className=" d-flex align-items-end justify-content-start">
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#198754",
            }}
          >
            LVL 12{" "}
          </div>
        </Col>
        <Col
          className=" d-flex align-items-end justify-content-end flex-row"
        >
          <div
            className=""
            style={{
              fontSize: "20px",
              color: "#6c757d",
            }}
          >
            User name{" "}
          </div>
          <div
            className="rounded mb-1 mx-1"
            style={{
              backgroundColor: "#6c757d",
              height: "80px",
              width: "80px",
            }}
          ></div>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <ProgressBar variant="success" now={40} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserInterface;
