import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
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
                <img className='landingImg' src="https://i.imgur.com/vOaSCqZ.jpg" alt="Jeff and Jesse"/>
                <br/><br/>
                {/* <Map google={this.props.google} zoom={10} initialCenter={{lat: , lng: }} style={style} /> */}
            </div>
            <FootBar />
        </div>
    )
}

// export default GoogleApiWrapper({
//     apiKey: ()
// }) (Landing);

export default Landing;