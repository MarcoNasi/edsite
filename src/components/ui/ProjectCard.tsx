import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div 
          className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-6 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-center mb-4">{project.description}</p>
          <Link 
            to={`/projects/${project.id}`}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Dettagli Progetto <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl text-gray-900">{project.title}</h3>
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-800">
            {project.category}
          </span>
        </div>
        {project.client && project.year && (
          <p className="text-gray-600 mt-2">
            {project.client} | {project.year}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;