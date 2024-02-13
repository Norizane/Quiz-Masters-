import {Col} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const PlayButton = () => {

  const navigate = useNavigate();
  return (
    
    <Col className="d-flex align-items-center justify-content-center mx-2">
    <button
      onClick={() => navigate('/Create')}
      className="rounded border-0 text-center shadow-sm"
      style={{
        width: '350px',
        height: '100px',
        color: '#15616D'
      }}   
    >
    <h1>PLAY</h1>
    </button>
  </Col>
  )
}

export default PlayButton;