import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>INDIA'S TRUSTED HOME HELPER</h2>
        <div>
            <div className="hero-hand-icon">
            </div>
            <p className="done"> Home Helper is the simplest way to get your life in order with the right domestic help</p>
        </div>
        
        <div className="hero-latest-btn">
          <div></div>
            {/* <img src={arrow_icon} alt="" /> */}
        </div>
        
      </div>
      <div className="hero-right">
        {/* <img src={hero_image} alt="" /> */}
      </div>
    </div>
  )
}
export default Hero
