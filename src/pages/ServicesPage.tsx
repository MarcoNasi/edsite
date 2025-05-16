import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const { content } = useContent();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Servizi | EnderDevelopment';
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{content.services.title}</h1>
          <p className="text-xl text-primary-100 max-w-3xl">{content.services.subtitle}</p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.items.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="I Nostri Servizi in Dettaglio"
            subtitle="Esplora come possiamo aiutarti a raggiungere i tuoi obiettivi"
            centered
          />

          {content.services.items.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`py-12 ${index < content.services.items.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : 'md:order-1'}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Cosa includiamo:</h4>
                    <ul className="space-y-2">
                      {service.id === 'service1' && (
                        <>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Design UI/UX personalizzato e responsive</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Sviluppo front-end con tecnologie moderne</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Integrazione CMS per gestione contenuti</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Ottimizzazione SEO per visibilità sui motori di ricerca</span>
                          </li>
                        </>
                      )}
                      
                      {service.id === 'service2' && (
                        <>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Applicazioni native per iOS e Android</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Soluzioni cross-platform (React Native, Flutter)</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Integrazione con API e servizi cloud</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Pubblicazione e manutenzione sugli store</span>
                          </li>
                        </>
                      )}
                      
                      {service.id === 'service3' && (
                        <>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Piattaforme personalizzate o basate su soluzioni esistenti</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Integrazioni con sistemi di pagamento</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Gestione catalogo e inventario</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Automazioni e marketing integrato</span>
                          </li>
                        </>
                      )}
                      
                      {service.id === 'service4' && (
                        <>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Analisi delle infrastrutture esistenti</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Pianificazione strategica digitale</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Ottimizzazione dei processi IT</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Formazione e supporto tecnico</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  <Link to="/contact">
                    <Button variant="primary">
                      Richiedi Preventivo <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
                  {service.id === 'service1' && (
                    <img 
                      src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Sviluppo Web" 
                      className="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                  )}
                  {service.id === 'service2' && (
                    <img 
                      src="https://images.pexels.com/photos/207589/pexels-photo-207589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Applicazioni Mobile" 
                      className="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                  )}
                  {service.id === 'service3' && (
                    <img 
                      src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="E-commerce" 
                      className="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                  )}
                  {service.id === 'service4' && (
                    <img 
                      src="https://images.pexels.com/photos/7947961/pexels-photo-7947961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Consulenza IT" 
                      className="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Il Nostro Processo"
            subtitle="Come lavoriamo per trasformare la tua idea in realtà"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div className="h-16 w-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scoperta</h3>
              <p className="text-gray-600">Comprendiamo i tuoi obiettivi, il tuo pubblico e le tue esigenze specifiche.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div className="h-16 w-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Progettazione</h3>
              <p className="text-gray-600">Creiamo wireframe e prototipi per visualizzare l'aspetto e le funzionalità finali.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div className="h-16 w-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sviluppo</h3>
              <p className="text-gray-600">Implementiamo la soluzione con codice pulito, testato e ottimizzato per le prestazioni.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div className="h-16 w-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lancio e Supporto</h3>
              <p className="text-gray-600">Rilasciamo il progetto e forniamo assistenza continua per il suo successo a lungo termine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Domande Frequenti"
            subtitle="Risposte alle domande più comuni sui nostri servizi"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quanto tempo richiede lo sviluppo di un progetto?</h3>
              <p className="text-gray-600">
                La tempistica varia in base alla complessità e alle dimensioni del progetto. Tipicamente, un sito web può richiedere da 4 a 8 settimane, mentre un'applicazione mobile o un e-commerce complesso potrebbero richiedere 2-6 mesi. Durante la fase di scoperta, vi forniremo una stima temporale accurata basata sulle vostre esigenze specifiche.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quali tecnologie utilizzate per lo sviluppo?</h3>
              <p className="text-gray-600">
                Utilizziamo le tecnologie più moderne e adatte alle specifiche esigenze del progetto. Per il web, lavoriamo con framework come React, Vue.js, Angular, e tecnologie backend come Node.js, Python, e PHP. Per le app mobile, utilizziamo Swift, Kotlin, React Native e Flutter. La scelta dipende dalle esigenze di performance, budget e tempistiche del progetto.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Come gestite la manutenzione dopo il lancio?</h3>
              <p className="text-gray-600">
                Offriamo vari piani di manutenzione post-lancio che includono aggiornamenti di sicurezza, correzioni di bug, ottimizzazioni delle prestazioni e miglioramenti incrementali. I nostri piani sono flessibili e possono essere personalizzati in base alle vostre esigenze, garantendo che la vostra soluzione rimanga sempre aggiornata e funzionale.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quanto costa un progetto con EnderDevelopment?</h3>
              <p className="text-gray-600">
                Il costo dipende dalle specifiche del progetto, dalla complessità e dalle funzionalità richieste. Offriamo preventivi gratuiti e dettagliati dopo aver analizzato le vostre esigenze. La nostra politica è quella di essere completamente trasparenti sui costi, senza sorprese o costi nascosti durante lo sviluppo.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Posso vedere esempi di progetti simili che avete realizzato?</h3>
              <p className="text-gray-600">
                Certamente! Potete consultare il nostro portfolio per vedere esempi di progetti simili. Inoltre, durante il nostro incontro iniziale, possiamo mostrarvi case study specifici e risultati ottenuti in progetti paragonabili al vostro, per darvi un'idea concreta del nostro approccio e della qualità del nostro lavoro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto a trasformare la tua idea in realtà?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contattaci oggi stesso per una consulenza gratuita sul tuo progetto.
          </p>
          <Link to="/contact">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-white text-primary-800 hover:bg-gray-100"
            >
              Contattaci Ora <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;