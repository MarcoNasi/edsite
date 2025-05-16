import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { TeamMember } from '../../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="aspect-w-1 aspect-h-1 bg-gray-200">
        <img 
          src={member.imageUrl} 
          alt={member.name}
          className="w-full h-64 object-cover object-center"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-primary-600 font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 mb-4 line-clamp-3">{member.bio}</p>

        <div className="flex space-x-3">
          <a 
            href="#" 
            className="p-2 rounded-full text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label={`${member.name} on LinkedIn`}
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label={`${member.name} on Twitter`}
          >
            <Twitter size={18} />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label={`Email ${member.name}`}
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;