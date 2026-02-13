import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if device is mobile
    const checkMobile = () => {
      return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    
    setIsMobile(checkMobile());
    setIsVisible(!prefersReducedMotion);

    // Update on resize
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible || isMobile) return null;

  return (
    <>
      {/* Simplified background for better performance */}
      <div className="animated-bg-orbs">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
      </div>

      {/* Reduced geometric shapes */}
      <div className="geometric-shapes">
        <div className="shape shape-circle"></div>
        <div className="shape shape-triangle"></div>
      </div>
    </>
  );
};

export default AnimatedBackground;