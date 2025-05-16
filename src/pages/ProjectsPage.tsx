import React, { useEffect, useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';

const ProjectsPage: React.FC = () => {
  const { content } = useContent();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(content.projects.items);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Progetti | EnderDevelopment';
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(content.projects.items);
    } else {
      setFilteredProjects(
        content.projects.items.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter, content.projects.items]);

  // Extract unique categories
  const categories = ['all', ...new Set(content.projects.items.map((project) => project.category))];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{content.projects.title}</h1>
          <p className="text-xl text-primary-100 max-w-3xl">{content.projects.subtitle}</p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category === 'all' ? 'Tutti' : category}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nessun progetto trovato</h3>
              <p className="text-gray-600">
                Non ci sono progetti disponibili per la categoria selezionata.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Il Nostro Processo di Lavoro"
            subtitle="Come trasformiamo le idee in progetti di successo"
            centered
          />
          
          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-primary-200 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              <div className="relative">
                <div className="hidden md:block absolute top-6 left-1/2 w-6 h-6 rounded-full bg-primary-600 transform -translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right md:pr-12 mb-8 md:mb-0">
                    <div className="inline-block mb-4 p-3 bg-primary-100 rounded-lg text-primary-600">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Fase 1: Scoperta e Pianificazione</h3>
                    <p className="text-gray-600">
                      Iniziamo con un'analisi approfondita delle tue esigenze. Comprendiamo i tuoi obiettivi, il pubblico target e i requisiti tecnici. Da qui, sviluppiamo un piano dettagliato che guiderà l'intero progetto.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Fase di scoperta" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute top-6 left-1/2 w-6 h-6 rounded-full bg-primary-600 transform -translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:pl-12 order-2 md:order-1 mb-8 md:mb-0">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Fase di design" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:text-right md:pr-12 order-1 md:order-2">
                    <div className="inline-block mb-4 p-3 bg-primary-100 rounded-lg text-primary-600">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Fase 2: Design e Prototipazione</h3>
                    <p className="text-gray-600">
                      Creiamo wireframe e mockup dettagliati per visualizzare l'aspetto e il funzionamento del progetto. Lavoriamo a stretto contatto con te per perfezionare il design fino a quando non soddisfa completamente le tue aspettative.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute top-6 left-1/2 w-6 h-6 rounded-full bg-primary-600 transform -translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right md:pr-12 mb-8 md:mb-0">
                    <div className="inline-block mb-4 p-3 bg-primary-100 rounded-lg text-primary-600">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Fase 3: Sviluppo e Test</h3>
                    <p className="text-gray-600">
                      I nostri sviluppatori trasformano i design in codice funzionale, utilizzando le tecnologie più adatte al tuo progetto. Ogni componente viene rigorosamente testato per garantire qualità, sicurezza e prestazioni ottimali.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Fase di sviluppo" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute top-6 left-1/2 w-6 h-6 rounded-full bg-primary-600 transform -translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:pl-12 order-2 md:order-1 mb-8 md:mb-0">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/7709086/pexels-photo-7709086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Fase di lancio" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:text-right md:pr-12 order-1 md:order-2">
                    <div className="inline-block mb-4 p-3 bg-primary-100 rounded-lg text-primary-600">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Fase 4: Lancio e Supporto</h3>
                    <p className="text-gray-600">
                      Quando tutto è pronto, lanciamo il tuo progetto e ti forniamo il supporto necessario per garantirne il successo. Offriamo servizi di manutenzione e aggiornamento continui per mantenere la tua soluzione sempre all'avanguardia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">50+</div>
              <p className="text-xl text-primary-100">Progetti Completati</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">95%</div>
              <p className="text-xl text-primary-100">Clienti Soddisfatti</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">12</div>
              <p className="text-xl text-primary-100">Riconoscimenti</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">30+</div>
              <p className="text-xl text-primary-100">Aziende Partner</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;