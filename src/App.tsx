import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { ContentProvider } from './contexts/ContentContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const currentLang = i18n.language;
    const supportedLangs = ['en', 'it'];
    
    if (!currentLang || !supportedLangs.includes(currentLang)) {
      const targetLang = browserLang === 'it' ? 'it' : 'en';
      void i18n.changeLanguage(targetLang);
    }
  }, []);

  return (
    <AuthProvider>
      <ContentProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Routes>
              <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
              
              {/* Admin Routes */}
              <Route path="/it/admin/ender4564x/login" element={<AdminLoginPage />} />
              <Route 
                path="/it/admin/ender4564x/*" 
                element={
                  <ProtectedRoute>
                    <AdminDashboardPage />
                  </ProtectedRoute>
                } 
              />
              
              {/* Main Routes */}
              {['en', 'it'].map((lang) => (
                <Route key={lang} path={`/${lang}/*`} element={
                  <>
                    <Header />
                    <main className="flex-grow">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                } />
              ))}
              
              <Route path="*" element={<Navigate to={`/${i18n.language}`} replace />} />
            </Routes>
          </div>
        </Router>
      </ContentProvider>
    </AuthProvider>
  );
};

export default App;