import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransitions = ({ children }) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    
    if (!container || !overlay) return;

    // Initial page load animation
    const tl = gsap.timeline();
    
    tl.set(overlay, { scaleX: 1 })
      .to(overlay, {
        scaleX: 0,
        duration: 1,
        ease: "power2.inOut",
        transformOrigin: "right center"
      })
      .from(container, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");

  }, []);

  return (
    <>
      {/* Page transition overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-primary z-[10000] origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
      
      {/* Main content container */}
      <div ref={containerRef} className="relative z-10">
        {children}
      </div>
    </>
  );
};

// Section transition component for smooth scrolling between sections
export const SectionTransition = ({ children, className = "" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Create intersection observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(entry.target.children, {
              opacity: 0,
              y: 50,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out"
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

// Magnetic button component with advanced hover effects
export const MagneticButton = ({ children, className = "", ...props }) => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    
    if (!button || !text) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(text, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });

      gsap.to(text, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    const handleMouseLeaveScale = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeaveScale);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeaveScale);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <span ref={textRef} className="relative z-10">
        {children}
      </span>
    </button>
  );
};

// Reveal text animation component
export const RevealText = ({ children, className = "", delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    // Split text into words and characters
    const words = text.textContent.split(' ');
    text.innerHTML = '';

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.overflow = 'hidden';
      wordSpan.style.marginRight = '0.25em';

      const chars = word.split('');
      chars.forEach((char, charIndex) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.display = 'inline-block';
        charSpan.style.transform = 'translateY(100%)';
        wordSpan.appendChild(charSpan);
      });

      text.appendChild(wordSpan);
    });

    // Animate characters
    const chars = text.querySelectorAll('span span');
    
    gsap.to(chars, {
      y: 0,
      duration: 0.8,
      stagger: 0.02,
      ease: "back.out(1.7)",
      delay: delay,
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

  }, [delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default PageTransitions;

