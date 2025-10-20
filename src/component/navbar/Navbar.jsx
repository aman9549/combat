import React from 'react'
import '../navbar/navbar.css'
import { IoPhonePortraitOutline, IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
  return (
   <nav className='navbar'>
    <h1 className='logo'><span>C</span>ombat</h1>

<div className="nav-links">
   <ul>
      <a href=""><li>Home</li></a>
      <a href=""><li>About</li></a>
      <a href=""><li>Service</li></a>
      <a href=""><li>Contact</li></a>
    </ul>
    <div className="phone-div">
      <h1> <IoPhonePortraitOutline /> +91 12345678890</h1>
    </div>
</div>

<div className="menu-icon">
<IoMenuOutline />
</div>


   
   </nav>
  )
}

export default Navbar