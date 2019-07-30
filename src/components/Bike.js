import React from 'react';
import YoBici from '../img/BiciMail.gif';
import '../App.css';

const BikeMe = () => {
    return (
        <div>
            <div className="imgBike">
                <img src={YoBici} alt="gif"/>
            </div>
        </div>
    )
}

export default BikeMe;