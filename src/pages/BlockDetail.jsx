import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';

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
    id: 4,
    title: 'Improving Your Cricket Batting Technique',
    excerpt: 'Professional tips to enhance your cricket batting skills and score more runs consistently.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Cricket',
    author: 'Mr. Vijay Jambhale',
    date: 'March 8, 2023',
    readTime: '6 min read'
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
  },
  {
    id: 6,
    title: 'Football Training Drills for Improved Performance',
    excerpt: 'Essential drills to enhance your football skills, agility, and game-time decision making.',
    image: 'https://images.unsplash.com/photo-1605666807892-558b2752d526?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Football',
    author: 'Suresh Singh',
    date: 'February 12, 2023',
    readTime: '8 min read'
  }
  // ... add all other blogPosts similarly
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find(post => post.id === parseInt(id));

  if (!blog) {
    return (
      <div className="pt-20 text-center py-10">
        <h2 className="text-2xl font-semibold">Blog not found</h2>
        <Link to="/blog" className="text-fitness-purple underline mt-4 inline-block">Go Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <img src={blog.image} alt={blog.title} className="w-full h-72 object-cover rounded-lg mb-6" />
        <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-500">
          <span className="flex items-center"><User className="h-4 w-4 mr-1" /> {blog.author}</span>
          <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {blog.date}</span>
          <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {blog.readTime}</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{blog.excerpt}</p>
        <p className="text-base leading-relaxed text-gray-800">
          {blog.content || "Full content goes here... you can replace this with actual blog data from backend or static content."}
        </p>
        <Link to="/blog" className="mt-8 inline-block text-fitness-purple font-medium hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
