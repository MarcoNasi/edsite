import React, { useState } from 'react';
import { Save, Plus, Trash, Edit, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../components/ui/Button';
import { SiteContent, TestimonialItem } from '../../../types';

interface AdminTestimonialsSectionProps {
  testimonialsContent: SiteContent['testimonials'];
  updateContent: (newContent: Partial<SiteContent>) => void;
}

const AdminTestimonialsSection: React.FC<AdminTestimonialsSectionProps> = ({ 
  testimonialsContent,
  updateContent 
}) => {
  const [headerFormData, setHeaderFormData] = useState({
    title: testimonialsContent.title,
    subtitle: testimonialsContent.subtitle,
  });
  
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(testimonialsContent.items);
  const [editingTestimonial, setEditingTestimonial] = useState<TestimonialItem | null>(null);
  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState<TestimonialItem>({
    id: '',
    quote: '',
    author: '',
    company: '',
    imageUrl: '',
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHeaderFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewTestimonialChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTestimonial((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditTestimonialChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editingTestimonial) return;
    
    const { name, value } = e.target;
    setEditingTestimonial((prev) => {
      if (!prev) return prev;
      return { ...prev, [name]: value };
    });
  };

  const addTestimonial = () => {
    const testimonialToAdd = {
      ...newTestimonial,
      id: uuidv4(),
    };
    
    setTestimonials((prev) => [...prev, testimonialToAdd]);
    setNewTestimonial({
      id: '',
      quote: '',
      author: '',
      company: '',
      imageUrl: '',
    });
    setIsAddingTestimonial(false);
  };

  const updateTestimonial = () => {
    if (!editingTestimonial) return;
    
    setTestimonials((prev) => 
      prev.map((testimonial) => 
        testimonial.id === editingTestimonial.id ? editingTestimonial : testimonial
      )
    );
    
    setEditingTestimonial(null);
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((testimonial) => testimonial.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    
    setTimeout(() => {
      updateContent({
        testimonials: {
          title: headerFormData.title,
          subtitle: headerFormData.subtitle,
          items: testimonials,
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
        <h2 className="text-2xl font-bold">Sezione Testimonianze</h2>
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
            <h3 className="text-lg font-medium text-gray-900">Testimonianze</h3>
            <Button 
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsAddingTestimonial(true)}
              disabled={isAddingTestimonial}
            >
              <Plus className="mr-2 h-4 w-4" />
              Aggiungi Testimonianza
            </Button>
          </div>
          
          {/* Add Testimonial Form */}
          {isAddingTestimonial && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Nuova Testimonianza</h4>
                <button
                  type="button"
                  onClick={() => setIsAddingTestimonial(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="newQuote" className="block text-sm font-medium text-gray-700 mb-1">
                    Testimonianza
                  </label>
                  <textarea
                    id="newQuote"
                    name="quote"
                    rows={4}
                    value={newTestimonial.quote}
                    onChange={handleNewTestimonialChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="newAuthor" className="block text-sm font-medium text-gray-700 mb-1">
                      Autore
                    </label>
                    <input
                      id="newAuthor"
                      name="author"
                      type="text"
                      value={newTestimonial.author}
                      onChange={handleNewTestimonialChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="newCompany" className="block text-sm font-medium text-gray-700 mb-1">
                      Azienda
                    </label>
                    <input
                      id="newCompany"
                      name="company"
                      type="text"
                      value={newTestimonial.company}
                      onChange={handleNewTestimonialChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="newImageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    URL Immagine (opzionale)
                  </label>
                  <input
                    id="newImageUrl"
                    name="imageUrl"
                    type="url"
                    value={newTestimonial.imageUrl}
                    onChange={handleNewTestimonialChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Inserisci l'URL di un'immagine (preferibilmente quadrata)
                  </p>
                </div>
                
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={addTestimonial}
                    disabled={!newTestimonial.quote || !newTestimonial.author || !newTestimonial.company}
                  >
                    Aggiungi
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Edit Testimonial Form */}
          {editingTestimonial && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Modifica Testimonianza</h4>
                <button
                  type="button"
                  onClick={() => setEditingTestimonial(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="editQuote" className="block text-sm font-medium text-gray-700 mb-1">
                    Testimonianza
                  </label>
                  <textarea
                    id="editQuote"
                    name="quote"
                    rows={4}
                    value={editingTestimonial.quote}
                    onChange={handleEditTestimonialChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="editAuthor" className="block text-sm font-medium text-gray-700 mb-1">
                      Autore
                    </label>
                    <input
                      id="editAuthor"
                      name="author"
                      type="text"
                      value={editingTestimonial.author}
                      onChange={handleEditTestimonialChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="editCompany" className="block text-sm font-medium text-gray-700 mb-1">
                      Azienda
                    </label>
                    <input
                      id="editCompany"
                      name="company"
                      type="text"
                      value={editingTestimonial.company}
                      onChange={handleEditTestimonialChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="editImageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    URL Immagine (opzionale)
                  </label>
                  <input
                    id="editImageUrl"
                    name="imageUrl"
                    type="url"
                    value={editingTestimonial.imageUrl || ''}
                    onChange={handleEditTestimonialChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={updateTestimonial}
                    disabled={!editingTestimonial.quote || !editingTestimonial.author || !editingTestimonial.company}
                  >
                    Aggiorna
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Testimonials List */}
          <div className="space-y-4">
            {testimonials.length === 0 ? (
              <div className="text-center py-4 bg-gray-50 rounded-lg">
                <p className="text-gray-500">
                  Non ci sono testimonianze. Aggiungi la prima testimonianza!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="bg-white rounded-lg shadow-md p-4 border border-gray-200 relative"
                  >
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <button
                        type="button"
                        onClick={() => setEditingTestimonial(testimonial)}
                        className="text-primary-600 hover:text-primary-800 p-1"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteTestimonial(testimonial.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                    
                    <div className="mt-2">
                      <p className="text-gray-600 italic text-sm line-clamp-4">{testimonial.quote}</p>
                      <div className="mt-4 flex items-center">
                        {testimonial.imageUrl ? (
                          <img 
                            src={testimonial.imageUrl} 
                            alt={testimonial.author}
                            className="h-10 w-10 rounded-full mr-3 object-cover"
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3">
                            <span className="text-lg font-bold">{testimonial.author.charAt(0)}</span>
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{testimonial.author}</p>
                          <p className="text-xs text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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

export default AdminTestimonialsSection;