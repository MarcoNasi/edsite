import React, { useState } from 'react';
import { Save } from 'lucide-react';
import Button from '../../../components/ui/Button';
import { SiteContent } from '../../../types';

interface AdminAboutSectionProps {
  aboutContent: SiteContent['about'];
  updateContent: (newContent: Partial<SiteContent>) => void;
}

const AdminAboutSection: React.FC<AdminAboutSectionProps> = ({ 
  aboutContent,
  updateContent 
}) => {
  const [formData, setFormData] = useState({
    title: aboutContent.title,
    subtitle: aboutContent.subtitle,
    description: aboutContent.description,
    missionTitle: aboutContent.missionTitle,
    missionDescription: aboutContent.missionDescription,
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
        about: {
          ...aboutContent,
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
        <h2 className="text-2xl font-bold">Sezione Chi Siamo</h2>
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
            <input
              id="subtitle"
              name="subtitle"
              type="text"
              value={formData.subtitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Descrizione
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="missionTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Titolo Missione
            </label>
            <input
              id="missionTitle"
              name="missionTitle"
              type="text"
              value={formData.missionTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="missionDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Descrizione Missione
            </label>
            <textarea
              id="missionDescription"
              name="missionDescription"
              rows={5}
              value={formData.missionDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            ></textarea>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{formData.title}</h2>
          <h3 className="text-lg text-gray-700 mb-4">{formData.subtitle}</h3>
          <p className="text-gray-600 mb-6">{formData.description}</p>
          <h4 className="text-xl font-bold text-gray-900 mb-2">{formData.missionTitle}</h4>
          <p className="text-gray-600">{formData.missionDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminAboutSection;