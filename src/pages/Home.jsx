import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  DumbbellIcon,
  Bath,
  Trophy,
  Users,
  Award,
  MapPin,
  Zap,
  PhoneCall,
  MessageCircle,
  Navigation,
  BadgeCheck,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import swimmingImg from '../Assets/swimming img home.jpeg';

const AnimatedCount = ({ end, suffix = '', duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
};

const Home = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80',
      alt: 'Elite Fitness Gym'
    },
    {
      url: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      alt: 'Olympic Size Swimming Pool'
    },
    {
      url: swimmingImg,
      alt: 'VJS Swimming Pool'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const establishedYear = 2010;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - establishedYear;

  const heroStats = [
    { value: 5000, suffix: '+', label: 'Members', icon: Users },
    { value: experienceYears, suffix: '+', label: 'Years', icon: Award },
    { value: 2, suffix: '', label: 'Locations', icon: MapPin },
  ];

  const stats = [
    { label: 'Happy Members', value: '5000+', icon: Users },
    { label: 'Years Experience', value: `${experienceYears}+`, icon: Award },
    { label: 'Certified Trainers', value: '25+', icon: Zap },
    { label: 'Premium Locations', value: '02', icon: MapPin },
  ];

  const trustBadges = [
    { label: `${experienceYears}+ Years Experience`, icon: Award },
    { label: '5000+ Members', icon: Users },
    { label: 'Certified Trainers', icon: BadgeCheck },
    { label: 'Olympic Swimming Pool', icon: Bath },
  ];

  const services = [
    { id: 'gym', title: 'Gym', icon: DumbbellIcon, description: 'State-of-the-art equipment, personal training, and group classes.' },
    { id: 'swimming', title: 'Swimming Pool', icon: Bath, description: 'Olympic-sized pool with professional coaching and amenities.' },
    { id: 'construction', title: 'Swimming Pool Construction & Management', icon: Trophy, description: 'Professional swimming pool design, construction, and management services.' }
  ];

  const whyChoosePoints = [
    'Certified and experienced trainers',
    'Olympic-size swimming pool',
    'Personalized transformation programs',
    'Modern imported gym equipment',
    'Clean, hygienic, and safe environment',
    'Supportive and motivating fitness community'
  ];

  const facilityHighlights = [
    'Fully equipped strength and cardio zone',
    'Functional training area',
    'Olympic-standard swimming pool',
    'Personal training services',
    'Locker rooms and shower facilities',
    'Spacious and comfortable workout environment'
  ];

  const whoWeServe = [
    'Beginners starting their fitness journey',
    'Professionals improving strength and endurance',
    'Athletes enhancing performance',
    'Weight loss transformation seekers',
    'Kids and adults learning swimming'
  ];

  const memberSuccess = [
    'Faster fat loss',
    'Improved strength',
    'Better stamina',
    'Increased confidence'
  ];

  const swimmingPrograms = [
    'Learn-to-swim programs',
    'Competitive swimming training',
    'Kids swimming classes',
    'Adult swimming coaching'
  ];

  return (
    <div className="bg-with-logo pb-24 md:pb-0">
      <section className="hero-banner-enhanced">
        <div className="hero-bg-wrapper">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              className={`hero-bg-image-enhanced transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
          ))}
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-content-enhanced">
            <ScrollAnimation animation="fade-in" delay={100}>
              <div className="hero-badge">
                <Zap size={16} className="text-yellow-400 fill-yellow-400 animate-pulse" />
                <span>Transform Your Body and Mind</span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={300}>
              <h1 className="hero-title-enhanced">
                <span className="hero-title-line">Premium Fitness</span>
                <span className="hero-title-gradient">For Every Champion</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={500}>
              <p className="hero-description-enhanced">
                Premium Gym and Swimming Pool in Balewadi, Pune - built for serious results.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={700}>
              <div className="hero-cta-wrapper">
                <Link to="/services" className="hero-btn-primary group">
                  <span>Explore Services</span>
                  <ArrowRight className="hero-btn-icon" size={20} />
                </Link>
                <Link to="/contact" className="hero-btn-secondary group">
                  <span>Contact Us</span>
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={900}>
              <div className="hero-stats-mini">
                {heroStats.map((stat) => (
                  <div className="hero-stat-item" key={stat.label}>
                    <stat.icon className="hero-stat-icon" size={20} />
                    <span className="hero-stat-text">
                      <AnimatedCount end={stat.value} suffix={stat.suffix} /> {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 flex md:hidden border-t border-white/10 bg-gray-950/90 backdrop-blur-xl rounded-t-2xl shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <div className="flex-1 flex flex-col border-r border-white/5">
          <a
            href="tel:+918421517771"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold uppercase tracking-tight text-white border-b border-white/5 active:bg-white/10"
          >
            <PhoneCall size={12} className="text-red-500" />
            8421517771
          </a>
          <a
            href="tel:+918275929556"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold uppercase tracking-tight text-white active:bg-white/10"
          >
            <PhoneCall size={12} className="text-red-500" />
            8275929556
          </a>
        </div>
        <a
          href="https://wa.me/918421517771"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 border-x border-white/5 py-4 text-[11px] font-bold uppercase tracking-wide text-white active:bg-white/10"
        >
          <MessageCircle size={16} className="text-green-500" />
          WhatsApp
        </a>
        <a
          href="https://maps.google.com/?q=VJ%27s+Fitness+Balewadi+High+St+Pune+411045"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-[11px] font-bold uppercase tracking-wide text-white active:bg-white/10"
        >
          <Navigation size={16} className="text-blue-500" />
          Directions
        </a>
      </div>

      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-red-50 text-red-600 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 border-b border-gray-200 home-section">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => (
              <ScrollAnimation key={badge.label} delay={index * 80}>
                <div className="home-point-card home-point-card--compact home-point-card--center">
                  <badge.icon className="home-point-icon text-red-600 mb-2" size={20} />
                  <p className="text-sm font-semibold text-gray-800 leading-tight">{badge.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Services</span>
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 100}>
                <Link
                  to={`/services#${service.id}`}
                  className="block relative h-full bg-white rounded-lg p-4 sm:p-8 shadow-md border-b-4 border-red-600 hover:border-red-800 transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="block">
                    <img
                      src={`${service.id === 'gym'
                        ? 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                        : service.id === 'swimming'
                          ? 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                          : 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                        }`}
                      alt={service.title}
                      className="rounded-lg shadow-md w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    <div className="min-w-0 flex-1 mt-5 sm:mt-6">
                      <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-red-600/10 flex items-center justify-center mb-3 sm:mb-6">
                        <service.icon className="h-5 w-5 sm:h-7 sm:w-7 text-red-700" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 sm:mb-3 leading-tight">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-6 leading-relaxed">{service.description}</p>
                      <div className="inline-flex items-center text-red-600 font-medium text-sm sm:text-base group-hover:translate-x-2 transition-all duration-300">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900 text-white home-section home-section--dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto mb-12 home-section-intro">
              <h2 className="text-3xl md:text-5xl font-bold mb-5 home-section-title text-white">
                Why VJS Fitness Club is Balewadi's #1 Fitness Destination
              </h2>
              <p className="text-white/80 home-section-copy">
                At VJS Fitness Club and Swimming Pool, we combine world-class infrastructure, certified coaching, and a
                results-driven approach to help you achieve your fitness goals faster and safely. Our facility is designed
                for beginners, professionals, and athletes who demand excellence.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 home-points-grid">
            {whyChoosePoints.map((point, index) => (
              <ScrollAnimation key={point} delay={index * 80}>
                <div className="home-point-card home-point-card--dark">
                  <BadgeCheck className="home-point-icon text-red-300 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-white/90 home-point-text">{point}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white home-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <ScrollAnimation>
              <div className="rounded-2xl border border-gray-200 p-8 h-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-5">We Don't Just Train. We Transform.</h2>
                <p className="text-gray-600 mb-4">
                  Our programs are designed to deliver real, measurable results. Whether your goal is weight loss, muscle
                  gain, improved endurance, or swimming mastery, our expert coaches create personalized plans tailored to
                  your body and lifestyle.
                </p>
                <p className="text-gray-700 font-medium">
                  Thousands of members trust VJS Fitness Club to transform their health, confidence, and performance.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={120}>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Transformation Pillars</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <HeartPulse className="text-red-600 mt-0.5" size={20} />
                    <p className="text-gray-700">Goal-based assessments and progress tracking</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="text-red-600 mt-0.5" size={20} />
                    <p className="text-gray-700">Safe, expert-led training for every fitness level</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="text-red-600 mt-0.5" size={20} />
                    <p className="text-gray-700">Personalized plans for faster and sustainable results</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 home-section">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-12 home-section-intro">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 home-section-title">Premium Facilities Built for Serious Results</h2>
              <p className="text-gray-600 home-section-copy">
                Experience a fitness environment equipped with the latest technology and professional infrastructure to
                maximize your performance and safety.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 home-points-grid">
            {facilityHighlights.map((item, index) => (
              <ScrollAnimation key={item} delay={index * 80}>
                <div className="home-point-card">
                  <Zap className="home-point-icon text-red-600 mt-0.5 flex-shrink-0" size={19} />
                  <p className="text-gray-700 home-point-text">{item}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white home-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">Professional Swimming Training in Balewadi</h2>
                <p className="text-gray-600 mb-6">
                  Our Olympic-size swimming pool and expert coaches provide professional swimming programs for beginners,
                  intermediate, and advanced swimmers.
                </p>
                <div className="space-y-3 home-points-list">
                  {swimmingPrograms.map((program, index) => (
                    <div key={program} className="home-point-line">
                      <Bath className="home-point-icon text-red-600 mt-0.5 flex-shrink-0" size={18} />
                      <p className="text-gray-700 home-point-text">{program}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={120}>
              <img
                src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Professional Swimming Training in Balewadi"
                className="rounded-2xl shadow-lg w-full h-[360px] object-cover"
                loading="lazy"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900 text-white home-section home-section--dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-12 home-section-intro">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 home-section-title text-white">Fitness Programs for Everyone</h2>
              <p className="text-white/80 home-section-copy">Our programs are designed for people of all fitness levels:</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 home-points-grid">
            {whoWeServe.map((item, index) => (
              <ScrollAnimation key={item} delay={index * 80}>
                <div className="home-point-card home-point-card--dark">
                  <Users className="home-point-icon text-red-300 mt-0.5 flex-shrink-0" size={19} />
                  <p className="text-white/90 home-point-text">{item}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-fitness">Programs</span>
              </h2>
              <p className="text-gray-600">
                Join our specialized programs designed to deliver maximum results and keep you motivated on your journey.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Weight Loss Challenge',
                desc: 'A structured 12-week program focusing on high-intensity training and scientific nutrition.',
                image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                tag: 'Popular'
              },
              {
                title: 'Advance Swimming',
                desc: 'Master professional strokes and improve endurance with our Olympic-level coaching.',
                image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                tag: 'Pro'
              },
              {
                title: 'Group X Activities',
                desc: 'Energetic group classes including Zumba, Yoga, and Crossfit in a social group setting.',
                image: 'https://images.unsplash.com/photo-1571902251103-d248171d9d4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                tag: 'Fun'
              }
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <div className="relative h-64">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-fitness-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{item.tag}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
                    <Link to="/contact" className="flex items-center text-fitness-purple font-bold hover:translate-x-2 transition-transform duration-300">
                      ENROLL NOW <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white home-section">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-12 home-section-intro">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 home-section-title">Trusted by 5000+ Members in Pune</h2>
              <p className="text-gray-600 home-section-copy">
                Over the years, VJS Fitness Club has helped thousands of members achieve their fitness goals. Our
                structured training, expert coaching, and supportive environment ensure long-term success.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14 home-points-grid">
            {memberSuccess.map((point, index) => (
              <ScrollAnimation key={point} delay={index * 80}>
                <div className="home-point-card home-point-card--center">
                  <p className="text-red-700 font-semibold home-point-text">{point}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Members Say</span>
            </h3>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Sharma',
                role: 'Gym Member',
                comment: "The facilities are top-notch and the trainers are extremely knowledgeable. I've seen amazing results in just 3 months!",
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Priya Patel',
                role: 'Swimming Enthusiast',
                comment: 'The swimming coaching has transformed my technique. The pool is always clean and well-maintained with friendly staff.',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Amit Kulkarni',
                role: 'Transformation Client',
                comment: 'The structured transformation plan and regular coach follow-up helped me lose fat and build confidence consistently.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
            ].map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-red-600 hover:border-red-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-full object-cover mr-4 border-2 border-red-600"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Message from the Founder</h2>
              <blockquote className="text-xl md:text-2xl leading-relaxed text-white/90 italic mb-6">
                "Our mission is to provide a world-class fitness experience where every member receives professional guidance,
                motivation, and support to achieve their goals. We are committed to helping our community live healthier and
                stronger lives."
              </blockquote>
              <p className="text-white font-semibold">- Mr. Vijay Jambhale</p>
              <p className="text-white/75">Founder, VJS Fitness Club</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Gym and Swimming Pool in Balewadi, Pune</h2>
              <p className="text-gray-600">
                Conveniently located in Balewadi, VJS Fitness Club serves members from Baner, Wakad, Hinjewadi, and nearby
                areas. Our modern facility and expert coaching make us one of the most trusted fitness destinations in Pune.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Fitness Transformation Today</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-10">
              Join VJS Fitness Club and take the first step toward a stronger, healthier, and more confident version of
              yourself.
            </p>
            <p className="text-white/90 max-w-2xl mx-auto mb-10">
              Our expert trainers, premium facilities, and supportive community are ready to help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-red-700 py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Book Free Trial
              </Link>
              <Link to="/contact" className="bg-transparent border border-white text-white py-3 px-6 rounded-md font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Contact Us Today
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;
