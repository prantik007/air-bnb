import React from 'react';
import logo from '../images/airbnb-logo.png'
function Navbar() {
    return (
        <div>
            <nav>
            <img className='logo-image' src={logo} alt="logo" />

            </nav>
        </div>
      );
}

export default Navbar;