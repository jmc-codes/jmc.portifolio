import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = ({ className = "" }) => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    const createParticles = () => {
      const particleCount = 80;
      const particles = [];

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full pointer-events-none';
        
        // Random size and opacity
        const size = Math.random() * 4 + 1;
        const opacity = Math.random() * 0.3 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = `hsl(264, 50%, ${50 + Math.random() * 30}%)`;
        particle.style.opacity = opacity;
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        container.appendChild(particle);
        particles.push(particle);
      }

      particlesRef.current = particles;
      return particles;
    };

    // Animate particles
    const animateParticles = (particles) => {
      particles.forEach((particle, index) => {
        // Create unique animation for each particle
        const tl = gsap.timeline({ repeat: -1 });
        
        // Random movement pattern
        const duration = 15 + Math.random() * 20;
        const xMovement = (Math.random() - 0.5) * 200;
        const yMovement = (Math.random() - 0.5) * 200;
        
        tl.to(particle, {
          x: xMovement,
          y: yMovement,
          duration: duration / 2,
          ease: "sine.inOut"
        })
        .to(particle, {
          x: -xMovement,
          y: -yMovement,
          duration: duration / 2,
          ease: "sine.inOut"
        });

        // Add rotation
        gsap.to(particle, {
          rotation: 360,
          duration: 20 + Math.random() * 30,
          repeat: -1,
          ease: "none"
        });

        // Add scale pulsing
        gsap.to(particle, {
          scale: 1.5,
          duration: 3 + Math.random() * 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2
        });
      });
    };

    // Create gradient orbs
    const createGradientOrbs = () => {
      const orbCount = 3;
      const orbs = [];

      for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement('div');
        orb.className = 'absolute rounded-full pointer-events-none blur-3xl';
        
        const size = 200 + Math.random() * 300;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.background = `radial-gradient(circle, hsla(${264 + i * 30}, 70%, 60%, 0.1) 0%, transparent 70%)`;
        
        // Random starting position
        orb.style.left = Math.random() * 100 + '%';
        orb.style.top = Math.random() * 100 + '%';
        orb.style.transform = 'translate(-50%, -50%)';
        
        container.appendChild(orb);
        orbs.push(orb);
      }

      return orbs;
    };

    // Animate gradient orbs
    const animateOrbs = (orbs) => {
      orbs.forEach((orb, index) => {
        const tl = gsap.timeline({ repeat: -1 });
        const duration = 25 + index * 5;
        
        tl.to(orb, {
          x: (Math.random() - 0.5) * 400,
          y: (Math.random() - 0.5) * 400,
          duration: duration / 2,
          ease: "sine.inOut"
        })
        .to(orb, {
          x: (Math.random() - 0.5) * 400,
          y: (Math.random() - 0.5) * 400,
          duration: duration / 2,
          ease: "sine.inOut"
        });

        // Add opacity pulsing
        gsap.to(orb, {
          opacity: 0.3,
          duration: 8 + Math.random() * 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 2
        });
      });
    };

    // Initialize animations
    const particles = createParticles();
    const orbs = createGradientOrbs();
    
    animateParticles(particles);
    animateOrbs(orbs);

    // Cleanup function
    return () => {
      particles.forEach(particle => particle.remove());
      orbs.forEach(orb => orb.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    />
  );
};

export default AnimatedBackground;

