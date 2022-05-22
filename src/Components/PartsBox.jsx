import React from 'react';

function PartsBox(props) {
  return (
    <div className='product_box'>
        <div className='product_img'>
            <img src={props.image} alt='' /> 
        </div>
        <div className='product_text'>
            <h2> {props.title} </h2>
            <button className='product_button'>Buy</button>
        </div>
    </div>
  )
}
export default PartsBox