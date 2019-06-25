import React from 'react';
import Skills from '../img/Skills.gif';
import Sun from '../img/SolCV.png'
import './style/bike.css';
import Image from 'react-image-resizer';
import { Container, Alert, Col, Row } from 'react-bootstrap';


const MySkills = () => {
    return (

        <Container >
            <Row>
                <Col >
                    <Alert.Link  target="_blank" href="https://www.dropbox.com/s/svfjlu6toy78g1t/CV_SandraCuevas01.pdf?dl=0" >
                    <i class="fas fa-file-download"></i>
                    </Alert.Link>
                </Col>
                <Col >
                    <Image src={Skills} alt="gif"width={1800} height={405}/>
                </Col>
            </Row>
        </Container>

    )
}

export default MySkills;