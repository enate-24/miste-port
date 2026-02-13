import React, { useState, useEffect, useMemo } from 'react';

const ProfileImage = ({ className, alt }) => {
  const [imageState, setImageState] = useState('loading');
  const [currentSrc, setCurrentSrc] = useState('');

  // Check if device is mobile/low-end for simplified loading
  const isMobileOrLowEnd = useMemo(() => {
    if (typeof window === 'undefined') return false;
    
    return window.innerWidth <= 768 || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
           (navigator.deviceMemory && navigator.deviceMemory <= 2);
  }, []);

  // Simplified image sources for mobile
  const imageSources = useMemo(() => {
    if (isMobileOrLowEnd) {
      // Only try the most likely sources on mobile
      return ['/profile.JPG', '/profile.jpg'];
    }
    
    return [
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
    ];
  }, [isMobileOrLowEnd]);

  useEffect(() => {
    const loadImage = async () => {
      // On mobile, show placeholder immediately if no quick load
      if (isMobileOrLowEnd) {
        const quickTest = new Image();
        quickTest.src = '/profile.JPG';
        
        const timeout = setTimeout(() => {
          setImageState('error');
        }, 1000); // 1 second timeout on mobile
        
        quickTest.onload = () => {
          clearTimeout(timeout);
          setCurrentSrc('/profile.JPG');
          setImageState('loaded');
        };
        
        quickTest.onerror = () => {
          clearTimeout(timeout);
          setImageState('error');
        };
        
        return;
      }

      // Full loading logic for desktop
      for (const source of imageSources) {
        try {
          let src;
          
          if (typeof source === 'function') {
            src = await source();
            if (!src) continue;
          } else {
            src = source;
          }

          const img = new Image();
          img.crossOrigin = 'anonymous';
          
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = src;
          });

          setCurrentSrc(src);
          setImageState('loaded');
          return;
          
        } catch (error) {
          continue;
        }
      }
      
      setImageState('error');
    };

    loadImage();
  }, [imageSources, isMobileOrLowEnd]);

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
      loading="lazy"
      decoding="async"
      onError={() => setImageState('error')}
    />
  );
};

export default ProfileImage;