import React from 'react';
import Skills from '../img/Skills.gif';
//import Sun from '../img/SolCV.png'
import '../App.css';
import { Container, Alert, Row, Col } from 'react-bootstrap';


const MySkills = () => {
    return (

        <Container >
            <Row>
                <Col >
                    <Alert.Link className="download" target="_blank" href="https://www.dropbox.com/s/svfjlu6toy78g1t/CV_SandraCuevas01.pdf?dl=0" >
                        <br/>
                        <br/>
                        <br/>
                        <i class="fas fa-address-card"></i>
                        <br/>download<br/>
                        MY RESUME
                    </Alert.Link>
                </Col>
                
            </Row>
            <Row>
              
                <Col >   
                    <img alt="ballons"
                    src={Skills} />
                </Col> 
            </Row>
           
        </Container>

    )
}

export default MySkills;