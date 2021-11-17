import React from 'react';
import { Row,Col, Container, Table,Button } from 'reactstrap';
import image1 from '../Assets/money-bag.png';
import image2 from '../Assets/mail.png';

function PendingGrants(props) {
  const buttonStyle={
    backgroundColor: '#c5194f',
    color:'white'
  }
  const buttonStyle2={
    backgroundColor: '#c5194f',
    color:'white',
    width:'142.11px'
  }
  
  const colStyling={
    textAlign:'center'
  }

    return (
      
        <Container style={{ backgroundColor:'white', border:'2px solid lightgrey'}}>
    <h3 style={{color:'#617786'}}>Pending Grants</h3>
<Container style={{border:'2px solid lightgrey' , marginBottom:'10px' }}>

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
        
        <Col style={{backgroundColor:'#4a4e6a' ,borderRadius:'10px 0px 0px 10px' , paddingTop:'calc(15%)'}}>
            
        <h3 style={{textAlign:'center', color:'white'}}>Total in Pending Grants</h3>
        <h1 style={{textAlign:'center', color:'white'}}><span style={{verticalAlign:'top',textAlign:'center', color:'white' , fontSize:'1rem'}}> $  </span>760</h1>
        
        </Col>
    </Row>

    

</Container> 
    <Row className='justify-content-center'>

      <Col md={2} style={colStyling}>
      <img src={image1} style={{width:'61px'}}/>
      </Col>
      <Col md={6} style={colStyling}>
      <h4>Connect a bank account to recieve funds</h4>
      <p style={{color:'lightgrey'}}>text I couldnt read</p>
      </Col>
      <Col md={4} style={colStyling}>
      <Button style={buttonStyle2}>Connect</Button>
      </Col>
  </Row>

  <Row className='justify-content-center'>

      <Col md={2 } style={colStyling}>
      <img src={image2} style={{width:'61px'}}/>
      </Col>
      <Col md={6} style={colStyling}>
      <h4>Request paper check via Mail</h4>
      <p style={{color:'lightgrey'}}>text I couldnt read</p>
      </Col>
      <Col md={4} style={colStyling}>
      <Button style={buttonStyle}>Request a Check</Button>
      </Col>
  </Row>


        </Container>
    );
}

export default PendingGrants;