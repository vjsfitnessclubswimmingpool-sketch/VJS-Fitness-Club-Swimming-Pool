
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import logo from '../Assets/vj-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div className="animate-fade-in animation-delay-100">
            <img
              src={logo}
              alt="Fitness Club Logo"
              className="h-12 md:h-14"
            />

            <p className="text-gray-300 mb-4">
              Your premier fitness destination offering world-class facilities for gym, swimming, and professional swimming pool construction & management.
            </p>
            <div className="flex space-x-4">
              <a href="https://m.facebook.com/100075855232093/" target="_blank" rel="noopener noreferrer" className="social-icon bg-gray-800 border border-gray-700 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/vjsfitnessclub?utm_source=qr&igsh=YzU1NGVlODEzOA%3D%3D" target="_blank" rel="noopener noreferrer" className="social-icon bg-gray-800 border border-gray-700 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600">
                <Instagram size={20} />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon bg-gray-800 border border-gray-700 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600">
                <Twitter size={20} />
              </a> */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon bg-gray-800 border border-gray-700 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600">
                <Youtube size={20} />
              </a>
              <a href="https://wa.me/8421517771" target="_blank" rel="noopener noreferrer" className="social-icon bg-gray-800 border border-gray-700 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="animate-fade-in animation-delay-200">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Services', 'Blog', 'Contact Us', 'Franchise'].map((item) => (
                <li key={item} className="transform transition-all duration-300 hover:translate-x-2">
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-red-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Gym Location */}
          <div className="animate-fade-in animation-delay-300">
            <h3 className="text-xl font-bold mb-6">Gym Location</h3>
            <div className="flex items-start space-x-3 mb-4 group">
              <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0 group-hover:animate-bounce-subtle" />
              <a href="https://g.co/kgs/ny9cWVK" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                VJ's fitness, 6th floor, Balewadi High st, Pune, 411045
              </a>
            </div>
            <div className="flex items-start space-x-3 mb-4 group">
              <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0 group-hover:animate-bounce-subtle" />
              <a href="tel:+918421517771" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                +91 8421517771
              </a>, <a href="tel:+918275929556" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                +91 8275929556
              </a>
            </div>
            <div className="flex items-start space-x-3 mb-4 group">
              <MessageCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0 group-hover:animate-bounce-subtle" />
              <a href="https://wa.me/8421517771" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                WhatsApp: +91 8421517771
              </a>
            </div>
            <div className="flex items-start space-x-3 group">
              <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0 group-hover:animate-bounce-subtle" />
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Mon-Sat: 6:00 AM - 10:00 PM<br />Sunday: 7:00 AM - 1:00 PM</p>
            </div>
          </div>

          {/* Column 4 - Swimming Pool Location */}
          <div className="animate-fade-in animation-delay-400">
            <h3 className="text-xl font-bold mb-6">Swimming Pool Location</h3>
            <div className="flex items-start space-x-3 mb-4 group">
              <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0 group-hover:animate-bounce-subtle" />
              <a href="https://g.co/kgs/1BPzfFd" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Near by Rohan Ekam, F Residences road, Balewadi, 411045
              </a>
            </div>
            <div className="flex items-start space-x-3 mb-4 group">
              <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0 group-hover:animate-bounce-subtle" />
              <a href="tel:+918421517771" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                +91 8421517771
              </a>, <a href="tel:+918275929556" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                +91 8275929556
              </a>
            </div>
            <div className="flex items-start space-x-3 mb-4 group">
              <MessageCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0 group-hover:animate-bounce-subtle" />
              <a href="https://wa.me/919876543211" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                WhatsApp: +91 8421517771
              </a>
            </div>
            <div className="flex items-start space-x-3 group">
              <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0 group-hover:animate-bounce-subtle" />
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Mon-Sat: 6:00 AM - 8:00 PM<br />Sunday: 7:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-gray-800 pt-8 mb-8 animate-fade-in">
          <h3 className="text-xl font-bold mb-6 text-center">Our Business Partners</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center transform transition-all duration-300 hover:scale-110 hover:text-red-500">
              <p className="font-medium text-lg">Mr. Vijay Jambhale</p>
              {/* <p className="text-gray-400">Managing Director</p> */}
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-110 hover:text-red-500">
              <p className="font-medium text-lg">Dr. Preeti Dhumale</p>
              {/* <p className="text-gray-400">Operations Director</p> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} VJ's Fitness Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
