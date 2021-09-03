import React from 'react';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServiceSection from '../components/ServicesSection';

const AboutPage =()=>{
    return(
        <div>
            <AboutSection/>
            <ServiceSection/>
            <FaqSection/>
        </div>
    );
}


export default AboutPage;