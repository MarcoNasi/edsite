import React, { useState } from 'react';
import { Save, Plus, Trash, Edit, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../components/ui/Button';
import { SiteContent, ServiceItem } from '../../../types';

interface AdminServicesSectionProps {
  servicesContent: SiteContent['services'];
  updateContent: (newContent: Partial<SiteContent>) => void;
}

const iconOptions = [
  'code',
  'smartphone',
  'shopping-cart',
  'bar-chart',
  'database',
  'shield',
  'cloud',
  'globe',
];

const AdminServicesSection: React.FC<AdminServicesSectionProps> = ({ 
  servicesContent,
  updateContent 
}) => {
  const [headerFormData, setHeaderFormData] = useState({
    title: servicesContent.title,
    subtitle: servicesContent.subtitle,
  });
  
  const [services, setServices] = useState<ServiceItem[]>(servicesContent.items);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isAddingService, setIsAddingService] = useState(false);
  const [newService, setNewService] = useState<ServiceItem>({
    id: '',
    title: '',
    description: '',
    icon: 'code',
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHeaderFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewServiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditServiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!editingService) return;
    
    const { name, value } = e.target;
    setEditingService((prev) => {
      if (!prev) return prev;
      return { ...prev, [name]: value };
    });
  };

  const addService = () => {
    const serviceToAdd = {
      ...newService,
      id: uuidv4(),
    };
    
    setServices((prev) => [...prev, serviceToAdd]);
    setNewService({
      id: '',
      title: '',
      description: '',
      icon: 'code',
    });
    setIsAddingService(false);
  };

  const updateService = () => {
    if (!editingService) return;
    
    setServices((prev) => 
      prev.map((service) => 
        service.id === editingService.id ? editingService : service
      )
    );
    
    setEditingService(null);
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    
    setTimeout(() => {
      updateContent({
        services: {
          title: headerFormData.title,
          subtitle: headerFormData.subtitle,
          items: services,
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
        <h2 className="text-2xl font-bold">Sezione Servizi</h2>
        {saveSuccess && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md">
            Modifiche salvate con successo!
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mb-8">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Titolo
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={headerFormData.title}
              onChange={handleHeaderChange}
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
              value={headerFormData.subtitle}
              onChange={handleHeaderChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Servizi</h3>
            <Button 
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsAddingService(true)}
              disabled={isAddingService}
            >
              <Plus className="mr-2 h-4 w-4" />
              Aggiungi Servizio
            </Button>
          </div>
          
          {/* Add Service Form */}
          {isAddingService && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Nuovo Servizio</h4>
                <button
                  type="button"
                  onClick={() => setIsAddingService(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="newTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Titolo
                  </label>
                  <input
                    id="newTitle"
                    name="title"
                    type="text"
                    value={newService.title}
                    onChange={handleNewServiceChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="newDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Descrizione
                  </label>
                  <textarea
                    id="newDescription"
                    name="description"
                    rows={3}
                    value={newService.description}
                    onChange={handleNewServiceChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="newIcon" className="block text-sm font-medium text-gray-700 mb-1">
                    Icona
                  </label>
                  <select
                    id="newIcon"
                    name="icon"
                    value={newService.icon}
                    onChange={handleNewServiceChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    {iconOptions.map((icon) => (
                      <option key={icon} value={icon}>
                        {icon}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={addService}
                    disabled={!newService.title || !newService.description}
                  >
                    Aggiungi
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Edit Service Form */}
          {editingService && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Modifica Servizio</h4>
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="editTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Titolo
                  </label>
                  <input
                    id="editTitle"
                    name="title"
                    type="text"
                    value={editingService.title}
                    onChange={handleEditServiceChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="editDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Descrizione
                  </label>
                  <textarea
                    id="editDescription"
                    name="description"
                    rows={3}
                    value={editingService.description}
                    onChange={handleEditServiceChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="editIcon" className="block text-sm font-medium text-gray-700 mb-1">
                    Icona
                  </label>
                  <select
                    id="editIcon"
                    name="icon"
                    value={editingService.icon}
                    onChange={handleEditServiceChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    {iconOptions.map((icon) => (
                      <option key={icon} value={icon}>
                        {icon}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={updateService}
                    disabled={!editingService.title || !editingService.description}
                  >
                    Aggiorna
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Services List */}
          <div className="space-y-4">
            {services.length === 0 ? (
              <div className="text-center py-4 bg-gray-50 rounded-lg">
                <p className="text-gray-500">
                  Non ci sono servizi. Aggiungi il tuo primo servizio!
                </p>
              </div>
            ) : (
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Titolo
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Descrizione
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Icona
                      </th>
                      <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                        Azioni
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {services.map((service) => (
                      <tr key={service.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {service.title}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 max-w-xs truncate">
                          {service.description}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {service.icon}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-right">
                          <div className="flex justify-end space-x-2">
                            <button
                              type="button"
                              onClick={() => setEditingService(service)}
                              className="text-primary-600 hover:text-primary-800"
                            >
                              <Edit size={18} />
                            </button>
                            <button
                              type="button"
                              onClick={() => deleteService(service.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <Button
            type="submit"
            variant="primary"
            isLoading={isSaving}
          >
            <Save className="mr-2 h-4 w-4" />
            Salva Tutte le Modifiche
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminServicesSection;