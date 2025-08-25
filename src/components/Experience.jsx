import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/portfolio';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.fromTo(sectionRef.current.querySelector('.section-header'),
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate timeline items
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      
      timelineItems.forEach((item, index) => {
        gsap.fromTo(item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            scale: 0.9
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Animate timeline line
      gsap.fromTo(timelineRef.current.querySelector('.timeline-line'),
        {
          scaleY: 0
        },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="section-header text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Experiência <span className="text-gradient">Profissional</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Minha jornada profissional e as conquistas alcançadas ao longo dos anos
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Timeline Line */}
            <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-accent h-full origin-top" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {portfolioData.experience.map((exp, expIndex) => (
                <div key={exp.id} className="timeline-item relative">
                  {/* Company Header */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-background border-4 border-primary rounded-full p-4 relative z-10">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">
                          {exp.company.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Positions */}
                  <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
                    {exp.positions.map((position, posIndex) => (
                      <Card key={posIndex} className="card-hover">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h4 className="text-xl font-semibold mb-2 md:mb-0">
                              {position.title}
                            </h4>
                            <Badge variant="secondary" className="w-fit">
                              <Calendar className="h-3 w-3 mr-1" />
                              {position.period}
                            </Badge>
                          </div>

                          <div className="space-y-3">
                            {position.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-start space-x-3">
                                <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <p className="text-muted-foreground leading-relaxed">
                                  {achievement}
                                </p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline End */}
            <div className="flex items-center justify-center mt-12">
              <div className="bg-background border-4 border-accent rounded-full p-4 relative z-10">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

