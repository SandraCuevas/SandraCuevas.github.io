import React from 'react';
import Skills from '../img/Skills.gif';
import './style/bike.css';
import Image from 'react-image-resizer';

const MySkills = () => {
    return (

        <div className="imgSkills">
            <Image src={Skills} alt="gif"width={1800} height={405}/>
        </div>

    )
}

export default MySkills;