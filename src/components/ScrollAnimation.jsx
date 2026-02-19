
import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ 
  children, 
  animation = 'fade-in', 
  threshold = 0.2, 
  delay = 0 
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const animateOnScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(`animate-${animation}`);
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: threshold
    });
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [animation, threshold, delay]);
  
  return (
    <div ref={elementRef} className="opacity-0">
      {children}
    </div>
  );
};

export default ScrollAnimation;
