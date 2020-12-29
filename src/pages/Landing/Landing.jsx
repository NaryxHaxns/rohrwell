import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import FootBar from '../../components/FootBar/FootBar'
import './Landing.css';

const Landing = () => {
    const style = {
        width: '300px',
        height: '300px'
    }
    return(
        <div>
            <NavBar />
            <div className='landingImgContainer'>
                <img className='landingImg' src="https://i.imgur.com/JSeJkSK.jpg" alt="Jeff and Jesse"/>
                <br/><br/>
                <div className='missionContainer'>
                    <h2 className='landingHeader'>Our Mission</h2>
                    <p className='landingStatements'>To be a catalyst for change by delivering inspirational and innovative services to impact the  mind-body-vitality trio.</p>
                </div>
                <br/><br/>
                <div className='visionContainer'>
                    <h2 className='landingHeader'>Our Vision</h2>
                    <p className='landingStatements'>To create an alternative solution to transformative wellness.</p>
                </div>
                <br/><br/>
                <div className='socialMedia'>
                    <h2 className='socialHeader'>For More Information</h2>
                    <p className='contactLink'><a href="mailto:reachout@rohrwell.com">reachout@rohrwell.com</a></p>
                    <h2 className='socialHeader'>Find us on Social Media</h2>
                    <a href="https://www.facebook.com/rohrwell/"><img className='faceLink' src="https://i.imgur.com/GfDHHAQ.png" alt="Facebook"/></a>
                    <a href="https://instagram.com/rohrwell?igshid=1a0vztertq14z"><img className='instaLink' src="https://i.imgur.com/AYWQwR0.jpg" alt="Insta"/></a>
                </div>
                <br/><br/>
            </div>
            <FootBar />
        </div>
    )
}

export default Landing;