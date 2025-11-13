import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { portfolioData } from '../data/portfolio';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

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

      // Animate contact cards
      const contactCards = sectionRef.current.querySelectorAll('.contact-card');
      gsap.fromTo(contactCards,
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
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate form
      gsap.fromTo(formRef.current,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate form submission
    try {
      // Here you would integrate with EmailJS or another service
      await new Promise(resolve => setTimeout(resolve, 2000));

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone.replace(/[^\d]/g, '')}`,
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: portfolioData.personal.location,
      href: '#',
      color: 'text-red-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/johnathan-campos',
      href: portfolioData.personal.linkedin,
      color: 'text-blue-600'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="section-header text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vamos conversar sobre oportunidades e como posso contribuir para o sucesso do seu projeto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Estou sempre aberto a discutir novas oportunidades, projetos interessantes
                  ou simplesmente trocar ideias sobre tecnologia e análise de dados.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="contact-card card-hover">
                    <CardContent className="p-4">
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 group"
                      >
                        <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {info.label}
                          </p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold mb-4">Conecte-se comigo</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(portfolioData.personal.github, '_blank')}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(`mailto:${portfolioData.personal.email}`, '_blank')}
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>


<div className="space-y-8">
      <div
        data-slot="card"
        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card-hover w-full"
        style={{ transform: "translate(0px, 0px)", opacity: 1 }}
      >
        <div
          data-slot="card-content"
          className="p-8 flex justify-center items-center w-full"
        >
          <figure className="relative group w-full max-w-full sm:max-w-7xl overflow-hidden rounded-xl">
            <div className="relative transform transition-transform duration-700 group-hover:scale-105 h-full">
              <img
                alt="My Img Office"
                loading="lazy"
                className="w-full object-cover object-center"
                src="./arqs/docs/my_ft_office-transp.png"
              />
              <div
                className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
            </div>
            <figcaption
              className="absolute bottom-6 left-6 z-20 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
            >
              <h3 className="text-3xl font-bold mb-2">Johnathan Campos</h3>
              <p className="max-w-lg text-sm text-gray-200">
                Especialista em dados e tecnologia, apaixonado por transformar
                ideias em soluções inteligentes.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>


            {/* Contact Form 
            <Card ref={formRef} className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Assunto da mensagem"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva seu projeto ou oportunidade..."
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Enviando...
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mensagem Enviada!
                      </>
                    ) : formStatus === 'error' ? (
                      <>
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Erro ao Enviar
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>

                  {formStatus === 'success' && (
                    <p className="text-green-600 text-sm text-center">
                      Obrigado! Sua mensagem foi enviada com sucesso. Retornarei em breve.
                    </p>
                  )}

                  {formStatus === 'error' && (
                    <p className="text-red-600 text-sm text-center">
                      Ops! Houve um erro ao enviar sua mensagem. Tente novamente.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
                  */}




          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

