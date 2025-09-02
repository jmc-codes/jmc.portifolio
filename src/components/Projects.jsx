import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../data/portfolio';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as LucideIcons from 'lucide-react';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get unique categories
  const categories = ['Todos', ...new Set(portfolioData.projects.map(project => project.category))];

  // Filter projects
  const filteredProjects = activeFilter === 'Todos' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === activeFilter);

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

      // Animate filter buttons
      const filterButtons = sectionRef.current.querySelectorAll('.filter-btn');
      gsap.fromTo(filterButtons,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate project cards
      const projectCards = projectsRef.current?.querySelectorAll('.project-card');
      if (projectCards) {
        gsap.fromTo(projectCards,
          {
            opacity: 0,
            y: 30,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="h-6 w-6" /> : null;
  };

  const handleFilterChange = (filter) => {
    if (filter !== activeFilter) {
      // Animate out current projects
      const projectCards = projectsRef.current?.querySelectorAll('.project-card');
      if (projectCards) {
        gsap.to(projectCards, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.in",
          onComplete: () => {
            setActiveFilter(filter);
            // Animate in new projects will be handled by useEffect
          }
        });
      } else {
        setActiveFilter(filter);
      }
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset image index when opening new project
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="section-header text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Meus <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções desenvolvidas que demonstram minha expertise técnica e impacto nos negócios
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`filter-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="project-card card-hover group cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        {getIcon(project.icon)}
                      </div>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Highlights */}
                  <div className="px-6 pb-4">
                    <div className="space-y-2">
                      {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start space-x-2">
                          <ChevronRight className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="px-6 pb-6">
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => openProjectModal(project)}
                      >
                        Ver Detalhes
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-3"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-3"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Modal/Details */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto">
              <Card className="max-w-4xl w-full max-h-[95vh] overflow-y-auto relative">
                <CardContent className="p-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeProjectModal}
                    className="absolute top-4 right-4 z-10"
                  >
                    <X className="h-6 w-6" />
                  </Button>

                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Project Info */}
                    <div className="lg:w-1/2">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            {getIcon(selectedProject.icon)}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                            <Badge variant="secondary">{selectedProject.category}</Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {selectedProject.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Tecnologias Utilizadas</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Principais Características</h4>
                        <div className="space-y-3">
                          {selectedProject.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        {selectedProject.githubLink && (
                          <Button asChild className="flex-1">
                            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Ver Código
                            </a>
                          </Button>
                        )}
                        {selectedProject.liveDemoLink && (
                          <Button asChild variant="outline" className="flex-1">
                            <a href={selectedProject.liveDemoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo Live
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Image Gallery */}
                    {selectedProject.images && selectedProject.images.length > 0 && (
                      <div className="lg:w-1/2 flex flex-col items-center justify-center">
                        <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden mb-4">
                          <img 
                            src={selectedProject.images[currentImageIndex]}
                            alt={`Screenshot ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {selectedProject.images.length > 1 && (
                            <>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
                                onClick={prevImage}
                              >
                                <ChevronRight className="h-5 w-5 rotate-180" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
                                onClick={nextImage}
                              >
                                <ChevronRight className="h-5 w-5" />
                              </Button>
                            </>
                          )}
                        </div>
                        {selectedProject.images.length > 1 && (
                          <div className="flex gap-2 mt-2">
                            {selectedProject.images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${index === currentImageIndex ? 'border-primary' : 'border-transparent'}`}
                                onClick={() => setCurrentImageIndex(index)}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;