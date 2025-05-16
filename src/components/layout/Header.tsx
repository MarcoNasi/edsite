import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { NavItem } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import Logo from '../ui/Logo';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { authState } = useAuth();
  const { t } = useTranslation();

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.projects'), href: '/projects' },
    { label: t('nav.blog'), href: '/blog' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 bg-opacity-95 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <Logo className={`h-8 w-auto ${isScrolled ? 'text-primary-900 dark:text-white' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}>
              EnderDevelopment
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => `
                  px-3 py-2 text-sm lg:text-base font-medium rounded-md transition
                  ${isScrolled
                    ? isActive
                      ? 'text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900'
                      : 'text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : isActive
                      ? 'text-white bg-white bg-opacity-20'
                      : 'text-white hover:bg-white hover:bg-opacity-10'
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="https://dash.enderdevelopment.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center px-3 py-2 text-sm lg:text-base font-medium rounded-md transition
                ${isScrolled
                  ? 'text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900'
                  : 'text-white border border-white hover:bg-white hover:bg-opacity-10'
                }
              `}
            >
              {t('nav.clientArea')} <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 px-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => `
                  block px-3 py-2 rounded-md text-base font-medium transition
                  ${isActive
                    ? 'text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900'
                    : 'text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="https://dash.enderdevelopment.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900 mt-2"
            >
              {t('nav.clientArea')} <ExternalLink className="inline-block ml-1 h-4 w-4" />
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;