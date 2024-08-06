import React from 'react';
import '../styles/AboutUs.css';  
import aboutUsImage from '../assets/image.png';

const AboutUs = () => {
    return (
        <div id="about-us" className="about-us-container">
            <div className="about-us-image">
                <img src={aboutUsImage} alt="About Us" />
            </div>
            {/* Additional content about About Us */}
        </div>
    );
}

export default AboutUs;
