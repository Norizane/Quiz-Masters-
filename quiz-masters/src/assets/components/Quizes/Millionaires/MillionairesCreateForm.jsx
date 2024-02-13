import { Row, Col } from "react-bootstrap";

const MillionairesCreateForm = () => {
  return (
    <>
      <Row>
        <Col className="d-flex flex-column">
        <label className="text-center" style={{color:'#A393BF', fontSize:'30px'}}  >Question</label>
        <input style={{color:'#672A4E', outline:'none'}} className="border border-white bg-transparent rounded p-2" type="text" id="questionA" ></input>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex flex-column">
        <label style={{color:'#A393BF', fontSize:'30px'}}  >A</label>
        <input style={{color:'#672A4E', outline:'none'}} className="border border-white bg-transparent rounded p-2" type="text" id="questionA" ></input>
        
        <input style={{backgroundColor:'#672A4E'}} className="mt-2" type="checkbox" id="confirmA" />
        
        </Col>
        <Col className="d-flex flex-column">
        <label style={{color:'#A393BF', fontSize:'30px'}}>B</label>
        <input style={{color:'#672A4E', outline:'none'}} className="border border-white bg-transparent rounded p-2" type="text" id="questionA" ></input>
        
        <input className="mt-2" type="checkbox" id="confirmB" />
       
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-column">
        <label style={{color:'#A393BF', fontSize:'30px'}}>C</label>
        <input style={{color:'#672A4E', outline:'none'}} className="border border-white bg-transparent rounded p-2" type="text" id="questionA" ></input>
       
        <input className="mt-2" type="checkbox" id="confirmC" />
       
        </Col>
        <Col className="d-flex flex-column">
        <label style={{color:'#A393BF', fontSize:'30px'}}>D</label>
        <input style={{color:'#672A4E'}} className="border border-white bg-transparent rounded p-2" type="text" id="questionA" ></input>
       
        <input className="mt-2" type="checkbox" id="confirmD" />
        
        </Col>
      </Row>
    </>
  );
};

export default MillionairesCreateForm;
