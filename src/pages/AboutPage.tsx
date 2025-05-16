import React, { useEffect } from 'react';
import { useContent } from '../contexts/ContentContext';
import SectionHeading from '../components/ui/SectionHeading';
import TeamMemberCard from '../components/ui/TeamMemberCard';

const AboutPage: React.FC = () => {
  const { content } = useContent();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Chi Siamo | EnderDevelopment';
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{content.about.title}</h1>
          <p className="text-xl text-primary-100 max-w-3xl">{content.about.subtitle}</p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {content.about.description}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {content.about.missionTitle}
              </h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {content.about.missionDescription}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                  <p className="text-gray-600">Progetti completati</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
                  <p className="text-gray-600">Clienti soddisfatti</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
                  <p className="text-gray-600">Anni di esperienza</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">12</div>
                  <p className="text-gray-600">Membri del team</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
              <div className="relative mt-8">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Office" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
              <div className="relative mt-8">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Meeting" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Workspace" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="I Nostri Valori"
            subtitle="Questi principi guidano il nostro lavoro e definiscono chi siamo"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovazione</h3>
              <p className="text-gray-600">
                Siamo costantemente alla ricerca di nuove tecnologie e approcci per offrire soluzioni all'avanguardia.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd"></path>
                  <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualità</h3>
              <p className="text-gray-600">
                Ci impegniamo a mantenere i più alti standard di qualità in ogni progetto che realizziamo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" clipRule="evenodd"></path>
                  <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trasparenza</h3>
              <p className="text-gray-600">
                Manteniamo una comunicazione aperta e onesta con i nostri clienti durante tutto il processo di sviluppo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Attenzione al cliente</h3>
              <p className="text-gray-600">
                Mettiamo le esigenze e le aspettative dei nostri clienti al centro di ogni decisione che prendiamo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={content.team.title}
            subtitle={content.team.subtitle}
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {content.team.members.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="La Nostra Storia"
            subtitle="Il percorso che ci ha portato dove siamo oggi"
            centered
          />
          
          <div className="relative mt-12">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-100"></div>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0 md:pr-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2020</h3>
                    <p className="text-gray-600">Fondazione di EnderDevelopment con un team di tre sviluppatori. Primi progetti focalizzati su siti web per piccole imprese locali.</p>
                  </div>
                  <div className="md:pl-8">
                    <img 
                      src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="2020" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-100"></div>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0 order-1 md:order-2 md:pl-8">
                    <img 
                      src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="2021" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                  <div className="order-2 md:order-1 md:pr-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2021</h3>
                    <p className="text-gray-600">Espansione del team a otto membri. Inizio dello sviluppo di applicazioni mobile e prime collaborazioni con aziende nazionali.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-100"></div>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0 md:pr-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2022</h3>
                    <p className="text-gray-600">Apertura del nostro attuale ufficio a Milano. Lancio della divisione dedicata all'e-commerce e ai sistemi di gestione aziendale.</p>
                  </div>
                  <div className="md:pl-8">
                    <img 
                      src="https://images.pexels.com/photos/3182783/pexels-photo-3182783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="2022" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-100"></div>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0 order-1 md:order-2 md:pl-8">
                    <img 
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="2023" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                  <div className="order-2 md:order-1 md:pr-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2023</h3>
                    <p className="text-gray-600">Riconoscimento come una delle aziende IT più innovative della regione. Iniziamo a offrire servizi di consulenza IT avanzata.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-100"></div>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0 md:pr-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2024</h3>
                    <p className="text-gray-600">Focus sull'intelligenza artificiale e soluzioni IoT. Espansione del team a dodici esperti e piano di crescita internazionale.</p>
                  </div>
                  <div className="md:pl-8">
                    <img 
                      src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="2024" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;