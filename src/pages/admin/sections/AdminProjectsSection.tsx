import React, { useState } from 'react';
import { Save, Plus, Trash, Edit, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../components/ui/Button';
import { SiteContent, ProjectItem } from '../../../types';

interface AdminProjectsSectionProps {
  projectsContent: SiteContent['projects'];
  updateContent: (newContent: Partial<SiteContent>) => void;
}

const categoryOptions = [
  'Web Design',
  'Mobile App',
  'Web Application',
  'Software',
  'E-commerce',
  'UI/UX Design',
];

const AdminProjectsSection: React.FC<AdminProjectsSectionProps> = ({ 
  projectsContent,
  updateContent 
}) => {
  const [headerFormData, setHeaderFormData] = useState({
    title: projectsContent.title,
    subtitle: projectsContent.subtitle,
  });
  
  const [projects, setProjects] = useState<ProjectItem[]>(projectsContent.items);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProject, setNewProject] = useState<ProjectItem>({
    id: '',
    title: '',
    description: '',
    category: categoryOptions[0],
    imageUrl: '',
    client: '',
    year: new Date().getFullYear(),
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHeaderFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ 
      ...prev, 
      [name]: name === 'year' ? (value ? parseInt(value) : '') : value 
    }));
  };

  const handleEditProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!editingProject) return;
    
    const { name, value } = e.target;
    setEditingProject((prev) => {
      if (!prev) return prev;
      return { 
        ...prev, 
        [name]: name === 'year' ? (value ? parseInt(value) : '') : value 
      };
    });
  };

  const addProject = () => {
    const projectToAdd = {
      ...newProject,
      id: uuidv4(),
    };
    
    setProjects((prev) => [...prev, projectToAdd]);
    setNewProject({
      id: '',
      title: '',
      description: '',
      category: categoryOptions[0],
      imageUrl: '',
      client: '',
      year: new Date().getFullYear(),
    });
    setIsAddingProject(false);
  };

  const updateProject = () => {
    if (!editingProject) return;
    
    setProjects((prev) => 
      prev.map((project) => 
        project.id === editingProject.id ? editingProject : project
      )
    );
    
    setEditingProject(null);
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    
    setTimeout(() => {
      updateContent({
        projects: {
          title: headerFormData.title,
          subtitle: headerFormData.subtitle,
          items: projects,
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
        <h2 className="text-2xl font-bold">Sezione Progetti</h2>
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
            <h3 className="text-lg font-medium text-gray-900">Progetti</h3>
            <Button 
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsAddingProject(true)}
              disabled={isAddingProject}
            >
              <Plus className="mr-2 h-4 w-4" />
              Aggiungi Progetto
            </Button>
          </div>
          
          {/* Add Project Form */}
          {isAddingProject && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Nuovo Progetto</h4>
                <button
                  type="button"
                  onClick={() => setIsAddingProject(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="newTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Titolo
                  </label>
                  <input
                    id="newTitle"
                    name="title"
                    type="text"
                    value={newProject.title}
                    onChange={handleNewProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="newCategory" className="block text-sm font-medium text-gray-700 mb-1">
                    Categoria
                  </label>
                  <select
                    id="newCategory"
                    name="category"
                    value={newProject.category}
                    onChange={handleNewProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    {categoryOptions.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="newDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Descrizione
                  </label>
                  <textarea
                    id="newDescription"
                    name="description"
                    rows={3}
                    value={newProject.description}
                    onChange={handleNewProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="newImageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    URL Immagine
                  </label>
                  <input
                    id="newImageUrl"
                    name="imageUrl"
                    type="url"
                    value={newProject.imageUrl}
                    onChange={handleNewProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="newClient" className="block text-sm font-medium text-gray-700 mb-1">
                    Cliente
                  </label>
                  <input
                    id="newClient"
                    name="client"
                    type="text"
                    value={newProject.client}
                    onChange={handleNewProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="newYear" className="block text-sm font-medium text-gray-700 mb-1">
                    Anno
                  </label>
                  <input
                    id="newYear"
                    name="year"
                    type="number"
                    min="2000"
                    max="2050"
                    value={newProject.year || ''}
                    onChange={handleNewProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="md:col-span-2 flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={addProject}
                    disabled={!newProject.title || !newProject.description || !newProject.imageUrl}
                  >
                    Aggiungi
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Edit Project Form */}
          {editingProject && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Modifica Progetto</h4>
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="editTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Titolo
                  </label>
                  <input
                    id="editTitle"
                    name="title"
                    type="text"
                    value={editingProject.title}
                    onChange={handleEditProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="editCategory" className="block text-sm font-medium text-gray-700 mb-1">
                    Categoria
                  </label>
                  <select
                    id="editCategory"
                    name="category"
                    value={editingProject.category}
                    onChange={handleEditProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    {categoryOptions.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="editDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Descrizione
                  </label>
                  <textarea
                    id="editDescription"
                    name="description"
                    rows={3}
                    value={editingProject.description}
                    onChange={handleEditProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="editImageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    URL Immagine
                  </label>
                  <input
                    id="editImageUrl"
                    name="imageUrl"
                    type="url"
                    value={editingProject.imageUrl}
                    onChange={handleEditProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="editClient" className="block text-sm font-medium text-gray-700 mb-1">
                    Cliente
                  </label>
                  <input
                    id="editClient"
                    name="client"
                    type="text"
                    value={editingProject.client || ''}
                    onChange={handleEditProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="editYear" className="block text-sm font-medium text-gray-700 mb-1">
                    Anno
                  </label>
                  <input
                    id="editYear"
                    name="year"
                    type="number"
                    min="2000"
                    max="2050"
                    value={editingProject.year || ''}
                    onChange={handleEditProjectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="md:col-span-2 flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={updateProject}
                    disabled={!editingProject.title || !editingProject.description || !editingProject.imageUrl}
                  >
                    Aggiorna
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Projects List */}
          <div className="space-y-4">
            {projects.length === 0 ? (
              <div className="text-center py-4 bg-gray-50 rounded-lg">
                <p className="text-gray-500">
                  Non ci sono progetti. Aggiungi il tuo primo progetto!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="object-cover w-full h-32"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">{project.title}</h4>
                          <span className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-800">
                            {project.category}
                          </span>
                        </div>
                        <div className="flex space-x-1">
                          <button
                            type="button"
                            onClick={() => setEditingProject(project)}
                            className="text-primary-600 hover:text-primary-800 p-1"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteProject(project.id)}
                            className="text-red-600 hover:text-red-800 p-1"
                          >
                            <Trash size={16} />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                      {(project.client || project.year) && (
                        <p className="text-xs text-gray-500 mt-2">
                          {project.client && project.client}{project.client && project.year && ' | '}{project.year && project.year}
                        </p>
                      )}
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

export default AdminProjectsSection;