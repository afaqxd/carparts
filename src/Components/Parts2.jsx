import React from 'react';
import PartsBox from './PartsBox';
import pimage1 from '../images/bumper.png';
import pimage2 from '../images/steeringwheel.png';
import pimage3 from '../images/exhaust.png';

function Parts() {
  return (
    <div id='products'>
        <div className='product_list'> 
            <PartsBox image={pimage1} title="Bumper" />
            <PartsBox image={pimage2} title="Steering Wheel" />            
            <PartsBox image={pimage3} title="Exhaust Pipe" />            
        </div>
    </div>
  )
}

export default Parts