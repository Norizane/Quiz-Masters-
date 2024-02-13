import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import MillionairesCreateForm from './MillionairesCreateForm';
const tabsData = [
  { key: "1 Milion", content: <MillionairesCreateForm /> },
  { key: "500 000", content: <MillionairesCreateForm /> },
  { key: "250000", content: <MillionairesCreateForm /> },
  { key: "125000", content: <MillionairesCreateForm /> },
  { key: "75000", content: <MillionairesCreateForm /> },
  { key: "40000", content: <MillionairesCreateForm /> },
  { key: "20000", content: <MillionairesCreateForm /> },
  { key: "10000", content: <MillionairesCreateForm /> },
  { key: "5000", content: <MillionairesCreateForm /> },
  { key: "2000", content: <MillionairesCreateForm /> },
  { key: "1000", content: <MillionairesCreateForm /> },
  { key: "500", content: <MillionairesCreateForm /> },
];

const MillionairesFormNav = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2} style={{paddingRight:'50px'}}>
          <Nav variant="pills" className="flex-column">
            {tabsData.map(tab => (
              <Nav.Item key={tab.key}>
                <Nav.Link  style={{color:'#672A4E'}}  eventKey={tab.key}>{tab.key}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={10} className='d-flex flex-column justify-content-start px-5'>
          <Tab.Content>
            {tabsData.map(tab => (
              <Tab.Pane key={tab.key} eventKey={tab.key}>{tab.content}</Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default MillionairesFormNav;
