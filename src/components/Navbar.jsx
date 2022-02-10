import React from 'react';
import logo from '../images/airbnb-logo.png'
function Navbar() {
    return (
        <div>
            <nav>
            <img className='logo-image' src={logo} alt="logo" />
            <ul className='nav-ul-links'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact US</li>
            </ul>

            </nav>
        </div>
      );
}

export default Navbar;