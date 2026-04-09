import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../data/portfolio';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as LucideIcons from 'lucide-react';
import {
  ExternalLink,
  Github,
  ChevronRight,
  ChevronLeft,
  X,
  Maximize2,
  Monitor,
  Image as ImageIcon,
  List,
  Eye,
  Layers,
  Grid3X3,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─── Category style mapping ───
const categoryMeta = {
  BI: { icon: 'BarChart3', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10', textColor: 'text-blue-500' },
  Aplicativo: { icon: 'Smartphone', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10', textColor: 'text-purple-500' },
  Automação: { icon: 'Zap', color: 'from-amber-500 to-orange-500', bgColor: 'bg-amber-500/10', textColor: 'text-amber-500' },
};

// ─── Project Card (Grid view) ───
const ProjectCard = ({ project, onOpen, getIcon }) => {
  const meta = categoryMeta[project.category] || categoryMeta.BI;
  const hasPowerBi = !!project.powerBiEmbed;
  const hasImages = project.images && project.images.length > 0;

  return (
    <Card
      className="project-card group cursor-pointer overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 relative"
      onClick={() => onOpen(project)}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes do projeto: ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(project); } }}
    >
      {/* Top gradient accent */}
      <div className={`h-1 w-full bg-gradient-to-r ${meta.color}`} />

      <CardContent className="p-0">
        {/* Thumbnail / Preview area */}
        <div className="relative h-44 sm:h-48 overflow-hidden bg-muted/30">
          {hasImages ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <div className={`w-16 h-16 rounded-2xl ${meta.bgColor} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {getIcon(project.icon, `h-8 w-8 ${meta.textColor}`)}
              </div>
              <span className="text-xs text-muted-foreground/60 font-medium uppercase tracking-widest">
                {project.category}
              </span>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Tags floating */}
          <div className="absolute top-3 left-3 flex gap-2">
            {hasPowerBi && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/90 text-white text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                <Monitor className="h-3 w-3" /> Power BI
              </span>
            )}
            {hasImages && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 text-white text-[10px] font-semibold backdrop-blur-sm">
                <ImageIcon className="h-3 w-3" /> {project.images.length}
              </span>
            )}
          </div>

          {/* Quick-view button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-lg">
              <Eye className="h-4 w-4" /> Ver Projeto
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className={`text-[10px] uppercase tracking-wider font-semibold ${meta.textColor} ${meta.bgColor} border-0`}>
              {project.category}
            </Badge>
            {project.status && (
              <span className="text-[10px] uppercase tracking-wider text-emerald-500 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {project.status}
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <Badge key={i} variant="outline" className="text-[10px] px-2 py-0.5 font-medium">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-[10px] px-2 py-0.5 font-medium">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Highlights preview */}
          <div className="space-y-1.5">
            {project.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-1">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// ─── Modal Tabs ───
const MODAL_TABS = {
  DETAILS: 'details',
  GALLERY: 'gallery',
  POWERBI: 'powerbi',
};

const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState(MODAL_TABS.DETAILS);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(false);
  const [powerBiLoaded, setPowerBiLoaded] = useState(false);
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  const hasImages = project.images && project.images.length > 0;
  const hasPowerBi = !!project.powerBiEmbed;
  const meta = categoryMeta[project.category] || categoryMeta.BI;

  const getIcon = (iconName, className = 'h-6 w-6') => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className={className} /> : null;
  };

  // Available tabs
  const tabs = [
    { key: MODAL_TABS.DETAILS, label: 'Detalhes', icon: List },
    ...(hasImages ? [{ key: MODAL_TABS.GALLERY, label: 'Galeria', icon: ImageIcon }] : []),
    ...(hasPowerBi ? [{ key: MODAL_TABS.POWERBI, label: 'Dashboard', icon: Monitor }] : []),
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (fullscreenImage) setFullscreenImage(false);
        else onClose();
      }
      if (activeTab === MODAL_TABS.GALLERY && hasImages) {
        if (e.key === 'ArrowRight') setCurrentImageIndex((p) => (p + 1) % project.images.length);
        if (e.key === 'ArrowLeft') setCurrentImageIndex((p) => (p - 1 + project.images.length) % project.images.length);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [activeTab, fullscreenImage, hasImages, onClose, project.images]);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(modalRef.current, { opacity: 0, y: 40, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.4)' });
    });
    document.body.style.overflow = 'hidden';
    return () => { ctx.revert(); document.body.style.overflow = ''; };
  }, []);

  // Touch swipe for gallery images
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (!hasImages) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setCurrentImageIndex((p) => (p + 1) % project.images.length);
      else setCurrentImageIndex((p) => (p - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100]"
        onClick={onClose}
        aria-label="Fechar modal"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto">
        <div
          ref={modalRef}
          className="relative w-full max-w-5xl bg-card rounded-2xl shadow-2xl border border-border/50 my-4 sm:my-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative rounded-t-2xl overflow-hidden">
            <div className={`h-1.5 w-full bg-gradient-to-r ${meta.color}`} />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6">
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${meta.bgColor} flex items-center justify-center flex-shrink-0`}>
                  {getIcon(project.icon, `h-6 w-6 sm:h-7 sm:w-7 ${meta.textColor}`)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold truncate">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <Badge variant="secondary" className={`text-[10px] uppercase tracking-wider ${meta.textColor} ${meta.bgColor} border-0`}>
                      {project.category}
                    </Badge>
                    {project.status && (
                      <span className="text-[10px] uppercase tracking-wider text-emerald-500 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 sm:relative sm:top-auto sm:right-auto rounded-full hover:bg-destructive/10 hover:text-destructive"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Tabs */}
            <div className="px-5 sm:px-6 border-b border-border/50">
              <div className="flex gap-1 overflow-x-auto hide-scrollbar -mb-px">
                {tabs.map(({ key, label, icon: TabIcon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                      activeTab === key
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                    }`}
                  >
                    <TabIcon className="h-4 w-4" />
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-5 sm:p-6 max-h-[60vh] sm:max-h-[65vh] overflow-y-auto">
            {/* ─── Details Tab ─── */}
            {activeTab === MODAL_TABS.DETAILS && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="px-3 py-1">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.githubLink && (
                      <Button asChild size="sm">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" /> Código
                        </a>
                      </Button>
                    )}
                    {project.liveDemoLink && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> Demo
                        </a>
                      </Button>
                    )}
                    {hasPowerBi && (
                      <Button variant="outline" size="sm" onClick={() => setActiveTab(MODAL_TABS.POWERBI)}>
                        <Monitor className="h-4 w-4 mr-2" /> Ver Dashboard
                      </Button>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Características</h4>
                  <div className="space-y-3">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${meta.color} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5`}>
                          {i + 1}
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ─── Gallery Tab ─── */}
            {activeTab === MODAL_TABS.GALLERY && hasImages && (
              <div>
                {/* Main Image */}
                <div
                  className="relative w-full rounded-xl overflow-hidden bg-muted/30 mb-4"
                  style={{ aspectRatio: '16/9' }}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />

                  {/* Navigation arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((p) => (p - 1 + project.images.length) % project.images.length)}
                        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-sm"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((p) => (p + 1) % project.images.length)}
                        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-sm"
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {/* Fullscreen button */}
                  <button
                    onClick={() => setFullscreenImage(true)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-sm"
                    aria-label="Tela cheia"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>

                  {/* Counter */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                {project.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                    {project.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          i === currentImageIndex ? 'border-primary ring-2 ring-primary/30' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Fullscreen overlay */}
                {fullscreenImage && (
                  <div
                    className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setFullscreenImage(false)}
                  >
                    <button
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                      onClick={() => setFullscreenImage(false)}
                      aria-label="Fechar tela cheia"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} - Fullscreen`}
                      className="max-w-full max-h-full object-contain"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            )}

            {/* ─── Power BI Tab ─── */}
            {activeTab === MODAL_TABS.POWERBI && hasPowerBi && (
              <div>
                <div className="relative w-full rounded-xl overflow-hidden bg-muted/30 border border-border/50" style={{ aspectRatio: '16/9', minHeight: '300px' }}>
                  {!powerBiLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm text-muted-foreground">Carregando dashboard...</span>
                    </div>
                  )}
                  <iframe
                    title={`Power BI - ${project.title}`}
                    src={project.powerBiEmbed}
                    className="w-full h-full border-0"
                    style={{ minHeight: '300px', aspectRatio: '16/9' }}
                    allowFullScreen
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    onLoad={() => setPowerBiLoaded(true)}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Interaja com o dashboard acima. Use os filtros e gráficos para explorar os dados.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// ─── Main Component ───
const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['Todos', ...new Set(portfolioData.projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === 'Todos'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeFilter);

  const categoryCounts = {};
  portfolioData.projects.forEach((p) => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });
  categoryCounts['Todos'] = portfolioData.projects.length;

  const getIcon = useCallback((iconName, className = 'h-6 w-6') => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className={className} /> : null;
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelector('.section-header'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const filterButtons = sectionRef.current.querySelectorAll('.filter-btn');
      gsap.fromTo(
        filterButtons,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate cards on filter/view change
  useEffect(() => {
    if (!projectsRef.current) return;
    const cards = projectsRef.current.querySelectorAll('.project-card');
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: 'back.out(1.4)' }
    );
  }, [filteredProjects, viewMode]);

  const handleFilterChange = (filter) => {
    if (filter === activeFilter) return;
    const cards = projectsRef.current?.querySelectorAll('.project-card');
    if (cards?.length) {
      gsap.to(cards, {
        opacity: 0,
        y: -15,
        duration: 0.25,
        stagger: 0.03,
        ease: 'power2.in',
        onComplete: () => setActiveFilter(filter),
      });
    } else {
      setActiveFilter(filter);
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-16 sm:py-24 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* ─── Header ─── */}
          <div className="section-header text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Layers className="h-4 w-4" />
              Portfólio de Projetos
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Meus <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluções desenvolvidas que demonstram expertise técnica e impacto direto nos negócios
            </p>
          </div>

          {/* ─── Filters + View Toggle ─── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => {
                const meta = categoryMeta[category];
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    className={`filter-btn inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                        : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                    }`}
                  >
                    {meta && getIcon(meta.icon, 'h-4 w-4')}
                    {category}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-muted'}`}>
                      {categoryCounts[category]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1 p-1 bg-secondary rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                aria-label="Visualização em grade"
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                aria-label="Visualização em lista"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ─── Projects Grid / List ─── */}
          <div
            ref={projectsRef}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6'
                : 'flex flex-col gap-4'
            }
          >
            {filteredProjects.map((project, index) =>
              viewMode === 'grid' ? (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpen={setSelectedProject}
                  getIcon={getIcon}
                />
              ) : (
                <Card
                  key={project.id}
                  className="project-card group cursor-pointer overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                  onClick={() => setSelectedProject(project)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Ver detalhes: ${project.title}`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedProject(project); } }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative w-full sm:w-48 h-36 sm:h-auto flex-shrink-0 overflow-hidden bg-muted/30">
                        {project.images?.length > 0 ? (
                          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className={`w-12 h-12 rounded-xl ${(categoryMeta[project.category] || categoryMeta.BI).bgColor} flex items-center justify-center`}>
                              {getIcon(project.icon, `h-6 w-6 ${(categoryMeta[project.category] || categoryMeta.BI).textColor}`)}
                            </div>
                          </div>
                        )}
                        {project.powerBiEmbed && (
                          <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/90 text-white text-[10px] font-semibold">
                            <Monitor className="h-3 w-3" /> Power BI
                          </span>
                        )}
                      </div>

                      <div className="flex-1 p-4 sm:p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className={`text-[10px] ${(categoryMeta[project.category] || categoryMeta.BI).textColor} ${(categoryMeta[project.category] || categoryMeta.BI).bgColor} border-0`}>
                            {project.category}
                          </Badge>
                          {project.status && (
                            <span className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              {project.status}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 5).map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-[10px] px-2 py-0.5">{tech}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center pr-5">
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Layers className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}

          {/* Stats bar */}
          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-10 text-center">
            {Object.entries(categoryCounts)
              .filter(([k]) => k !== 'Todos')
              .map(([category, count]) => {
                const meta = categoryMeta[category] || categoryMeta.BI;
                return (
                  <div key={category} className="flex flex-col items-center gap-1">
                    <span className={`text-2xl sm:text-3xl font-bold ${meta.textColor}`}>{count}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{category}</span>
                  </div>
                );
              })}
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-primary">{portfolioData.projects.length}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Total</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Project Modal ─── */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;