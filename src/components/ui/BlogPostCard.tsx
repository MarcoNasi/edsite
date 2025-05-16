import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Link to={`/blog/${post.id}`}>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-48 object-cover object-center"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <div className="flex items-center mr-4">
            <Clock size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Leggi di più
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;