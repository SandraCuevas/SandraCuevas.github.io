import React from 'react';
import { Slide } from 'react-slideshow-image';
import img001 from '../img/img001.jpg';
import img002 from '../img/img002.jpg';
import img003 from '../img/img003.jpg';
import './style/slide.css'

const properties = {
    duration:5000,
    transitionDuration:500,
    infinite:true,
    indicators:true,
    arrows:true

}

const Slideshow = () => {
    return (
        <div className="containerSlide">
        <Slide {...properties}>
            <div className="each-slide">
                <img src={img001} alt="img1"/>
            </div>
            <div className="each-slide">
                <img src={img002} alt="img2"/>
            </div>
            <div className="each-slide">
                <img src={img003} alt="img3"/>
            </div>
        </Slide>

        </div>
    )
}
export default Slideshow;