import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function About() {
  return (
    <div>
      <div className='kirkos'>
          <img src="kirkos_3.jpg" alt="kirkos"/>
      </div>


      <h1>አመሰራረት</h1> 
      <p>What is Lorem Ipsum?
     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
     It has survived not only five centuries, but also the leap into electronic typesetting, 
     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
    
     <div className='foot'>
          <div className='con'>
         <Container> 
      <Row>
        <Col>
        <label>First Name</label>
        <input type="text"/> <br/>
         <label>Last Name</label>
        <input type="text"/> <br/>
        <lable>Comment</lable>
        <input type="text"/> <br/>
         <Button variant="success">SUbmit</Button>
        </Col>
         <Col>
         <h2>Location</h2>
         <ul>
          <li>Kirkos around Leghar</li>
         </ul>
          </Col>

         <Col>
           <img src="kirkos2.png" alt="logo" className="logo2" />
        <p>Wulude birhan senbet tmhrt bet</p>
         <h2>Contact </h2>
         <ul>
          <li>wludebirhan15@gmail.com</li>
          <li>+251 901010101</li>
         </ul>
        </Col>

      </Row>

    </Container>
     <hr/>
      <footer style={{textAlign: "center"}}>
        Copyright @2026
      </footer> 
      </div>
      </div>
    </div>

    
  )
}

export default About
