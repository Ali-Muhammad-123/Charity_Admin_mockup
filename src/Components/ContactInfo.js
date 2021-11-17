import React from 'react';
import { Container,Form,FormGroup,Row, Button , Input ,Col } from 'reactstrap';


function ContactInfo(props) {
  const buttonStyle={
    backgroundColor: '#c5194f',
    color:'white',
    marginTop: '10px'
    
  }
    return (
        <Container style={{ backgroundColor:'white' ,  border:'2px solid lightgrey'}} >
            <h3 style={{color:'#617786'}}>Grant Notifications Contact information</h3>
            
<Form>
    
  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
    <Input
      id="imp1"
      name="Name"
      
    />
  </FormGroup>

  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
    
    <Input
      id="inp2"
    />
  </FormGroup>

      <Row >
      <Col style={{textAlign:'right'}}>
  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
    
    <Input
      id="State"
      name="State"
      placeholder="123-456-789"
    />
  </FormGroup>
  </Col>
      <Col style={{textAlign:'right'}}>
  <Button style={buttonStyle}>
    Submit
  </Button>
  </Col>
  </Row>
  </Form>
  

        </Container>
    );
}

export default ContactInfo;