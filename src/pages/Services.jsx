
import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { Check, ArrowRight, DumbbellIcon, Bath, Trophy, Volleyball, GraduationCap, Wrench } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import swimmingImg from '../Assets/swimming img home.jpeg';

const Services = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);
  const experienceYears = new Date().getFullYear() - 2010;

  // Define services with their details
  const services = [
    {
      id: 'gym',
      title: 'Gym',
      icon: DumbbellIcon,
      description: 'Our state-of-the-art gym facility offers the latest equipment, expert trainers, and specialized programs to help you achieve your fitness goals.',
      features: [
        'Modern cardio and strength equipment',
        'Functional training zone',
        'Free weights area',
        'Personalized training programs',
        'Nutritional guidance',
        'Fitness assessment'
      ],
      subservices: [
        {
          title: 'Steam',
          description: 'Relax and rejuvenate with our premium steam room facilities, perfect for post-workout recovery.',
          image: 'https://tse2.mm.bing.net/th?id=OIP.rDHR6XxLByY9TuZpENr-GwHaFr&pid=Api&P=0&h=220'
        },
        {
          title: 'Private Coaching',
          description: 'One-on-one training sessions with our certified fitness experts tailored to your specific goals and needs.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'CrossFit',
          description: 'High-intensity functional training in a motivating group environment to push your limits and improve overall fitness.',
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Personal Training',
          description: 'Customized workout plans and dedicated guidance from our fitness professionals to accelerate your results.',
          image: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Group X Activities',
          description: 'Energetic group classes including Zumba, Yoga, and more led by passionate instructors in a fun, social setting.',
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ],
      mainImages: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      offers: [
        'Join with a friend and get 10% off both memberships',
        'Annual membership discount of 15%',
        'First-time visitors get a free 3-day pass',
        'Corporate plans available'
      ]
    },
    {
      id: 'swimming',
      title: 'Swimming Pool',
      icon: Bath,
      description: 'Our Olympic-sized swimming pool provides the perfect environment for swimmers of all levels, from beginners to competitive athletes.',
      features: [
        'Olympic-sized pool',
        'Temperature-controlled water',
        'Dedicated lanes for different speeds',
        'Kids swimming area',
        'Qualified lifeguards',
        'Changing rooms and showers'
      ],
      subservices: [
        {
          title: 'Personal Coaching',
          description: 'One-on-one swimming lessons with our certified coaches to improve your technique and confidence in the water.',
          image: 'https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Swimming Gear',
          description: 'High-quality swimming caps, goggles, and other accessories available for purchase at our facility.',
          image: 'https://www.enjoy-swimming.com/wp-content/uploads/swimming-gear-1.jpg'
        },
        {
          title: 'Pool Construction',
          description: 'Professional swimming pool design and construction services for residential and commercial properties.',
          image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ],
      mainImages: [
        swimmingImg
      ],
      offers: [
        'Senior citizen discount of 15%',
        'Early morning swimming special rates',
        'Group coaching plans available',
        'Seasonal discounts'
      ]
    },
    {
      id: 'construction',
      title: 'Swimming Pool Construction & Management',
      icon: Wrench,
      description: `Transform your property with our premium swimming pool construction services. We are Pune's leading pool construction specialists with ${experienceYears}+ years of experience, delivering over 200+ successful residential and commercial pool projects. From initial design to long-term maintenance, we provide end-to-end solutions with certified engineers, quality materials, and competitive pricing.`,
      features: [
        'Custom 3D pool design & CAD planning with visualization',
        'Premium construction materials with 10-year warranty',
        'Advanced filtration & water treatment systems',
        'Energy-efficient pumps & equipment installation',
        'LED lighting & underwater features',
        'Automated pool cleaning systems',
        'Pool heating & temperature control',
        'Safety features & child-proof fencing',
        '24/7 maintenance & emergency support',
        'Chemical balancing & water quality management',
        'Pool renovation & modernization services',
        'Leak detection & waterproofing solutions'
      ],
      subservices: [
        {
          title: 'Design & Planning',
          description: 'Transform your vision into reality with our expert 3D design and architectural planning services. We create custom pool designs tailored to your space, budget, and aesthetic preferences. Our team provides detailed blueprints, material recommendations, and cost estimates before construction begins.',
          image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Construction & Installation',
          description: 'Professional end-to-end construction with certified engineers and skilled technicians. We handle excavation, RCC structural work, waterproofing, tiling, plumbing, filtration system installation, and electrical work. All projects completed on-time with quality guarantees and proper safety measures.',
          image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Maintenance & Management',
          description: 'Comprehensive pool maintenance packages to keep your investment pristine year-round. Our services include regular cleaning, chemical testing and balancing, equipment servicing, filter cleaning, tile and grout maintenance, and water level management. Choose from weekly, bi-weekly, or monthly plans.',
          image: 'https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Renovation & Upgrades',
          description: 'Modernize your existing pool with our renovation services. We offer resurfacing, tile replacement, equipment upgrades, LED lighting installation, automation systems, energy-efficient pumps, and aesthetic enhancements. Give your old pool a stunning new look and improved functionality.',
          image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Commercial Pool Solutions',
          description: 'Specialized services for hotels, resorts, apartments, clubs, and schools. We design and build large-scale commercial pools with proper permits, safety compliance, ADA accessibility, advanced filtration systems, and commercial-grade equipment. Ideal for properties requiring Olympic-size or community pools.',
          image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Pool Equipment & Accessories',
          description: 'Premium pool equipment supply and installation including energy-efficient pumps, advanced filters, automated cleaners, LED lights, heaters, covers, diving boards, slides, and safety equipment. We source the best brands with competitive pricing and installation support.',
          image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ],
      mainImages: [
        'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      offers: [
        '🎁 FREE 3D Design & Site Consultation (Worth ₹25,000)',
        '💰 Up to 15% OFF on complete pool construction packages',
        '🔧 FREE 1-Year Maintenance on new pool constructions',
        '⚡ 10% Discount on energy-efficient equipment upgrades',
        '🎯 Special rates for apartment complexes & bulk orders',
        '💎 Premium materials at wholesale prices',
        '📋 Transparent quotations with no hidden costs',
        '🏆 10-Year structural warranty on all constructions',
        '🚀 Fast-track construction options available'
      ]
    }
  ];

  useEffect(() => {
    if (location.hash) {
      const serviceId = location.hash.substring(1);
      const tabIndex = services.findIndex(service => service.id === serviceId);
      if (tabIndex !== -1) {
        setSelectedTab(tabIndex);
      }
    }
  }, [location]);

  return (
    <div className="bg-with-logo">
      {/* Hero Banner with Full Background Image */}
      <section className="hero-banner services-hero-banner">
        <img
          src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
          alt="Services Hero"
          className="hero-bg-image"
        />
        <div className="hero-content">
          <h1 className="hero-title font-poppins">
            Premium Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">For Your Fitness Journey</span>
          </h1>
          <p className="hero-description">
            Discover our comprehensive range of world-class facilities designed to elevate your performance and transform your fitness experience.
          </p>
          <div className="hero-buttons">
            <a href="#gym" className="btn-hero-primary">
              Explore Gym
            </a>
            <a href="#construction" className="btn-hero-secondary">
              Pool Construction & Management
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
            <ScrollAnimation>
              <Tab.List className="flex flex-wrap justify-center gap-2 mb-12">
                {services.map((service) => (
                  <Tab key={service.id} className={({ selected }) =>
                    `px-4 py-2 rounded-md transition-all duration-300 font-medium ${selected
                      ? 'bg-gradient-fitness text-white shadow-md'
                      : 'hover:bg-gray-100 text-gray-700'
                    }`
                  }>
                    <span className="flex items-center">
                      <service.icon className="mr-2 h-4 w-4" />
                      {service.title}
                    </span>
                  </Tab>
                ))}
              </Tab.List>
            </ScrollAnimation>

            <Tab.Panels>
              {services.map((service, idx) => (
                <Tab.Panel key={idx}>
                  <div className="space-y-16">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                      {/* Image Section */}
                      <div className="lg:w-1/2">
                        <div className="grid grid-cols-1 gap-6">
                          {service.mainImages && service.mainImages.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`${service.title} ${i + 1}`}
                              className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[16/10] hover:scale-[1.02] transition-transform duration-500"
                            />
                          ))}
                        </div>





                      </div>

                      {/* Text Section */}
                      <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">
                          {service.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Services</span>
                        </h2>

                        <p className="text-gray-600 mb-6">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                                <Check className="h-3 w-3 text-white" />
                              </div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Link to="/contact" className="btn-primary">
                          Enquire Now
                        </Link>
                      </div>
                    </div>


                    {service.subservices && service.subservices.length > 0 && (
                      <div>
                        <ScrollAnimation>
                          <h3 className="text-2xl font-bold mb-10 text-center">
                            Our {service.title} <span className="text-transparent bg-clip-text bg-gradient-fitness">Programs</span>
                          </h3>
                        </ScrollAnimation>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {service.subservices.map((subservice, index) => (
                            <ScrollAnimation key={index} delay={index * 100}>
                              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                <div className="h-48 overflow-hidden">
                                  <img
                                    src={subservice.image}
                                    alt={subservice.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                  />
                                </div>
                                <div className="p-6">
                                  <h4 className="text-xl font-bold mb-3">{subservice.title}</h4>
                                  <p className="text-gray-600">{subservice.description}</p>
                                </div>
                              </div>
                            </ScrollAnimation>
                          ))}
                        </div>
                      </div>
                    )}



                    <div>
                      <ScrollAnimation>
                        <h3 className="text-2xl font-bold mb-10 text-center">
                          Current <span className="text-transparent bg-clip-text bg-gradient-fitness">Offers</span>
                        </h3>
                      </ScrollAnimation>

                      <div className="bg-gray-50 rounded-lg p-8 shadow-inner">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {service.offers.map((offer, index) => (
                            <ScrollAnimation key={index} delay={index * 100}>
                              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex">
                                <div className="h-10 w-10 rounded-full bg-fitness-purple/10 flex items-center justify-center mr-4 flex-shrink-0">
                                  <service.icon className="h-5 w-5 text-fitness-purple" />
                                </div>
                                <div>
                                  <p className="font-medium">{offer}</p>
                                </div>
                              </div>
                            </ScrollAnimation>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-fitness-purple to-fitness-blue text-white">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-10">
              Contact us today to learn more about our services and special offers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-fitness-purple py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition-all duration-300">
                Contact Us
              </Link>
              <Link to="/gallery" className="bg-transparent border border-white text-white py-3 px-6 rounded-md font-medium hover:bg-white/10 transition-all duration-300">
                View Gallery
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services;
