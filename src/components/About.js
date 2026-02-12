import React from 'react';

const About = () => {
  return (
    <section id="about" className="section section-enter">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-2">
          <div className="card animate-on-scroll slide-in-left">
            <h3 style={{color: '#1e40af', marginBottom: '1rem'}}>Personal Information</h3>
            <div style={{display: 'grid', gap: '0.5rem'}}>
              <p><strong>Age:</strong> 22</p>
              <p><strong>Gender:</strong> Female</p>
              <p><strong>Location:</strong> Addis Ababa, Ethiopia</p>
              <p><strong>Languages:</strong> Amharic (Native), English (Intermediate)</p>
            </div>
          </div>
          <div className="card animate-on-scroll slide-in-right">
            <h3 style={{color: '#1e40af', marginBottom: '1rem'}}>Professional Summary</h3>
            <p style={{lineHeight: '1.7', color: '#4b5563'}}>
              Statistics graduate from Dilla University currently working as a Document Authentication 
              Officer at the Document Authentication and Registration Service. I bring strong analytical 
              skills and proficiency in statistical software including SPSS, SAS, R, and Minitab to my 
              current role. My professional experience in document verification, combined with leadership 
              experience as Public Relations head for the university's Charity Club, has enhanced my 
              attention to detail, communication, and organizational abilities. I'm passionate about 
              applying data-driven approaches to improve processes and contribute to organizational success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;