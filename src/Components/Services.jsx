import React from 'react';

function Services() {
    return (
    <div id='services'>
        <h1>BOOK YOUR CAR SERVICE RESERVATION</h1>
        <form>
            <input type='text' placeholder='Your name here'/>
            <input type='text' placeholder='Car and Model'/>
            <input type='phone' placeholder='Phone Number'/>
            <textarea type='text' placeholder='Details'/>
            <button className='services_button'>BOOK</button>
        </form>
    </div>
    )
}
export default Services