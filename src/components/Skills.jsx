import React from 'react';
import Skills from '../img/Skills.gif';
//import Sun from '../img/SolCV.png'
import './style/bike.css';
import { Container, Alert, Row, Col } from 'react-bootstrap';


const MySkills = () => {
    return (

        <Container >
            <Row>
                <Col md={{ span: 2, offset: 1 }}>
                    <Alert.Link className="download" target="_blank" href="https://www.dropbox.com/s/svfjlu6toy78g1t/CV_SandraCuevas01.pdf?dl=0" >
                        <br/>
                        <br/>
                        <br/>
                        CLICK TO
                        <br/>download<br/>
                        MY RESUME
                    </Alert.Link>
                </Col>
                
            </Row>
            <Row>
                <Col>
                       
                </Col>
                <Col>   
                    <img alt="ballons"
                    src={Skills} style={{height:'60vh' }}
                    />
                </Col> 
            </Row>
           
        </Container>

    )
}

export default MySkills;