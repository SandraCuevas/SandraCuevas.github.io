import React from 'react';
import Skills from '../img/Skills.gif';
import Sun from '../img/SolCV.png'
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';


const MySkills = () => {
    return (

        <Container >
            <Row>
                <Col md={1}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.dropbox.com/s/14sqevitcgf4kxo/CV_SandraCuevas01.pdf?dl=0">
                        <img className="sun" alt="sun" src={Sun}/>
                    </a>
                </Col>
                <Col md={11} >   
                    <img className="ballons" alt="ballons"
                    src={Skills} />
                </Col> 
            </Row>
        </Container>

    )
}

export default MySkills;