import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import ProjectCard from '../components/ui/ProjectCard';
import TestimonialCard from '../components/ui/TestimonialCard';

const HomePage: React.FC = () => {
  const { content } = useContent();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'EnderDevelopment - Soluzioni Digitali Innovative';
  }, []);

  // Filter to show only the most recent 3 projects
  const featuredProjects = content.projects.items.slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] bg-gradient-to-br from-primary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900 z-10"></div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button variant="primary" size="lg">
                  {content.hero.ctaText}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Contattaci
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8 z-20 animate-bounce">
          <a href="#services" className="text-white bg-white/20 p-2 rounded-full">
            <ChevronRight size={24} className="rotate-90" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={content.services.title}
            subtitle={content.services.subtitle}
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.items.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline">
                Scopri tutti i servizi <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title={content.about.title}
                subtitle={content.about.subtitle}
              />
              <p className="text-gray-600 mb-8">
                {content.about.description}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {content.about.missionTitle}
              </h3>
              <p className="text-gray-600 mb-8">
                {content.about.missionDescription}
              </p>
              <Link to="/about">
                <Button variant="primary">
                  Scopri di più su di noi <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team al lavoro" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">10</div>
                    <div className="ml-4">
                      <p className="font-bold text-gray-900">Progetti completati</p>
                      <p className="text-sm text-gray-600">Nell'ultimo anno</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary-600 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="mt-2 text-sm text-gray-600">Clienti soddisfatti</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={content.projects.title}
            subtitle={content.projects.subtitle}
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button variant="primary">
                Visualizza tutti i progetti <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={content.testimonials.title}
            subtitle={content.testimonials.subtitle}
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto a trasformare la tua idea in realtà?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contattaci oggi per discutere del tuo progetto e scoprire come possiamo aiutarti a raggiungere i tuoi obiettivi.
          </p>
          <Link to="/contact">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-white text-primary-800 hover:bg-gray-100"
            >
              Contattaci Ora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;