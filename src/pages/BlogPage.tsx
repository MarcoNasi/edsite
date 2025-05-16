import React, { useEffect, useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import SectionHeading from '../components/ui/SectionHeading';
import BlogPostCard from '../components/ui/BlogPostCard';
import Button from '../components/ui/Button';

const BlogPage: React.FC = () => {
  const { content } = useContent();
  const [displayedPosts, setDisplayedPosts] = useState(content.blog.posts.slice(0, 6));
  const [searchTerm, setSearchTerm] = useState('');
  const [hasMore, setHasMore] = useState(content.blog.posts.length > 6);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Blog | EnderDevelopment';
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = content.blog.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedPosts(filtered.slice(0, 6));
      setHasMore(filtered.length > 6);
    } else {
      setDisplayedPosts(content.blog.posts.slice(0, displayedPosts.length));
      setHasMore(content.blog.posts.length > displayedPosts.length);
    }
  }, [searchTerm, content.blog.posts]);

  const handleLoadMore = () => {
    const nextPosts = content.blog.posts.slice(
      0,
      displayedPosts.length + 3
    );
    setDisplayedPosts(nextPosts);
    setHasMore(content.blog.posts.length > nextPosts.length);
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{content.blog.title}</h1>
          <p className="text-xl text-primary-100 max-w-3xl">{content.blog.subtitle}</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Cerca articoli..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-10 rounded-full border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Empty State */}
          {displayedPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nessun articolo trovato</h3>
              <p className="text-gray-600 mb-6">
                Non ci sono articoli che corrispondono alla tua ricerca.
              </p>
              <Button 
                onClick={() => setSearchTerm('')}
                variant="outline"
              >
                Mostra tutti gli articoli
              </Button>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button 
                onClick={handleLoadMore}
                variant="outline"
              >
                Carica altri articoli
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Iscriviti alla nostra newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ricevi gli ultimi aggiornamenti, articoli e risorse direttamente nella tua casella di posta.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="px-4 py-3 rounded-md border-gray-300 flex-1 focus:border-primary-500 focus:ring-primary-500"
                required
              />
              <Button type="submit" variant="primary">
                Iscriviti
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Non condivideremo mai il tuo indirizzo email. Puoi annullare l'iscrizione in qualsiasi momento.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;