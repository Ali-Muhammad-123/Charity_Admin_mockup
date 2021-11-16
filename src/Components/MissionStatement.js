import React from 'react';
import { Container,Form,FormGroup,Row, Button , Input ,Col } from 'reactstrap';


function MissionStatement(props) {
    return (
        <Container style={{ backgroundColor:'white' , borderRadius:'10px' , border:'2px solid lightgrey'}} >
            <h3 style={{color:'darkblue'}}>Mission Statement and LOGO</h3>
            
<Form>
    <Row>
        <Col>
  <FormGroup style={{padding:'10px 10px 10px 10px'}}>
  <Input
        id="Text"
        name="text"
        type="textarea"
        placeholder="Mission statement please use 200 words or less"
      />
  </FormGroup>
</Col>

<Col>
<Row>
<Input
        id="exampleFile"
        name="file"
        type="file"
      />
</Row>
<Row style={{justifyContent:'center'}}>
<Button>
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