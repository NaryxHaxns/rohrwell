import React from 'react';
import './FootBar.css'

const FootBar = () => {
    return(
        <div className='FootBar'>
            <h2 className='companyName'>RohrWell</h2>
            <a id='home' className='foot-link' href="/">Home</a>
            <a id='about' className='foot-link' href="/about">About</a>
            <a id='services' className='foot-link' href="/services">Services</a>
            <h6 className='poweredBy'>Powered by Dragon Designs of California</h6>
        </div>
    )
}

export default FootBar;