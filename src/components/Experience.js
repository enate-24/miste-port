import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section section-alternate section-enter">
      <div className="container">
        <h2 className="section-title">Experience & Activities</h2>
        
        <div className="card experience-card animate-on-scroll slide-in-up">
          <div className="experience-header">
            <div>
              <h3 className="experience-title">Document Authentication Officer</h3>
              <p className="experience-company">Document Authentication and Registration Service</p>
            </div>
            <span className="experience-date glow-effect">2023 – Present</span>
          </div>
          <div className="experience-description">
            <p>
              Currently serving as a Document Authentication Officer, applying analytical skills 
              and attention to detail in verifying and processing official documents for 
              authentication and registration purposes.
            </p>
            <ul>
              <li>
                Conduct thorough verification and authentication of various official documents, 
                ensuring compliance with regulatory standards and procedures
              </li>
              <li>
                Utilize statistical analysis skills to identify patterns and anomalies in 
                document processing workflows, contributing to quality assurance
              </li>
              <li>
                Maintain accurate records and databases of processed documents, applying 
                data management principles learned during academic studies
              </li>
              <li>
                Collaborate with team members to streamline authentication processes and 
                improve service delivery efficiency
              </li>
              <li>
                Provide excellent customer service while handling sensitive document 
                authentication requests with professionalism and confidentiality
              </li>
            </ul>
          </div>
        </div>

        <div className="card experience-card animate-on-scroll slide-in-up">
          <div className="experience-header">
            <div>
              <h3 className="experience-title">Public Relations Head</h3>
              <p className="experience-company">Dilla University Charity Club</p>
            </div>
            <span className="experience-date">November 2021 – July 2023</span>
          </div>
          <div className="experience-description">
            <p>
              Led public relations initiatives for the university's charity organization, 
              demonstrating leadership and communication excellence throughout my academic tenure.
            </p>
            <ul>
              <li>
                Coordinated volunteer teams and managed the execution of charity events, 
                ensuring smooth operations and maximum community impact
              </li>
              <li>
                Utilized strong communication and organizational skills to facilitate 
                effective public engagement and community outreach
              </li>
              <li>
                Served as a key liaison between the club, student union, and university 
                administration, fostering collaborative relationships
              </li>
              <li>
                Developed and implemented communication strategies that enhanced the 
                club's visibility and participation rates
              </li>
            </ul>
          </div>
        </div>
        
        <div className="card animate-on-scroll" style={{textAlign: 'center', marginTop: '3rem'}}>
          <h3 style={{color: '#1e40af', marginBottom: '2.5rem', fontSize: '1.6rem', fontWeight: '700'}}>Professional Highlights</h3>
          <div className="highlights-grid" style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div className="achievement-stat">
              <div className="stat-number">1+</div>
              <p className="stat-label">Years Professional</p>
              <p className="stat-description">Document authentication experience</p>
            </div>
            <div className="achievement-stat">
              <div className="stat-number">2</div>
              <p className="stat-label">Years Leadership</p>
              <p className="stat-description">University charity club</p>
            </div>
            <div className="achievement-stat">
              <div className="stat-number">★</div>
              <p className="stat-label">Merit Certificate</p>
              <p className="stat-description">Outstanding academic dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;