import React from 'react';
import Slideshow from './components/Slide';
import './App.css';
import BikeMe from './components/Bike';
//import ContactMe from './components/Contact';


function App() {
  return (
    <div className="App">
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
