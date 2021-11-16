import React from 'react';
import { Row,Col, Container, Table,Button } from 'reactstrap';
import image1 from '../Assets/money-bag.png';
import image2 from '../Assets/mail.png';

function PendingGrants(props) {
    return (
        <Container style={{ backgroundColor:'white' , borderRadius:'10px' , border:'2px solid lightgrey'}}>
    <h3 style={{color:'darkblue'}}>Pending Grants</h3>
<Container style={{border:'2px solid lightgrey' , borderRadius:'20px'}}>

    <Row> 
        <Col>
<Table borderless >

  <thead>
    <tr>
      <th>
        Donor Name
      </th>
      <th>
        Amount
      </th>
      <th>
        Date
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        Ali Muhammad
      </th>
      <td>
        $500
      </td>
      <td>
        06/12/2021
      </td>
    </tr>
    <tr>
      <th scope="row">
      Ali Muhammad
      </th>
      <td>
      $600
      </td>
      <td>
      06/12/2021
      </td>
    </tr>
    <tr>
      <th scope="row">
      Ali Muhammad
      </th>
      <td>
      $700
      </td>
      <td>
      06/12/2021
      </td>
    </tr>
  </tbody>
</Table>
        </Col>
        
        <Col className='my-auto' style={{backgroundColor:'#4a4e6a' ,borderRadius:'10px 0px 0px 10px'}}>
            
        <h3 style={{textAlign:'center', color:'white'}}>Total in Pending Grants</h3>
        <h1 style={{textAlign:'center', color:'white'}}><span style={{verticalAlign:'top',textAlign:'center', color:'white' , fontSize:'1rem'}}> $  </span>760</h1>
        
        </Col>
    </Row>
    <Row className='justify-content-center'>

      <Col md={2}>
      <img src={image1} style={{width:'100%'}}/>
      </Col>
      <Col md={6}>
      <h4>Connect a bank account to recieve funds</h4>
      <p style={{color:'lightgrey'}}>text I couldnt read</p>
      </Col>
      <Col md={2}>
      <Button>Connect</Button>
      </Col>
  </Row>

  <Row className='justify-content-center'>

      <Col md={2}>
      <img src={image2} style={{width:'100%'}}/>
      </Col>
      <Col md={6}>
      <h4>Request paper check via Mail</h4>
      <p style={{color:'lightgrey'}}>text I couldnt read</p>
      </Col>
      <Col md={2}>
      <Button>Request a Check</Button>
      </Col>
  </Row>


</Container>

        </Container>
    );
}

export default PendingGrants;