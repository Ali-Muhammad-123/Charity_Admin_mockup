import React from 'react';
import 'bootstrap';
import './MissionStatement.css';
import { Container,Form,FormGroup,Row, Button , Input ,Col } from 'reactstrap';


function MissionStatement(props) {
  const buttonStyle={
    backgroundColor: '#c5194f',
    color:'white'
  }
    return (
        <Container style={{ backgroundColor:'white' ,border:'2px solid lightgrey'}} >
            <h3 style={{color:'#617786'}}>Mission Statement and LOGO</h3>
            
<Form>
    <Row>
        <Col>
  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
  <Input
        id="Text"
        name="text"
        type="textarea"
        placeholder="Mission statement please use 200 words or less"
        style={{height:'186px'}}
      />
  </FormGroup>
</Col>

<Col>
<Row>

  <Container style={{border: '2px dashed #92b0b3' , width: '100%' ,height:'186px'}}>

        
      <h3 style={{textAlign:'center'}}>Drag and drop your JPEG logo or </h3>
      <Input
        id="exampleFile"
        name="file"
        type="file"
        // style={{display:'none'}}
      />
      </Container>

</Row>

<Row style={{justifyContent:'center'}}>
<Button style={buttonStyle}>
    Save
  </Button>
</Row>
</Col>

  </Row>

  </Form>
  

        </Container>
    );
}

export default MissionStatement;