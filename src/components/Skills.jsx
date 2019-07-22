import React from 'react';
import Skills from '../img/Skills.gif';
//import Sun from '../img/SolCV.png'
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';


const MySkills = () => {
    return (

        <Container >
            <Row>
                <Col >   
                    <img className="ballons" alt="ballons"
                    src={Skills} />
                </Col> 
            </Row>
        </Container>

    )
}

export default MySkills;