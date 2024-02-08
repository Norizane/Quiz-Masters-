import CreateButton from "./CreateButton"
import UserInterface from "./UserInterface"
import { Row,Col } from "react-bootstrap"
const UserDashboard = () => {
  return (
    <Row
    style={{ backgroundColor: "white" }}
    className="secondaryColor d-flex justify-content-around align-items-center shadow-sm rounded"
    >
    <CreateButton/>
    <Col>
    <UserInterface/>
    </Col>
    </Row>
    
  )
}

export default UserDashboard;