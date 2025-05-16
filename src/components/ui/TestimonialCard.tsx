import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col relative">
      <Quote className="absolute text-primary-100 h-24 w-24 -top-3 -left-3" />
      <div className="relative z-10">
        <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
        <div className="flex items-center mt-auto">
          {testimonial.imageUrl ? (
            <img
              src={testimonial.imageUrl}
              alt={testimonial.author}
              className="h-12 w-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
              <span className="text-lg font-bold">
                {testimonial.author.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="font-bold text-gray-900">{testimonial.author}</p>
            <p className="text-gray-600 text-sm">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;