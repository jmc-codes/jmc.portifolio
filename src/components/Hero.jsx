import React, { useEffect, useRef } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/portfolio';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating particles
      createParticles();

      // Main animation timeline
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        }
      )
        .fromTo(subtitleRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          },
          "-=0.5"
        )
        .fromTo(descriptionRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          },
          "-=0.3"
        )
        .fromTo(buttonsRef.current.children,
          {
            opacity: 0,
            y: 20,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)"
          },
          "-=0.2"
        )
        .fromTo(scrollIndicatorRef.current,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          },
          "-=0.3"
        );

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const createParticles = () => {
    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-primary/20 rounded-full';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particlesRef.current.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        y: -100 - Math.random() * 200,
        x: (Math.random() - 0.5) * 100,
        opacity: 0,
        duration: 3 + Math.random() * 4,
        repeat: -1,
        delay: Math.random() * 5,
        ease: "power1.out"
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    console.log('Iniciando download...');
    const link = document.createElement('a');
    link.href = 'assets/Profile.pdf';
    link.download = 'Johnathan_Campos_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Download iniciado!');
  };

   const handleDownloadCL = () => {
    console.log('Iniciando download...');
    const link = document.createElement('a');
    link.href = 'assets/Crt_JMC_Port.pdf';
    link.download = 'Johnathan_Campos_CL.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Download iniciado!');
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Animated Background Particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block text-foreground">
              {portfolioData.personal.name.split(' ')[0]}
            </span>
            <span className="block text-gradient">
              {portfolioData.personal.name.split(' ')[1]}
            </span>
          </h1>

          {/* Subtitle */}
          <h2
            ref={subtitleRef}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6"
          >
            {portfolioData.personal.title}
          </h2>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {portfolioData.personal.subtitle}
          </p>

          {/* Action Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="w-full sm:w-auto text-lg px-8 py-3 hero-gradient hover:opacity-90 transition-opacity"
            >
              Ver Projetos
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadCV}
              className="w-full sm:w-auto text-lg px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadCL}
              className="w-full sm:w-auto text-lg px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CL
            </Button>

          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full hover:bg-primary/10 transition-colors"
              onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full hover:bg-primary/10 transition-colors"
              onClick={() => window.open(portfolioData.personal.github, '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full hover:bg-primary/10 transition-colors"
              onClick={() => window.open(`mailto:${portfolioData.personal.email}`, '_blank')}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <div className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm mb-2">Scroll para explorar</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

