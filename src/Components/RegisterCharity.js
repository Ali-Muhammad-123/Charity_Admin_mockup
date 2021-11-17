import React from 'react';
import 'bootstrap';
import { Container,Form,FormGroup,Row, Button , Input ,Col } from 'reactstrap';

function RegisterCharity(props) {
  const buttonStyle={
    backgroundColor : '#c5194f',
    color:'white',
    marginBottom:'10px'
  }
  const stylesInput={
    height: 'calc(4em + 0.75rem + 2px)'   
  }
    return (
        <Container style={{ backgroundColor:'white'  , border:'2px solid lightgrey', height:'603.6px' } } >
            <h3 style={{color:'#617786'}}>Register or edit your charity's information</h3>
            
<Form>
    
  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
    <Input
      id="Name"
      name="Name"
      placeholder="Mark's big charity"
      style={stylesInput}

    />
  </FormGroup>

  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
    
    <Input
      id="Address"
      name="Address"
      placeholder="123 Glendale Lane"
      style={stylesInput}

    />
  </FormGroup>

  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
    
    <Input
      id="State"
      name="State"
      placeholder="Dallas"
      style={stylesInput}

    />
  </FormGroup>

  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
  <Row form >
      <Col >
      <Input
      id="exampleSelect"
      name="select"
      type="select"
      style={{width:'100%' , height:'100%'}}

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
    <Col >
    <Input
      id="Zip"
      name="Zip"
      placeholder="75500"
      style={stylesInput}

    />
    </Col>
</Row>
  </FormGroup>
  <Row >
      <Col style={{textAlign:'right'}}>
  <Button style={buttonStyle}>
    Save
  </Button>
  </Col>
  </Row>
  </Form>

        </Container>
    );
}

export default RegisterCharity;