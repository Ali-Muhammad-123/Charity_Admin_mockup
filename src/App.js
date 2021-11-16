
import './App.css';
import {Container, Row,Col} from 'reactstrap';
import RegisterCharity from './Components/RegisterCharity';
import PendingGrants from './Components/PendingGrants';
import ContactInfo from './Components/ContactInfo';
import MissionStatement from './Components/MissionStatement';
function App() {
  return (
    <Container style={{backgroundColor:'lightgray'}}>
      <Row>
        <h1 style={{color:'white'}}>Charity Admin</h1>
        </Row>
      <Row>
      <Col>

<Row style={{padding:'10px 10px 10px 10px'}}><RegisterCharity/></Row>
<Row style={{padding:'10px 10px 10px 10px'}}><ContactInfo/></Row>

      </Col>
      <Col>

<Row style={{padding:'10px 10px 10px 10px'}}><PendingGrants/></Row>
<Row style={{padding:'10px 10px 10px 10px'}}><MissionStatement/></Row>

      </Col>
      </Row>

    </Container>
  );
}

export default App;
