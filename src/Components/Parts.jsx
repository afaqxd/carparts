import React from 'react';
import PartsBox from './PartsBox';
import pimage1 from '../images/engine.png';
import pimage2 from '../images/alloyrims.png';
import pimage3 from '../images/headlights.png';

function Parts() {
  return (
    <div id='products'>
        <h1>PIMP YOUR CAR</h1>
        <p>These parts come with 1 year warranty</p>
        <div className='a-container'> 
            <PartsBox image={pimage1} title="Engine" />
            <PartsBox image={pimage2} title="Alloy Rims" />            
            <PartsBox image={pimage3} title="Headlights" />            
        </div>
    </div>
  )
}

export default Parts