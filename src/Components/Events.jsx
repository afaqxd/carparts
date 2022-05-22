import React from 'react'
import aboutimage from '../images/autoshow.jpg'
function Events() {
    return (
    <div id='events'>
        <div className='events-text'>
            <h2 className='eventheader'>UPCOMING EVENT</h2>
            <p>Autoshow Islamabad 2022</p>
            <button >Read more</button>
        </div>
        <div className='events-image'>
            <img src={aboutimage} alt=''/>
        </div>
    </div>
    )
}
export default Events