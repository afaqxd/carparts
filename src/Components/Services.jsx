import React from 'react';

function Services() {
    return (
    <div id='services'>
        <h1>BOOK YOUR CAR SERVICE RESERVATION</h1>
        <form>
            <input type='text' placeholder='Full Name'/>
            <input type='email' placeholder='Your Email here'/>
            <textarea type='text' placeholder='Enter full details of your car'/>
            <button className='servicesBook'>BOOK</button>
        </form>
    </div>
    )
}
export default Services