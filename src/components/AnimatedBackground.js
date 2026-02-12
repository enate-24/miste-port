import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsVisible(!prefersReducedMotion);
  }, []);

  if (!isVisible) return null;

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