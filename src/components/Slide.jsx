import React from 'react';
import { Slide } from 'react-slideshow-image';
import img001 from '../img/img001.jpg';
import img002 from '../img/img002.jpg';
import img003 from '../img/img003.jpg';
import BikeMe from './Bike'
import MyName from './Plane'
import './style/slide.css'

const properties = {
    duration:100000,
    transitionDuration:1000,
    infinite:true,
    indicators:true,
    arrows:true

}

const Slideshow = () => {
    return (
        <div className="containerSlide">
        <Slide {...properties}>
            <div className="each-slide" style={{backgroundImage: `url(${img001})`, height: '100vh', backgroundRepeat:'no-repeat'}}>
                <MyName style={{flex: 1, resizeMode: 'contain' }}/>
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