// Optimized animation utilities for mobile performance

// Enhanced mobile/low-end device detection
const isLowEndDevice = () => {
  // Mobile detection
  if (window.innerWidth <= 768) return true;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return true;
  
  // Low-end device detection
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) return true;
  if (navigator.deviceMemory && navigator.deviceMemory <= 2) return true;
  
  // Battery level check (if available)
  if (navigator.getBattery) {
    navigator.getBattery().then(battery => {
      if (battery.level < 0.2) return true; // Low battery
    });
  }
  
  return false;
};

// Minimal intersection observer for low-end devices
export const initScrollAnimations = () => {
  if (!window.IntersectionObserver || isLowEndDevice()) {
    // Fallback: just add animate class to all elements immediately
    const elementsToAnimate = document.querySelectorAll('.section-enter, .animate-on-scroll');
    elementsToAnimate.forEach(el => el.classList.add('animate'));
    return null;
  }

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.section-enter, .animate-on-scroll');
  elementsToAnimate.forEach(el => observer.observe(el));

  return observer;
};

// Disabled scroll progress on mobile/low-end devices
export const initScrollProgress = () => {
  if (isLowEndDevice()) return null;
  
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  let ticking = false;
  const updateScrollProgress = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
        progressBar.style.width = scrollPercent + '%';
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  return updateScrollProgress;
};

// Optimized navbar scroll effect
export const initNavbarScrollEffect = () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return null;
  
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  return handleScroll;
};

// Completely disabled ripple effect on mobile/low-end devices
export const addRippleEffect = () => {
  if (isLowEndDevice()) return;
  
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Simplified ripple effect
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 100);
    });
  });
};

// Minimal initialization for better performance
export const initAllAnimations = () => {
  const init = () => {
    try {
      // Only initialize essential animations
      initNavbarScrollEffect();
      
      if (!isLowEndDevice()) {
        initScrollAnimations();
        initScrollProgress();
        setTimeout(() => addRippleEffect(), 100);
      }
      
    } catch (error) {
      console.warn('Animation initialization error:', error);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
};