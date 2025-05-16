import React, { useState } from 'react';
import { Save } from 'lucide-react';
import Button from '../../../components/ui/Button';
import { SiteContent } from '../../../types';

interface AdminHeroSectionProps {
  heroContent: SiteContent['hero'];
  updateContent: (newContent: Partial<SiteContent>) => void;
}

const AdminHeroSection: React.FC<AdminHeroSectionProps> = ({ 
  heroContent,
  updateContent 
}) => {
  const [formData, setFormData] = useState({
    title: heroContent.title,
    subtitle: heroContent.subtitle,
    ctaText: heroContent.ctaText,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    
    setTimeout(() => {
      updateContent({
        hero: {
          ...heroContent,
          ...formData
        }
      });
      setIsSaving(false);
      setSaveSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 800);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Sezione Hero</h2>
        {saveSuccess && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md">
            Modifiche salvate con successo!
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Titolo
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-1">
              Sottotitolo
            </label>
            <textarea
              id="subtitle"
              name="subtitle"
              rows={3}
              value={formData.subtitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="ctaText" className="block text-sm font-medium text-gray-700 mb-1">
              Testo Pulsante CTA
            </label>
            <input
              id="ctaText"
              name="ctaText"
              type="text"
              value={formData.ctaText}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
        </div>
        
        <div className="mt-6">
          <Button
            type="submit"
            variant="primary"
            isLoading={isSaving}
          >
            <Save className="mr-2 h-4 w-4" />
            Salva Modifiche
          </Button>
        </div>
      </form>
      
      <div className="mt-8 border-t border-gray-200 pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Anteprima</h3>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{formData.title}</h1>
          <p className="text-lg text-gray-700 mb-4">{formData.subtitle}</p>
          <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md">
            {formData.ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeroSection;