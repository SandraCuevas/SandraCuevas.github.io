import React from 'react';
import MyName from '../img/myName.gif';
import './style/bike.css'
import Image from 'react-image-resizer';

const Name = () => {
    return (
        <div className="imgPlane">
            <Image src={MyName} alt="gif"width={1270} height={205}/>
        </div>
    )
}

export default Name;