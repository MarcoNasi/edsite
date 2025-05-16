import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/ui/ContactForm';

const ContactPage: React.FC = () => {
  const { content } = useContent();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contatti | EnderDevelopment';
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{content.contact.title}</h1>
          <p className="text-xl text-primary-100 max-w-3xl">{content.contact.subtitle}</p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informazioni di Contatto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Indirizzo</h3>
                    <address className="not-italic text-gray-600">{content.contact.address}</address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${content.contact.email}`} className="text-gray-600 hover:text-primary-600 transition-colors">
                      {content.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Telefono</h3>
                    <a href={`tel:${content.contact.phone}`} className="text-gray-600 hover:text-primary-600 transition-colors">
                      {content.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Orari di Lavoro</h3>
                    <p className="text-gray-600">Lun - Ven: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sab - Dom: Chiuso</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Seguici sui Social</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-primary-100 p-3 rounded-full text-primary-600 hover:bg-primary-200 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-primary-100 p-3 rounded-full text-primary-600 hover:bg-primary-200 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-primary-100 p-3 rounded-full text-primary-600 hover:bg-primary-200 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-primary-100 p-3 rounded-full text-primary-600 hover:bg-primary-200 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Inviaci un Messaggio</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Dove Siamo"
            subtitle="Vieni a trovarci nella nostra sede di Milano"
            centered
          />
          
          <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Replace with actual Google Maps embed in production */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.101131700743!2d9.1818845!3d45.4642035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7f4e27101a2e08!2sMilano%20MI!5e0!3m2!1sit!2sit!4v1627920426568!5m2!1sit!2sit" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Mappa della sede di EnderDevelopment"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Domande Frequenti"
            subtitle="Risposte alle domande più comuni"
            centered
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quanto tempo ci vuole per rispondere alle richieste?</h3>
                <p className="text-gray-600">
                  Rispondiamo a tutte le richieste entro 24 ore lavorative. Per questioni urgenti, vi consigliamo di contattarci telefonicamente.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Offrite consulenze gratuite?</h3>
                <p className="text-gray-600">
                  Sì, offriamo una consulenza iniziale gratuita per comprendere le vostre esigenze e presentarvi le possibili soluzioni. Contattaci per fissare un appuntamento.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lavorate con clienti internazionali?</h3>
                <p className="text-gray-600">
                  Assolutamente sì. Abbiamo clienti in tutta Europa e gestiamo progetti a distanza con strumenti di collaborazione avanzati. Comunichiamo fluentemente in italiano, inglese e spagnolo.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Come si svolge il primo incontro?</h3>
                <p className="text-gray-600">
                  Il primo incontro può svolgersi presso la nostra sede, online tramite videoconferenza o, se preferite, possiamo venire noi da voi. Durante questo incontro, ascolteremo le vostre esigenze e vi forniremo un'idea generale delle soluzioni possibili.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;