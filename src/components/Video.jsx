import React from 'react';
import { Container } from 'react-bootstrap';

const Reel = () => {
    return (
        <Container>
            <iframe title="reel" id="playVideo" width="800" height="600" src="https://www.youtube.com/embed/Rw3pzQf280Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Container>
        )
    }
    
    export default Reel;