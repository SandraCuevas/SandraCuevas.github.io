import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './style/bike.css'

const ContactMe = () => {
    return (
        <Container className="contact">
        <Row>
          <Col></Col>
          <Col>
          <Alert.Link href="https://www.github.com/SandraCuevas"><i className="fab fa-github-square"></i></Alert.Link>
          <br/>
          <Alert.Link href="https://www.linkedin.com/in/sandra-cuevastorres"><i class="fab fa-linkedin"></i></Alert.Link>
          </Col>
        </Row>
      </Container>
    )
}

export default ContactMe;