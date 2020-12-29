import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import FootBar from '../../components/FootBar/FootBar';
import './ServicesPage.css';

const ServicesPage = () => {
    return(
        <div>
            <NavBar />
            <div className='ServicesPage'>
                <h1 className='pageHead'>Services and Pricing</h1>
                <div className='jeffServices'>
                    <h2>Jeff Rohr Personal Training</h2>
                    <div className='threePlans'>
                        <div className='bronzePlan'>
                            <h4>Bronze Plan</h4>
                            <p>8 sessions ($65) = $520/month</p>
                        </div>
                        <div className='silverPlan'>
                            <h4>Silver Plan</h4>
                            <p>12 sessions ($60) = $720/month</p>
                        </div>
                        <div className='goldPlan'>
                            <h4>Gold Plan</h4>
                            <p>16 sessions ($55) = $880/month</p>
                        </div>
                        <div className='packageDetails'>
                            <p>All packages are invoiced bi-weekly. New clients get a free 60 min massage with package purchase.</p>
                        </div>
                    </div>
                    <div className='zoomPlan'>
                        <h4>Zoom Online Training</h4>
                        <p>$50 per session</p>
                    </div>
                    <div className='onlinePlan'>
                        <h4>Online Coaching Program Design</h4>
                        <p>$250/month</p>
                        <p>Includes Workout Routine, Diet, Bi-weekly Check in and Unlimited access to Q and A</p>
                    </div>
                    <div className='jeffContact'>
                        <h4>For Booking Contact</h4>
                        <p>Jeff Rohr  @ jeffrey@rohrwell.com</p>
                        <p>or 314-502-8163</p>
                    </div>
                </div>
                <br/>
                <div className='jesseServices'>
                    <h2>Jesse Rohr : Massage Therapy</h2>
                    <div className='deepTissue'>
                        <p>Deep Tissue 60 min: $90</p>
                        <p>Deep Tissue 90 min: $130</p>
                    </div>
                    <div className='bioTherapy'>
                        <h4>Biofeedback/Bioresonance Therapy:</h4>
                        <p>$200 for 90 min session</p>
                        <p>Complete body scan for whole body imbalances, bacteria, virus, parasites, heavy metal exposure, and food sensitivities. Includes healing session to remove impurities and help restore immunity and healthy functionality. Ask for more details.</p>
                    </div>
                    <div className='jesseContact'>
                        <h4>For Booking Contact</h4>
                        <p>Jesse Rohr @ jesse@rohrwell.com</p>
                        <p>or 424-421-4493</p>
                    </div>
                </div>
                <br/><br/>
                <FootBar />
            </div>
        </div>
    )
}

export default ServicesPage;