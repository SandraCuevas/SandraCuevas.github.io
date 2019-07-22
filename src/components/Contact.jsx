import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import '../App.css'

const ContactMe = () => {
    return (
        <Container className="contact">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="contactIcon">
          
          <Alert.Link target="_blank" href="https://www.github.com/SandraCuevas"><i className="fab fa-github-square"></i></Alert.Link>
          <Alert.Link target="_blank" href="https://www.linkedin.com/in/sandra-cuevastorres"><i class="fab fa-linkedin"></i></Alert.Link>
          <Alert.Link target="_blank" href="https://www.behance.net/zandryuxf92e"><i class="fab fa-behance-square"> </i></Alert.Link>
          <Alert.Link target="_blank" href="https://twitter.com/sandryux"><i class="fab fa-twitter-square"></i></Alert.Link>
          <Alert.Link target="_blank" href="https://www.dropbox.com/s/svfjlu6toy78g1t/CV_SandraCuevas01.pdf?dl=0"><i class="fab fa-whatsapp-square"></i></Alert.Link>
          </Col>
        </Row>
      </Container>
    )
}

export default ContactMe;