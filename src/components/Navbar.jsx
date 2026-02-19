
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../Assets/vj-logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Ensure mobile dropdown closes when switching to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Journal' },
    { path: '/contact', label: 'Contact' },
    { path: '/franchise', label: 'Franchise' }
  ];

  const topNavLinkClass = 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]';
  const topNavActiveClass = 'text-red-300 active drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]';

  return (
    <nav className={`site-navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
      ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100'
      : 'py-5 bg-transparent'
      }`}>
      <div className="container-custom navbar-inner flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50 transform transition-all duration-300 hover:scale-105 active:scale-95">
          <img
            src={logo}
            alt="VJS Fitness Logo"
            className={`transition-all duration-500 rounded-lg ${scrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link text-sm uppercase tracking-widest font-semibold ${location.pathname === link.path
                ? (scrolled ? 'text-red-600 active' : topNavActiveClass)
                : (scrolled ? 'text-gray-800' : topNavLinkClass)
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-toggle z-50 p-2 rounded-full transition-all duration-300 ${scrolled ? 'text-gray-900 bg-gray-100' : 'text-white bg-white/20 backdrop-blur-sm'
            }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        <div id="mobile-nav-menu" className={`mobile-dropdown ${isOpen ? 'open' : ''}`}>
          <ul className="mobile-dropdown-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`mobile-dropdown-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
