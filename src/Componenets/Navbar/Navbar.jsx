import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import {Link} from 'react-router-dom'


const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>Home Helper</p>
      </div>
      <ul className='nav-menu'>
        {/* <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li> */}
        <li><Link to="/Home">Home</Link></li>
        <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}} to='/about'>About</Link>{menu==='about'?<hr/>:<></>}</li>
    
        <li onClick={()=>{setMenu("Service")}}><Link style={{textDecoration:'none'}} to='/Service'>Service</Link>{menu==='service'?<hr/>:<></>}</li>
  
        <li onClick={()=>{setMenu("review")}}><Link style={{textDecoration:'none'}} to='/review'>Reviews</Link>{menu==='Review'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/signup'><button>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Navbar