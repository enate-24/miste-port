// Animation utilities and scroll handlers

// Intersection Observer for scroll animations
export const initScrollAnimations = () => {
  // Check if IntersectionObserver is supported
  if (!window.IntersectionObserver) {
    return null;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        // Add staggered animation to child elements
        const children = entry.target.querySelectorAll('.animate-on-scroll');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('animate');
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  const elementsToAnimate = document.querySelectorAll('.section-enter, .animate-on-scroll');
  elementsToAnimate.forEach(el => observer.observe(el));

  return observer;
};

// Scroll progress indicator
export const initScrollProgress = () => {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  const updateScrollProgress = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
    progressBar.style.width = scrollPercent + '%';
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  return updateScrollProgress;
};

// Navbar scroll effect
export const initNavbarScrollEffect = () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return null;
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  return handleScroll;
};

// Add ripple effect to buttons
export const addRippleEffect = () => {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Remove existing ripples
      const existingRipples = this.querySelectorAll('.ripple');
      existingRipples.forEach(ripple => ripple.remove());
      
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255, 255, 255, 0.6)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple-animation 0.6s linear';
      ripple.style.pointerEvents = 'none';
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.remove();
        }
      }, 600);
    });
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  // Wait for DOM to be ready
  const init = () => {
    try {
      initScrollAnimations();
      initScrollProgress();
      initNavbarScrollEffect();
      
      // Delay ripple effect to ensure buttons are rendered
      setTimeout(() => {
        addRippleEffect();
      }, 100);
      
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