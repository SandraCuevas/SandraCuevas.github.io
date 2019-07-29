import React from 'react';
import { Container } from 'react-bootstrap';

const Reel = () => {
    return (
        <Container>
            <iframe title="reel" className="playVideo" width="500" height="300" src="https://www.youtube.com/embed/Rw3pzQf280Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Container>
        )
    }
    
    export default Reel;