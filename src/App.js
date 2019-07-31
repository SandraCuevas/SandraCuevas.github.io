import React from 'react';
import Slideshow from './components/Slide';
import './App.css';
import BikeMe from './components/Bike';
import Background from './img/fondo01.jpg';


function App() {
  return (
    <div className="App">
    <img className="bg" alt="bg" src={Background}/>
      
        <div className='container'>
          <Slideshow />
            <div className='bici'>
              <BikeMe/>        
            </div>
        </div>
      </div>
    
  );
}

export default App;
