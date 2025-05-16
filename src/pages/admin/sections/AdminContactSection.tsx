import React, { useState } from 'react';
import { Save } from 'lucide-react';
import Button from '../../../components/ui/Button';
import { SiteContent } from '../../../types';

interface AdminContactSectionProps {
  contactContent: SiteContent['contact'];
  updateContent: (newContent: Partial<SiteContent>) => void;
}

const AdminContactSection: React.FC<AdminContactSectionProps> = ({ 
  contactContent,
  updateContent 
}) => {
  const [formData, setFormData] = useState({
    title: contactContent.title,
    subtitle: contactContent.subtitle,
    address: contactContent.address,
    email: contactContent.email,
    phone: contactContent.phone,
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
        contact: {
          ...contactContent,
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
        <h2 className="text-2xl font-bold">Sezione Contatti</h2>
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
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Indirizzo
            </label>
            <textarea
              id="address"
              name="address"
              rows={2}
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefono
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={formData.phone}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{formData.title}</h2>
          <p className="text-gray-600 mb-6">{formData.subtitle}</p>
          
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full p-2 mr-3">
                <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-medium">Indirizzo</p>
                <p className="text-gray-600">{formData.address}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full p-2 mr-3">
                <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-medium">Email</p>
                <p className="text-gray-600">{formData.email}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full p-2 mr-3">
                <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-medium">Telefono</p>
                <p className="text-gray-600">{formData.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContactSection;