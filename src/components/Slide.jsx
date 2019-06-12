import React from 'react';
import { Slide } from 'react-slideshow-image';
import img001 from '../img/img001.jpg';
import img002 from '../img/img002.jpg';
import img003 from '../img/img003.jpg';
import BikeMe from './Bike'
import './style/slide.css'

const properties = {
    duration:10000,
    transitionDuration:500,
    infinite:true,
    indicators:true,
    arrows:true

}

const Slideshow = () => {
    return (
        <div className="containerSlide">
        <Slide {...properties}>
            <div className="each-slide" style={{backgroundImage: `url(${img001})`, height: '100vh', backgroundRepeat:'no-repeat'}}>
                <div>About me</div>
                <button>Boton</button>
                <BikeMe />
            </div>
            <div className="each-slide" style={{backgroundImage: `url(${img002})`, height: '100vh', backgroundRepeat:'no-repeat'}}>
                <div>Skills</div>
                <button>Boton</button>
                <BikeMe />
            </div>
            <div className="each-slide" style={{backgroundImage: `url(${img003})`, height: '100vh', backgroundRepeat:'no-repeat'}}>
                <div>Projects</div>
                <button>Boton</button>
                <BikeMe />
            </div>
        </Slide>

        </div>
    )
}
export default Slideshow;