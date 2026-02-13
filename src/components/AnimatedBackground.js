import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if device is mobile or low-end
    const isMobileOrLowEnd = () => {
      // Mobile detection
      if (window.innerWidth <= 768) return true;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return true;
      
      // Low-end device detection
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) return true;
      if (navigator.deviceMemory && navigator.deviceMemory <= 2) return true;
      
      return false;
    };
    
    // Only render on desktop with good performance
    setShouldRender(!prefersReducedMotion && !isMobileOrLowEnd());

    // Update on resize
    const handleResize = () => {
      setShouldRender(!prefersReducedMotion && !isMobileOrLowEnd());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render anything on mobile or low-end devices
  if (!shouldRender) return null;

  return (
    <>
      {/* Minimal background effects for desktop only */}
      <div className="animated-bg-orbs">
        <div className="bg-orb bg-orb-1"></div>
      </div>
    </>
  );
};

export default AnimatedBackground;