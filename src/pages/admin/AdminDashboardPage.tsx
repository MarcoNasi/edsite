import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Users, MessageSquare, Layers, Settings, Info, PenTool } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useContent } from '../../contexts/ContentContext';
import Button from '../../components/ui/Button';
import AdminHeroSection from './sections/AdminHeroSection';
import AdminServicesSection from './sections/AdminServicesSection';
import AdminProjectsSection from './sections/AdminProjectsSection';
import AdminTeamSection from './sections/AdminTeamSection';
import AdminAboutSection from './sections/AdminAboutSection';
import AdminContactSection from './sections/AdminContactSection';
import AdminTestimonialsSection from './sections/AdminTestimonialsSection';

const AdminDashboardPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const { authState, logout } = useAuth();
  const { content, updateContent } = useContent();
  const navigate = useNavigate();

  useEffect(() => {
    // If user is not authenticated, redirect to login page
    if (!authState.isAuthenticated) {
      navigate('/admin/login');
    }
    
    document.title = 'Dashboard | EnderDevelopment Admin';
  }, [authState.isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-primary-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary-800 font-bold text-lg">E</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">EnderDevelopment Admin</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Ciao, {authState.user}</span>
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/20"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <nav className="md:w-64 bg-white rounded-lg shadow-md p-4">
            <div className="space-y-1">
              <button
                onClick={() => setActiveSection('hero')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                  activeSection === 'hero'
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Home size={20} />
                <span>Hero</span>
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                  activeSection === 'about'
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Info size={20} />
                <span>Chi Siamo</span>
              </button>
              <button
                onClick={() => setActiveSection('services')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                  activeSection === 'services'
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Settings size={20} />
                <span>Servizi</span>
              </button>
              <button
                onClick={() => setActiveSection('projects')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                  activeSection === 'projects'
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Layers size={20} />
                <span>Progetti</span>
              </button>
              <button
                onClick={() => setActiveSection('team')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                  activeSection === 'team'
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Users size={20} />
                <span>Team</span>
              </button>
              <button
                onClick={() => setActiveSection('testimonials')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                  activeSection === 'testimonials'
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <MessageSquare size={20} />
                <span>Testimonianze</span>
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                  activeSection === 'contact'
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <PenTool size={20} />
                <span>Contatti</span>
              </button>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                fullWidth
                onClick={() => navigate('/')}
              >
                Visualizza Sito
              </Button>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg shadow-md p-6">
            {activeSection === 'hero' && (
              <AdminHeroSection 
                heroContent={content.hero} 
                updateContent={updateContent} 
              />
            )}
            
            {activeSection === 'about' && (
              <AdminAboutSection 
                aboutContent={content.about} 
                updateContent={updateContent} 
              />
            )}
            
            {activeSection === 'services' && (
              <AdminServicesSection 
                servicesContent={content.services} 
                updateContent={updateContent} 
              />
            )}
            
            {activeSection === 'projects' && (
              <AdminProjectsSection 
                projectsContent={content.projects} 
                updateContent={updateContent} 
              />
            )}
            
            {activeSection === 'team' && (
              <AdminTeamSection 
                teamContent={content.team} 
                updateContent={updateContent} 
              />
            )}
            
            {activeSection === 'testimonials' && (
              <AdminTestimonialsSection 
                testimonialsContent={content.testimonials} 
                updateContent={updateContent} 
              />
            )}
            
            {activeSection === 'contact' && (
              <AdminContactSection 
                contactContent={content.contact} 
                updateContent={updateContent} 
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;