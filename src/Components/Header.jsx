import React from 'react';
import carimage from '../images/car.jpg'

function Header() {
    return (
        <div>
            <div id='first_header'>
                <div className='header_h1'>
                    <h1><span>Car MOD</span> <br/> OF THE <br/> WEEK </h1>
                </div>
            </div>
            <div id='second_header'>
                <div className='left_header'>
                    <h1>The Best<br/><span>Car <br/>Customization</span><br/><span>Parts</span> <br/>in Town</h1>
                </div>
                <div className='right_header'>
                    <img src={carimage} alt=''/>
                </div>
            </div>
        </div>
        
    )
}
export default Header;