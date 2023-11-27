import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import {Link} from 'react-router-dom';
const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR SERVICES</h1>
      <hr/>
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Link to='/book'><Item key={i} id={item.id} name={item.name} image={item.image}/></Link> 
        })}
      </div>
    </div>
  )
}

export default Popular
