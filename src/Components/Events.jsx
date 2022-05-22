import React from 'react'
import eventimage from '../images/autoshow.jpg'
function Events() {
    return (
    <div id='events'>
        <div className='events_text'>
            <h2 className='eventheader'>UPCOMING EVENT</h2>
            <p>Autoshow Islamabad 2022</p>
            <button >Read more</button>
        </div>
        <div className='events-image'>
            <img src={eventimage} alt=''/>
        </div>
    </div>
    )
}
export default Events