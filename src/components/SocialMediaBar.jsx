
import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Linkedin, MessageSquare } from 'lucide-react';

const SocialMediaBar = () => {
  const socialLinks = [
    { 
      icon: <Facebook size={20} />, 
      url: 'https://m.facebook.com/100075855232093/', 
      color: 'bg-blue-600 hover:bg-blue-700',
      label: 'Facebook'
    },
    { 
      icon: <Instagram size={20} />, 
      url: 'https://www.instagram.com/vjsfitnessclub?utm_source=qr&igsh=YzU1NGVlODEzOA%3D%3D', 
      color: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600',
      label: 'Instagram'
    },
    // { 
    //   icon: <Twitter size={20} />, 
    //   url: 'https://twitter.com', 
    //   color: 'bg-blue-400 hover:bg-blue-500',
    //   label: 'Twitter'
    // },
    { 
      icon: <Youtube size={20} />, 
      url: 'https://youtube.com', 
      color: 'bg-red-600 hover:bg-red-700',
      label: 'Youtube'
    },
    // { 
    //   icon: <Linkedin size={20} />, 
    //   url: 'https://linkedin.com', 
    //   color: 'bg-blue-700 hover:bg-blue-800',
    //   label: 'LinkedIn'
    // },
    { 
      icon: <MessageSquare size={20} />, 
      url: 'https://wa.me/8421517771', 
      color: 'bg-green-500 hover:bg-green-600',
      label: 'WhatsApp'
    }
  ];

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col space-y-2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} text-white p-3 transition-all duration-300 transform hover:translate-x-2 hover:scale-110 flex items-center rounded-r-md group`}
            aria-label={social.label}
          >
            {social.icon}
            <span className="absolute left-10 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaBar;
