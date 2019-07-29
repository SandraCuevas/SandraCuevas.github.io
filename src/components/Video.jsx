import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Sun from '../img/SolCV.png'

const Reel = () => {
    return (
        <Container>
            <Row>
                <Col md={1}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.dropbox.com/s/14sqevitcgf4kxo/CV_SandraCuevas01.pdf?dl=0">
                        <img className="sun" alt="sun" src={Sun}/>
                    </a>
                </Col>
                <Col md={1}>
                <iframe title="reel" className="playVideo" width="500" height="300" src="https://www.youtube.com/embed/Rw3pzQf280Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
        )
    }
    
    export default Reel;