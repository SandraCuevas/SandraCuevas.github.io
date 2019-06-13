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
          <Col><Image src={proj001} alt="proj001" height={205}/>
          <Alert.Link href="https://sandracuevas.github.io/GDL002-data-lovers/src">
          +Lolvers</Alert.Link>
          </Col>
          <Col><Image src={proj002} alt="proj002"height={205}/>
          <Alert.Link href="https://perlatovargarcia.github.io/Hackarandas/">
          Tutopya</Alert.Link>
          </Col>
          <Col><Image src={proj003} alt="proj003"height={205}/>
          <Alert.Link href="https://sandracuevas.github.io/GDL002-burger-queen/">
          The Tea Shop</Alert.Link>
          </Col>
        </Row>
      </Container>

    )
} 

export default MyProjects;