import React, { useState, useEffect, useMemo } from 'react';

const ProfileImage = ({ className, alt }) => {
  const [imageState, setImageState] = useState('loading'); // loading, loaded, error
  const [currentSrc, setCurrentSrc] = useState('');

  // Multiple image sources to try - memoized to prevent recreation
  const imageSources = useMemo(() => [
    // Try importing from assets first
    () => import('../assets/profile.JPG').then(module => module.default).catch(() => null),
    // Then try public folder paths
    '/profile.JPG',
    '/profile.jpg',
    '/profile.jpeg',
    '/profile.png',
    // Try with different cases
    '/Profile.JPG',
    '/Profile.jpg'
  ], []);

  useEffect(() => {
    const loadImage = async () => {
      for (const source of imageSources) {
        try {
          let src;
          
          if (typeof source === 'function') {
            // Dynamic import
            src = await source();
            if (!src) continue;
          } else {
            // Static path
            src = source;
          }

          // Test if image loads
          const img = new Image();
          img.crossOrigin = 'anonymous';
          
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = src;
          });

          // If we get here, image loaded successfully
          setCurrentSrc(src);
          setImageState('loaded');
          return;
          
        } catch (error) {
          console.log(`Failed to load image from: ${source}`);
          continue;
        }
      }
      
      // If no image loaded, show error state
      console.log('All image sources failed, showing placeholder');
      setImageState('error');
    };

    loadImage();
  }, [imageSources]);

  if (imageState === 'error' || imageState === 'loading') {
    return (
      <div className="profile-photo-placeholder">
        <div className="placeholder-initials">
          WC
        </div>
      </div>
    );
  }

  return (
    <img 
      src={currentSrc}
      alt={alt}
      className={`${className} loaded`}
      onError={() => {
        console.log('Image error after loading, showing placeholder');
        setImageState('error');
      }}
    />
  );
};

export default ProfileImage;