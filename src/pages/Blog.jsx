import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Blog = () => {
  console.log('Blog rendered');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample blog posts with image URLs
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for Effective Weight Training',
      excerpt: 'Maximize your gym sessions with these proven weight training techniques that deliver results.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Fitness',
      author: 'Rahul Sharma',
      date: 'April 5, 2023',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Benefits of Swimming for All Age Groups',
      excerpt: 'Discover why swimming is one of the best full-body workouts with benefits for people of all ages.',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Swimming',
      author: 'Priya Patel',
      date: 'March 22, 2023',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Nutrition Guide for Active Athletes',
      excerpt: 'Learn about the optimal nutrition strategies to fuel your athletic performance and recovery.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Nutrition',
      author: 'Dr. Amit Kumar',
      date: 'March 15, 2023',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'The Mental Benefits of Regular Exercise',
      excerpt: 'How regular physical activity can boost your mental health, reduce stress, and improve cognitive function.',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Wellness',
      author: 'Dr. Preeti Dhumale',
      date: 'February 25, 2023',
      readTime: '5 min read'
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-with-logo">
      {/* Hero Section */}
      <section className="hero-banner blog-hero-banner">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1600&q=75&fm=webp"
          alt="Fitness Journal Hero"
          className="hero-bg-image"
          fetchPriority="high"
        />
        <div className="hero-content">
          <h1 className="hero-title font-poppins">
            Fitness <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">Journal</span>
          </h1>
          <p className="hero-description">
            Insights, tips, and practical guidance to support your fitness journey.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Category Tabs (Mobile) */}
              <div className="mb-8 lg:hidden">
                <select
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fitness-purple focus:border-transparent"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Blog Posts */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                      <Link to="/blog" className="block">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-xs font-medium py-1 px-2 rounded-full bg-fitness-purple/10 text-fitness-purple">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-fitness-purple transition-all duration-300">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex items-center text-sm text-gray-500">
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No articles found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-100">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => setActiveCategory(category)}
                        className={`w-full text-left px-2 py-1.5 rounded-md transition-all duration-300 flex items-center ${activeCategory === category
                          ? 'bg-fitness-purple/10 text-fitness-purple font-medium'
                          : 'hover:bg-gray-100'
                          }`}
                      >
                        <Zap className="h-4 w-4 mr-2" />
                        {category}
                        <span className="ml-auto text-sm text-gray-500">
                          {category === 'All'
                            ? blogPosts.length
                            : blogPosts.filter(post => post.category === category).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-100">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <li key={post.id} className="flex items-start">
                      <div className="h-14 w-14 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <Link to="/blog" className="font-medium text-sm hover:text-fitness-purple transition-colors">
                          {post.title}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
