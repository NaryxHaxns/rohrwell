import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import './Landing.css'

const Landing = () => {
    return(
        <div>
            <NavBar />
            <div className='landingImgContainer'>
                <img className='landingImg' src="https://i.imgur.com/vOaSCqZ.jpg" alt="Jeff and Jesse"/>
            </div>
        </div>
    )
}

export default Landing;