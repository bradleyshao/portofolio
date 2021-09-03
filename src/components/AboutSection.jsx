import React from 'react';
import home1 from '../img/IMG_0001_Original.jpg'
const AboutSection =()=>{
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams come</span></h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>
                    Contact us for any photograhy ideas that you have. We have professionals with amazing skills.
                </p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="bear" />
            </div>
        </div>
    );
}


export default AboutSection;