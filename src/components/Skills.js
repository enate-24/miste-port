import React from 'react';

const Skills = () => {
  const technicalSkills = [
    'SPSS',
    'SAS',
    'R Programming',
    'Minitab',
    'Microsoft Excel',
    'Microsoft Word',
    'Microsoft PowerPoint'
  ];

  const analyticalSkills = [
    'Data Analysis & Interpretation',
    'Statistical Modeling',
    'Hypothesis Testing',
    'Data Visualization',
    'Report Writing',
    'Research Methods',
    'Document Verification',
    'Quality Assurance',
    'Process Analysis'
  ];

  const softSkills = [
    'Teamwork and Collaboration',
    'Excellent Communication',
    'Public Relations',
    'Time Management',
    'Problem Solving',
    'Fast Learning',
    'Leadership',
    'Organization',
    'Attention to Detail',
    'Customer Service',
    'Confidentiality Management'
  ];

  return (
    <section id="skills" className="section section-enter">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="card skill-category animate-on-scroll float-animation">
            <h3>Technical Skills</h3>
            <ul className="skill-list">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="interactive-hover">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="card skill-category animate-on-scroll">
            <h3>Analytical Skills</h3>
            <ul className="skill-list">
              {analyticalSkills.map((skill, index) => (
                <li key={index} className="interactive-hover">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="card skill-category animate-on-scroll float-animation-reverse">
            <h3>Soft Skills</h3>
            <ul className="skill-list">
              {softSkills.map((skill, index) => (
                <li key={index} className="interactive-hover">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;