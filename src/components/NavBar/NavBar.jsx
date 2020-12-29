import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './NavBar.css';

const NavBar = () => {
    return(
        <div className='NavBar'>
            <Link to='' className='Home-link'><img className='logoImg' src="https://i.imgur.com/ckz0sdB.jpg" alt="Company Logo"/></Link>
            <Menu right>
                <a id='home' className='menu-item' href="/">Home</a>
                <a id='about' className='menu-item' href="/about">About</a>
                <a id='services' className='menu-item' href="/services">Services</a>
            </Menu>
        </div>
    )
}

export default NavBar;