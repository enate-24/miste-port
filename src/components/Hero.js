import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState('');

  // Try multiple image sources
  const imageSources = [
    '/profile.JPG',
    '/profile-photo.JPG',
    '/profile.jpg',
    '/profile-photo.jpg',
    '/profile.jpeg',
    '/profile.png'
  ];

  useEffect(() => {
    // Try to load the first available image
    const tryLoadImage = async () => {
      for (const src of imageSources) {
        try {
          const img = new Image();
          img.src = src;
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
          setCurrentImageSrc(src);
          return;
        } catch (error) {
          continue;
        }
      }
      // If no image loads, show placeholder
      setImageError(true);
    };

    tryLoadImage();
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="profile-photo-container">
            {!imageError && currentImageSrc && (
              <img 
                src={currentImageSrc}
                alt="Wubalem Chekulo Endeshaw" 
                className={`profile-photo ${imageLoaded ? 'loaded' : ''}`}
                onError={handleImageError}
                onLoad={handleImageLoad}
                style={{ display: imageLoaded ? 'block' : 'none' }}
              />
            )}
            {(imageError || !currentImageSrc || !imageLoaded) && (
              <div className="profile-photo-placeholder">
                <div className="placeholder-initials">
                  WC
                </div>
              </div>
            )}
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