import React, { useState } from 'react';
import { Save, Plus, Trash, Edit, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../components/ui/Button';
import { SiteContent, TeamMember } from '../../../types';

interface AdminTeamSectionProps {
  teamContent: SiteContent['team'];
  updateContent: (newContent: Partial<SiteContent>) => void;
}

const AdminTeamSection: React.FC<AdminTeamSectionProps> = ({ 
  teamContent,
  updateContent 
}) => {
  const [headerFormData, setHeaderFormData] = useState({
    title: teamContent.title,
    subtitle: teamContent.subtitle,
  });
  
  const [members, setMembers] = useState<TeamMember[]>(teamContent.members);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMember, setNewMember] = useState<TeamMember>({
    id: '',
    name: '',
    role: '',
    bio: '',
    imageUrl: '',
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHeaderFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewMemberChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditMemberChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editingMember) return;
    
    const { name, value } = e.target;
    setEditingMember((prev) => {
      if (!prev) return prev;
      return { ...prev, [name]: value };
    });
  };

  const addMember = () => {
    const memberToAdd = {
      ...newMember,
      id: uuidv4(),
    };
    
    setMembers((prev) => [...prev, memberToAdd]);
    setNewMember({
      id: '',
      name: '',
      role: '',
      bio: '',
      imageUrl: '',
    });
    setIsAddingMember(false);
  };

  const updateMember = () => {
    if (!editingMember) return;
    
    setMembers((prev) => 
      prev.map((member) => 
        member.id === editingMember.id ? editingMember : member
      )
    );
    
    setEditingMember(null);
  };

  const deleteMember = (id: string) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    
    setTimeout(() => {
      updateContent({
        team: {
          title: headerFormData.title,
          subtitle: headerFormData.subtitle,
          members: members,
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
        <h2 className="text-2xl font-bold">Sezione Team</h2>
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
            <h3 className="text-lg font-medium text-gray-900">Membri del Team</h3>
            <Button 
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsAddingMember(true)}
              disabled={isAddingMember}
            >
              <Plus className="mr-2 h-4 w-4" />
              Aggiungi Membro
            </Button>
          </div>
          
          {/* Add Member Form */}
          {isAddingMember && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Nuovo Membro</h4>
                <button
                  type="button"
                  onClick={() => setIsAddingMember(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="newName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    id="newName"
                    name="name"
                    type="text"
                    value={newMember.name}
                    onChange={handleNewMemberChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="newRole" className="block text-sm font-medium text-gray-700 mb-1">
                    Ruolo
                  </label>
                  <input
                    id="newRole"
                    name="role"
                    type="text"
                    value={newMember.role}
                    onChange={handleNewMemberChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="newBio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    id="newBio"
                    name="bio"
                    rows={3}
                    value={newMember.bio}
                    onChange={handleNewMemberChange}
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
                    value={newMember.imageUrl}
                    onChange={handleNewMemberChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Inserisci l'URL di un'immagine quadrata (possibilmente 400x400px)
                  </p>
                </div>
                
                <div className="md:col-span-2 flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={addMember}
                    disabled={!newMember.name || !newMember.role || !newMember.bio || !newMember.imageUrl}
                  >
                    Aggiungi
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Edit Member Form */}
          {editingMember && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Modifica Membro</h4>
                <button
                  type="button"
                  onClick={() => setEditingMember(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="editName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    id="editName"
                    name="name"
                    type="text"
                    value={editingMember.name}
                    onChange={handleEditMemberChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="editRole" className="block text-sm font-medium text-gray-700 mb-1">
                    Ruolo
                  </label>
                  <input
                    id="editRole"
                    name="role"
                    type="text"
                    value={editingMember.role}
                    onChange={handleEditMemberChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="editBio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    id="editBio"
                    name="bio"
                    rows={3}
                    value={editingMember.bio}
                    onChange={handleEditMemberChange}
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
                    value={editingMember.imageUrl}
                    onChange={handleEditMemberChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div className="md:col-span-2 flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={updateMember}
                    disabled={!editingMember.name || !editingMember.role || !editingMember.bio || !editingMember.imageUrl}
                  >
                    Aggiorna
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Team Members List */}
          <div className="space-y-4">
            {members.length === 0 ? (
              <div className="text-center py-4 bg-gray-50 rounded-lg">
                <p className="text-gray-500">
                  Non ci sono membri del team. Aggiungi il primo membro!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {members.map((member) => (
                  <div 
                    key={member.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                  >
                    <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                      <img 
                        src={member.imageUrl} 
                        alt={member.name}
                        className="object-cover w-full h-48"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-gray-900">{member.name}</h4>
                          <p className="text-primary-600 text-sm">{member.role}</p>
                        </div>
                        <div className="flex space-x-1">
                          <button
                            type="button"
                            onClick={() => setEditingMember(member)}
                            className="text-primary-600 hover:text-primary-800 p-1"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteMember(member.id)}
                            className="text-red-600 hover:text-red-800 p-1"
                          >
                            <Trash size={16} />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{member.bio}</p>
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

export default AdminTeamSection;