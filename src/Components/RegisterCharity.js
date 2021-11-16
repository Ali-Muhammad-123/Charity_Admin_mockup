import React from 'react';
import { Container,Form,FormGroup,Row, Button , Input ,Col } from 'reactstrap';

function RegisterCharity(props) {
    return (
        <Container style={{ backgroundColor:'white' , borderRadius:'10px' , border:'2px solid lightgrey'}} >
            <h3 style={{color:'darkblue'}}>Register or edit your charity's information</h3>
            
<Form>
    
  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
    <Input
      id="Name"
      name="Name"
      placeholder="Mark's big charity"
    />
  </FormGroup>

  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
    
    <Input
      id="Address"
      name="Address"
      placeholder="123 Glendale Lane"
    />
  </FormGroup>

  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
    
    <Input
      id="State"
      name="State"
      placeholder="Dallas"
    />
  </FormGroup>

  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
  <Row form className='justify-content-between'>
      <Col md={3}>
      <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        GA
      </option>
      <option>
        MA
      </option>
      <option>
        NY
      </option>
     
    </Input>
    </Col>   
    <Col md={6}>
    <Input
      id="Zip"
      name="Zip"
      placeholder="75500"
    />
    </Col>
</Row>
  </FormGroup>
  <Row >
      <Col style={{textAlign:'right'}}>
  <Button style={{marginBottom:'10px'}}>
    Submit
  </Button>
  </Col>
  </Row>
  </Form>

        </Container>
    );
}

export default RegisterCharity;