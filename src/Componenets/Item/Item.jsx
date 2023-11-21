import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <h2>{props.name}</h2>
      
    </div>
  )
}

export default Item
