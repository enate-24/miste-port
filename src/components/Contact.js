import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section section-alternate section-enter">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-info">
          <div className="card contact-item animate-on-scroll">
            <div className="contact-icon">📧</div>
            <div className="contact-label">Email</div>
            <div className="contact-value">wubalemchekulo8@gmail.com</div>
          </div>
          <div className="card contact-item animate-on-scroll">
            <div className="contact-icon">📱</div>
            <div className="contact-label">Phone</div>
            <div className="contact-value">094 731 8977</div>
          </div>
          <div className="card contact-item animate-on-scroll">
            <div className="contact-icon">📍</div>
            <div className="contact-label">Location</div>
            <div className="contact-value">Addis Ababa, Ethiopia</div>
          </div>
        </div>
        
        <div className="card animate-on-scroll" style={{maxWidth: '700px', margin: '3rem auto 0', textAlign: 'center'}}>
          <h3 style={{color: '#1e40af', marginBottom: '2rem', fontSize: '1.5rem'}}>Professional Collaboration</h3>
          <p style={{color: '#4b5563', lineHeight: '1.7', marginBottom: '2rem'}}>
            As a working professional in document authentication with a strong statistical background, 
            I'm interested in opportunities that combine my analytical skills with my practical 
            experience in quality assurance and process improvement. Whether it's data analysis, 
            research collaboration, or process optimization projects, I'm ready to bring both 
            academic knowledge and professional experience to meaningful work.
          </p>
          <a href="mailto:wubalemchekulo8@gmail.com" className="btn hover-lift">
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;