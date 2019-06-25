import React from 'react';
import { Slide } from 'react-slideshow-image';
import img001 from '../img/img001.jpg';
import img002 from '../img/img002.jpg';
import img003 from '../img/img003.jpg';
import MyName from './Plane';
import ContactMe from './Contact';
import MySkills from './Skills';
import MyProjects from './Projects';
import './style/slide.css';

const properties = {
    duration:60000,
    transitionDuration:1000,
    infinite:true,
    indicators:true,
    scale: 0.4,
    arrows:true

}

const Slideshow = () => {
    return (
        <div className="containerSlide">
        <Slide {...properties}>
            <div className="each-slide" style={{backgroundImage: `url(${img001})`, height: '100vh', backgroundRepeat:'no-repeat'}}>
                <ContactMe/>
                <MyName/>
                

            </div>
            <div className="each-slide" style={{backgroundImage: `url(${img002})`, height: '100vh', backgroundRepeat:'no-repeat'}}>
                <ContactMe/>
                <MySkills/>
                
            </div>
            <div className="each-slide" style={{backgroundImage: `url(${img003})`, height: '100vh', backgroundRepeat:'no-repeat'}}>
                <ContactMe/>
                <MyProjects/>
                
            </div>
        </Slide>

        </div>
    )
}
export default Slideshow;