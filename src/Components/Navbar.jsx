import { useState } from "react";

import "./Navbar.css"
import Logo from "../assets/Images/vydya-removebg-preview.png"
import { NavLink,Link } from 'react-router-dom'



export default function Navbar() {
  let [Menu, setMenu] = useState(false)//Checking if the menu icon is clicked or not

  let menuClick = () => {//Changing the menu icon based on the visibility of main options when the web site is in phone
    const options = document.querySelector(".OptionsList")
    options.style.display === "flex" ? options.style.display = "none" : options.style.display = "flex"
    options.style.display === "flex" ? setMenu(true) : setMenu(false)
  }

  function handleResize() {
    const navbar = document.querySelector(".Options")
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1450) {

    } else {
      navbar.style.display = 'block'; // Ensure the navbar is always visible above 550 pixels

    }
  }

  // Attach the event listener to the window
  window.addEventListener('resize', handleResize);

  return (
    <div className="fixed text-lg w-screen z-40">
      <nav >
        <div><NavLink to="." end><img className="Logo" src={Logo} alt="LOGO HERE" /></NavLink></div>
        <div className='Options'>
          <ul className="OptionsList text-sm">
            <li><NavLink end className={({ isActive }) => isActive ? "activeNav" : null} to="." > Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="/bloodservices" > Blood Services</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="/appointment" > Appointment</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="/userinfo" > User Info</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="/ourproducts" > Our Products</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="/about" > About</NavLink></li>
          </ul>

        </div>
        <div className='loginwrapper mr-[2rem]' >
          <Link to='/login'>
          <button id="loginbtn">
            Sign up
            <div className="arrow-wrapper">
              <div className="arrow"></div>

            </div>
          </button>
          </Link>
        </div>
        <span className="close_open" onClick={() => {
          menuClick();
        }}>
          <button >
            {
              Menu ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>
            }
          </button>
        </span>
      </nav>
    </div>
  )
}
