import React from 'react';
import ProfileImage from './ProfileImage';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="profile-photo-container">
            <ProfileImage 
              className="profile-photo"
              alt="Wubalem Chekulo Endeshaw"
            />
          </div>
          <div className="hero-text">
            <h1 className="gradient-text">Wubalem Chekulo Endeshaw</h1>
            <p className="subtitle">Document Authentication Officer | Statistics Graduate</p>
            <p className="description">
              Professional Document Authentication Officer with a strong foundation in statistics 
              and data analysis. Currently serving at the Document Authentication and Registration 
              Service, bringing analytical expertise and attention to detail to document verification 
              processes. Proficient in statistical software and committed to excellence in 
              professional service delivery.
            </p>
            <a href="#contact" className="btn hover-lift">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;