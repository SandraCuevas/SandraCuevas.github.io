import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './style/bike.css'

const ContactMe = () => {
    return (
        <Container className="contact">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          {/* grid sistem */}
          <Col className="contactIcon">
          <Alert.Link target="_blank" href="https://www.github.com/SandraCuevas"><i className="fab fa-github-square"></i></Alert.Link>
          <Alert.Link target="_blank" href="https://www.linkedin.com/in/sandra-cuevastorres"><i class="fab fa-linkedin"></i></Alert.Link>
          <Alert.Link target="_blank" href="https://www.behance.net/zandryuxf92e"><i class="fab fa-behance-square"> </i></Alert.Link>
          </Col>
        </Row>
      </Container>
    )
}

export default ContactMe;