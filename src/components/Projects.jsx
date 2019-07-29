import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import proj001 from '../img/proj001.png';
import proj002 from '../img/proj002.png';
import proj003 from '../img/proj003.png';
import '../App.css';

const MyProjects = () => {
    return (
        <Container className="projects">
        <Row>
          <Col >
            <a target="_blank" rel="noopener noreferrer" href="https://sandracuevas.github.io/GDL002-data-lovers/src">
            <img className= "project" src={proj001} alt="proj001" height={300}/>
            </a>
          </Col>
          <Col >
            <a target="_blank" rel="noopener noreferrer" href="https://snack.expo.io/@sandracuevas/flyaway">
            <img className= "project" src={proj002} alt="proj002"height={300}/>
            </a>
          </Col>
          <Col >
            <a target="_blank" rel="noopener noreferrer" href="https://sandracuevas.github.io/tutopya/">
            <img className= "project" src={proj003} alt="proj003"height={300}/>
            </a>
          </Col>
        </Row>
      </Container>

    )
} 

export default MyProjects;