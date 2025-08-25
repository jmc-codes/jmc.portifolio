import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '../data/portfolio';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as LucideIcons from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const [animatedStats, setAnimatedStats] = useState(
    portfolioData.stats.map(() => ({ value: 0, isAnimated: false }))
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.fromTo(sectionRef.current.children,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate stats when they come into view
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => animateStats(),
        onLeaveBack: () => resetStats()
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const animateStats = () => {
    portfolioData.stats.forEach((stat, index) => {
      if (!animatedStats[index].isAnimated) {
        const isPercentage = stat.value.includes('%');
        const isTime = stat.value.includes('h/sem');
        const isPlus = stat.value.includes('+');
        
        let numericValue = parseInt(stat.value.replace(/[^\d]/g, ''));
        
        gsap.to({}, {
          duration: 2,
          ease: "power2.out",
          onUpdate: function() {
            const progress = this.progress();
            const currentValue = Math.round(numericValue * progress);
            
            let displayValue = currentValue.toString();
            if (isPercentage) displayValue += '%';
            else if (isTime) displayValue += 'h/sem';
            else if (isPlus) displayValue += '+';
            
            setAnimatedStats(prev => {
              const newStats = [...prev];
              newStats[index] = { value: displayValue, isAnimated: true };
              return newStats;
            });
          }
        });
      }
    });
  };

  const resetStats = () => {
    setAnimatedStats(portfolioData.stats.map(() => ({ value: 0, isAnimated: false })));
  };

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="h-8 w-8" /> : null;
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça minha trajetória profissional e os resultados que alcancei
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Info */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/40">JC</div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full animate-float" />
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>

              {/* Personal Info */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">{portfolioData.personal.name}</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {portfolioData.personal.summary}
                </p>
                
                {/* Languages */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Idiomas</h4>
                  <div className="flex flex-wrap gap-3">
                    {portfolioData.languages.map((lang, index) => (
                      <div key={index} className="flex items-center gap-2 bg-secondary px-3 py-1 rounded-full">
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-muted-foreground">({lang.level})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              {portfolioData.stats.map((stat, index) => (
                <Card key={index} className="card-hover text-center p-6">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {getIcon(stat.icon)}
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gradient mb-2">
                          {animatedStats[index]?.value || '0'}
                        </div>
                        <p className="text-muted-foreground font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Formação Acadêmica</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.education.map((edu, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <LucideIcons.GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                        <p className="text-primary font-medium mb-2">{edu.institution}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">{edu.period}</span>
                          <span className="bg-secondary px-2 py-1 rounded text-sm">
                            {edu.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

