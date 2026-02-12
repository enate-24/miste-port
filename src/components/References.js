import React from 'react';

const References = () => {
  const references = [
    {
      name: "Getasew Birhanu (MSc)",
      title: "Lecturer, Department of Statistics",
      institution: "Dilla University, Ethiopia",
      email: "get.birhanu@yahoo.com",
      phone: "0918011329",
      quote: "She has proven that through hard work and teamwork, she can accomplish tasks in a courteous and timely manner. I believe she will be an asset to your organization."
    },
    {
      name: "Bahirnesh Teshime",
      title: "Lecturer, Department of Statistics", 
      institution: "Dilla University, Ethiopia",
      email: "bahirnesht018@gmail.com",
      phone: "093255525551",
      quote: ""
    },
    {
      name: "Kassahun Animum Metkie (MSc in Biostatistics)",
      title: "Lecturer, College of Natural and Computational Science",
      institution: "Dilla University, Ethiopia", 
      email: "kaas.ww@gmail.com / kassahunanimut@du.edu.et",
      phone: "+251920741362",
      quote: "Ms. Wubalem is intelligent, inquisitive, and determined to gain in-depth knowledge through hard work. She bears good moral character and has a good command of English in both written and spoken forms. I recommend her in the strongest terms."
    }
  ];

  return (
    <section id="references" className="section section-enter">
      <div className="container">
        <h2 className="section-title">References</h2>
        <div className="references-grid">
          {references.map((ref, index) => (
            <div key={index} className="card reference-card animate-on-scroll">
              <h3 className="reference-name">{ref.name}</h3>
              <p className="reference-title">{ref.title}</p>
              <p style={{color: '#6b7280', marginBottom: '1rem', fontStyle: 'italic'}}>{ref.institution}</p>
              <div className="reference-contact">
                <p><strong>Email:</strong> {ref.email}</p>
                <p><strong>Phone:</strong> {ref.phone}</p>
              </div>
              {ref.quote && (
                <div className="reference-quote">
                  <p>"{ref.quote}"</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;