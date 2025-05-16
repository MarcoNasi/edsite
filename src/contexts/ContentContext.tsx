import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent } from '../types';
import { defaultSiteContent } from '../data/siteContent';

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: Partial<SiteContent>) => void;
  isLoading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the content from your backend API
    // For now, we'll simulate a loading delay and use the default content
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Check if there's saved content in localStorage
        const savedContent = localStorage.getItem('siteContent');
        if (savedContent) {
          setContent(JSON.parse(savedContent));
        } else {
          setContent(defaultSiteContent);
        }
      } catch (error) {
        console.error('Failed to fetch content:', error);
        // Fallback to default content
        setContent(defaultSiteContent);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  const updateContent = (newContent: Partial<SiteContent>) => {
    setContent(prevContent => {
      const updatedContent = { ...prevContent, ...newContent };
      // Save to localStorage (in a real app, you would also save to your backend)
      localStorage.setItem('siteContent', JSON.stringify(updatedContent));
      return updatedContent;
    });
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, isLoading }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};