import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section section-alternate section-enter">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="card animate-on-scroll" style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
          <h3 style={{color: '#1e40af', fontSize: '1.5rem', marginBottom: '1rem'}}>
            Bachelor of Science in Statistics
          </h3>
          <p style={{fontSize: '1.2rem', color: '#6b7280', marginBottom: '1rem'}}>
            Dilla University, Ethiopia
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginTop: '2rem'}}>
            <div>
              <p style={{fontWeight: '600', color: '#1e40af'}}>GPA</p>
              <p style={{color: '#4b5563'}}>2.64</p>
            </div>
            <div>
              <p style={{fontWeight: '600', color: '#1e40af'}}>Graduation Date</p>
              <p style={{color: '#4b5563'}}>July 2023</p>
            </div>
          </div>
          <div style={{marginTop: '2rem', padding: '1rem', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '10px'}}>
            <h4 style={{color: '#1e40af', marginBottom: '0.5rem'}}>Certification</h4>
            <p style={{fontWeight: '600', color: '#2d3748'}}>Certificate of Merit – Outstanding Participation</p>
            <p style={{color: '#6b7280', fontSize: '0.9rem'}}>
              Awarded for exceptional dedication and active participation in all club activities 
              from enrollment through graduation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;