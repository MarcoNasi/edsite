import React from 'react';
import { 
  Code, 
  Smartphone, 
  ShoppingCart, 
  BarChart, 
  Database, 
  Shield, 
  Cloud, 
  Globe 
} from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap = {
  'code': Code,
  'smartphone': Smartphone,
  'shopping-cart': ShoppingCart,
  'bar-chart': BarChart,
  'database': Database,
  'shield': Shield,
  'cloud': Cloud,
  'globe': Globe,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;

  return (
    <div 
      id={service.id}
      className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-primary-100 text-primary-600 mb-6">
        <IconComponent size={32} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;