import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github as GitHub } from 'lucide-react';
import { useContent } from '../../contexts/ContentContext';
import Logo from '../ui/Logo';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import LanguageSelector from '../ui/LanguageSelector';

const Footer: React.FC = () => {
  const { content } = useContent();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-8 w-auto text-white" />
              <span className="ml-2 text-xl font-bold text-white">EnderDevelopment</span>
            </div>
            <p className="text-gray-400 mb-4">
              Trasformiamo le tue idee in soluzioni digitali all'avanguardia, con un approccio innovativo e professionale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <GitHub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">Chi Siamo</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Servizi</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Progetti</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contatti</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2">
              {content.services.items.map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`} className="text-gray-400 hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{content.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href={`tel:${content.contact.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {content.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href={`mailto:${content.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {content.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} EnderDevelopment. Tutti i diritti riservati.
          </p>
          <div className="flex items-center space-x-6">
            <ThemeSwitcher />
            <LanguageSelector />
          </div>
          <div className="flex space-x-4 text-sm text-gray-500 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Termini di Servizio</Link>
            <Link to="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;