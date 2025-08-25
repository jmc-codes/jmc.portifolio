import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update cursor position immediately
      gsap.set(cursor, {
        x: mouseX,
        y: mouseY
      });

      // Update follower with delay
      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Mouse enter handler for interactive elements
    const handleMouseEnter = () => {
      isHovering = true;
      
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.3,
        ease: "back.out(1.7)"
      });

      gsap.to(follower, {
        scale: 2,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    // Mouse leave handler for interactive elements
    const handleMouseLeave = () => {
      isHovering = false;
      
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });

      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    // Mouse down handler
    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
        ease: "power2.out"
      });

      gsap.to(follower, {
        scale: isHovering ? 1.8 : 0.8,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    // Mouse up handler
    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: isHovering ? 0.5 : 1,
        duration: 0.2,
        ease: "back.out(1.7)"
      });

      gsap.to(follower, {
        scale: isHovering ? 2 : 1,
        duration: 0.2,
        ease: "back.out(1.7)"
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hide cursor when leaving window
    const handleMouseLeaveWindow = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.2
      });
    };

    const handleMouseEnterWindow = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.2
      });
    };

    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Don't render on touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
      return;
    }
  }, []);

  // Check if it's a touch device
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Follower circle */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[9998]"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CursorFollower;

