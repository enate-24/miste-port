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

  // Don't render background animations on mobile devices
  if (!isVisible || isMobile) return null;

  return (
    <>
      {/* Animated Background Orbs */}
      <div className="animated-bg-orbs">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape shape-triangle"></div>
        <div className="shape shape-square"></div>
        <div className="shape shape-circle"></div>
        <div className="shape shape-diamond"></div>
      </div>

      {/* Grid Pattern */}
      <div className="grid-pattern"></div>

      {/* Floating Dots */}
      <div className="floating-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {/* Wave Background */}
      <div className="wave-bg"></div>
    </>
  );
};

export default AnimatedBackground;