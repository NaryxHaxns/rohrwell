import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AboutPage.css';

const AboutPage = () => {
    return(
        <div>
            <NavBar />
            <div className='AboutPage'>
                <h5>RohrWell Team Bios</h5>
                <div className='jeffBio'>
                    <div className='jeffImgContainer'>
                        <img className='jeffImg' src="https://i.imgur.com/wrbYpTF.jpg" alt="Jeff"/>
                    </div>
                    <h2>Jeff Rohr</h2>
                    <div className='jeffBioTxt'>
                        <div className='bioPtOneContainer'>
                            <p className='bioPtOne'>Jeffrey Rohr is a Certified Health Coach and Personal Trainer through the American Council on Exercise. He fell in love with the capabilities of the human body in his teenage years. Back then it started simply by throwing around some dumbbells in the gym. Recognizing the body’s response caused his curiosity to to turn into passion.</p>
                        </div>
                        <div className='jeffQuoteContainer'>
                            <p className='jeffQuote'>“The best part about being human is that we heal.” -Jeff Rohr</p>
                        </div>
                        <div className='jeffBioPtTwoContainer'>
                            <p className='jeffBioPtTwo'>Jeff became certified in 2013. Since then he has owned and operated his business in helping impact change in others. He also carries certifications in Nutrition, Sr. Adult Fitness, and Sports Medicine. As for himself, Jeff prefers a variation of training styles. From traditional weight lifting to high intensity training, he finds value in it all. He also finds significance in the mind-body connection. Practices such as yoga and other alternative methods help to make coaching an all encompassing experience.</p>
                        </div>
                        <div className='jeffQuoteContainer'>
                            <p className='jeffQuote'>“Ultimately it comes down to a goal oriented design.” -Jeff Rohr</p>
                        </div>
                        <div className='jeffBioPtThreeContainer'>
                            <p className='jeffBioPtThree'>Jeff has run marathons, gauntlet courses, enjoys hiking, good conversation, and long walks on the... wait, wrong bio... Anyway, if you’re looking for some one to walk boldly with you in the direction you’ve been wanting to go, here’s a teammate.</p>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className='jesseBio'>
                    <div className='jesseImgContainer'>
                        <img className='jesseImg' src="https://i.imgur.com/a6DswMy.jpg" alt="Jesse"/>
                    </div>
                    <h2>Jesse Jordan</h2>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;