import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { X, Play } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

import gym1 from '../Assets/vj-gym1.jpg';
import gym2 from '../Assets/vj-gym2.jpg';
import gym3 from '../Assets/vj-gym3.jpg';
import gym4 from '../Assets/vj-gym4.jpg';
import gym5 from '../Assets/vj-gym5.jpg';
import gym6 from '../Assets/vj-gym6.jpg';

// import gym7 from '../Assets/vj-gym7.mp4';
// import gym8 from '../Assets/vj-gym8.mp4';
import gym9 from '../Assets/vj-gym9.mp4';

import gym12 from '../Assets/vj-gym12.jpg';
import gym13 from '../Assets/vj-gym13.jpg';
import gym14 from '../Assets/vj-gym14.jpg';
import gym15 from '../Assets/vj-gym15.jpg';
import gym16 from '../Assets/vj-gym16.jpg';
import gym17 from '../Assets/vj-gym17.jpg';
import gym18 from '../Assets/vj-gym18.jpg';
import gym19 from '../Assets/vj-gym19.jpg';
// import gym20 from '../Assets/vj-gym20.jpg';
// import gym21 from '../Assets/vj-gym21.jpg';



// import gymTourThumb from '../Assets/video-thumb1.jpg';
// import swimmingTrainingThumb from '../Assets/video-thumb2.jpg';
// import fitnessClassThumb from '../Assets/video-thumb3.jpg';

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState(null);

  const images = [
    { src: gym1, title: 'Gym Facilities', category: 'Gym' },
    { src: gym2, title: 'Zumba Section', category: 'Gym' },
    { src: gym3, title: 'Swimming Pool', category: 'Swimming' },
    { src: gym4, title: 'Pool Side', category: 'Swimming' },

    { src: gym12, title: 'Certificate', category: 'Club' },
    { src: gym13, title: 'Members', category: 'Gym' },
    { src: gym14, title: 'Body builder', category: 'Gym' },
    { src: gym15, title: 'Sir', category: 'Club' },
    { src: gym16, title: 'Athletes', category: 'Gym' },
    { src: gym17, title: 'Builders', category: 'Gym' },
    { src: gym18, title: 'Poster', category: 'Club' },
    { src: gym19, title: 'Champion', category: 'Gym' },
    // { src: gym20, title: 'Football Field', category: 'Football' },
    // { src: gym21, title: 'Football Field', category: 'Football' },

  ];
  const videos = [
    // {
    //   title: 'Builder',
    //   url: gym7,

    // },
    // {
    //   title: 'Swimming',
    //   url: gym8,

    // },
    {
      title: 'Training',
      url: gym9,

    },
  ];

  const openLightbox = (content) => {
    setLightboxContent(content);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-with-logo">
      {/* Hero Section */}
      <section className="hero-banner">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
          alt="Gallery Hero"
          className="hero-bg-image"
        />
        <div className="hero-content">
          <h1 className="hero-title font-poppins">
            Explore Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              World-Class Facilities
            </span>
          </h1>
          <p className="hero-description">
            Take a visual journey through our premium fitness spaces, training sessions, and the vibrant community that makes us special.
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
            <ScrollAnimation>
              <Tab.List className="flex space-x-4 bg-gray-100 p-1 rounded-lg mb-12 max-w-md mx-auto">
                <Tab
                  className={({ selected }) =>
                    `w-full py-3 text-center rounded-md font-medium transition-all ${selected
                      ? 'bg-gradient-fitness text-white shadow-md'
                      : 'hover:bg-gray-200 text-gray-700'
                    }`
                  }
                >
                  Images
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `w-full py-3 text-center rounded-md font-medium transition-all ${selected
                      ? 'bg-gradient-fitness text-white shadow-md'
                      : 'hover:bg-gray-200 text-gray-700'
                    }`
                  }
                >
                  Videos
                </Tab>
              </Tab.List>
            </ScrollAnimation>

            <Tab.Panels>
              {/* Images Tab */}
              <Tab.Panel>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {images.map((image, index) => (
                    <ScrollAnimation key={index} delay={index % 4 * 100}>
                      <div
                        className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white group"
                        onClick={() => openLightbox(image)}
                      >
                        <div className="h-64 overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg">{image.title}</h3>
                          <p className="text-sm text-gray-500">{image.category}</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </Tab.Panel>

              {/* Videos Tab */}
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video, index) => (
                    <ScrollAnimation key={index} delay={index % 3 * 100}>
                      <div
                        className="cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group"
                        onClick={() => openLightbox(video)}
                      >
                        <div className="relative">
                          <video
                            className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
                            src={video.url}
                            muted
                            loop
                            playsInline
                            autoPlay
                          />


                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                            <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <Play className="h-8 w-8 text-white fill-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg">{video.title}</h3>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <div className="max-w-4xl w-full">
            {lightboxContent.url ? (
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <video controls autoPlay className="w-full h-full rounded-lg">
                  <source src={lightboxContent.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <img
                src={lightboxContent.src}
                alt={lightboxContent.title}
                className="w-full h-auto rounded-lg"
              />
            )}

            <div className="mt-4 text-white">
              <h3 className="text-xl font-medium">{lightboxContent.title}</h3>
              {lightboxContent.category && (
                <p className="text-gray-300">{lightboxContent.category}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
