import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import proj001 from '../img/proj001.png';
import proj002 from '../img/proj002.png';
import proj003 from '../img/proj003.png';
import Image from 'react-image-resizer';
import './style/bike.css'

const MyProjects = () => {
    return (
        <Container className="projects">
        <Row>
          <Col>
            <Alert.Link target="_blank" href="https://sandracuevas.github.io/GDL002-data-lovers/src">
            +Lolvers</Alert.Link>
            <Image src={proj001} alt="proj001" height={300}/>
          </Col>
          <Col>
            <Alert.Link target="_blank" href="https://snack.expo.io/@sandracuevas/flyaway">
            FlyAway</Alert.Link>
            <Image src={proj002} alt="proj002"height={300}/>
          </Col>
          <Col>
            <Alert.Link target="_blank" href="https://sandracuevas.github.io/tutopya/">
              Tutopya</Alert.Link>
            <Image src={proj003} alt="proj003"height={300}/>
          </Col>
        </Row>
      </Container>

    )
} 

export default MyProjects;