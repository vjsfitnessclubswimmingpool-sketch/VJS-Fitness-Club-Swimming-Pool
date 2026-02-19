import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Target, Trophy, Clock, Heart, CheckCircle2, Star,
  MapPin, Dumbbell, Award, BadgeCheck, Sparkles,
  Droplets, Brain, Quote, Calendar, Activity, ShieldCheck,
  Flame, Leaf, ChevronDown, ChevronUp, Bath
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import sir from '../Assets/vj-sir.jpg';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const establishedYear = 2010;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - establishedYear;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const milestones = [
    { year: '2010', title: 'Foundation', description: 'Established our first gym location with a vision to transform fitness in the region.' },
    { year: '2013', title: 'Swimming Pool', description: 'Expanded our services by opening a world-class swimming facility.' },
    { year: '2021', title: 'Franchise Model', description: 'Started expanding through franchising to bring our fitness vision to more communities.' },
    { year: '2024', title: 'Pool Construction', description: 'Launched our professional swimming pool design, construction, and management division.' },
  ];

  const whyChooseItems = [
    { icon: Calendar, title: `${experienceYears}+ Years Experience`, desc: `Proven track record in fitness excellence since ${establishedYear}.` },
    { icon: Activity, title: '5000+ Transformations', desc: 'Real results for real people across all age groups.' },
    { icon: BadgeCheck, title: 'Certified Trainers', desc: 'Expert coaches dedicated to your personal growth.' },
    { icon: Bath, title: 'Olympic-Size Pool', desc: 'Premium swimming facility for training and leisure.' },
    { icon: Users, title: 'Personalized Plans', desc: 'Tailored workout and nutrition strategies for you.' },
    { icon: Sparkles, title: 'Modern Hygiene', desc: 'State-of-the-art equipment with strict sanitation.' },
  ];

  const achievements = [
    { value: `${experienceYears}+`, label: 'Years Experience' },
    { value: '5000+', label: 'Active Members' },
    { value: '10+', label: 'Certified Trainers' },
    { value: '2', label: 'Premium Locations' },
    { value: '1000+', label: 'Swimmers Trained' },
  ];

  const testimonials = [
    {
      name: 'Rohit S.',
      role: 'Member since 2018',
      quote: 'Best gym in Balewadi with professional trainers and clean facilities. The transformation I achieved here in 6 months is unbelievable.',
      rating: 5
    },
    {
      name: 'Priya K.',
      role: 'Swimming Enthusiast',
      quote: 'The swimming pool is maintained perfectly. The coaches are very patient with beginners. Highly recommend for both kids and adults.',
      rating: 5
    },
    {
      name: 'Amit D.',
      role: 'Fitness Freak',
      quote: 'Not just a gym, it’s a community. The energy here is contagious and motivates you to push your limits every single day.',
      rating: 5
    }
  ];

  const faqData = [
    { question: 'What are your operating hours?', answer: 'We are open Mon-Sat from 6:00 AM to 10:00 PM, and Sunday from 7:00 AM to 1:00 PM.' },
    { question: 'Do you offer trial sessions?', answer: 'Yes, we offer free trial sessions for both Gym and Swimming so you can experience our facilities before joining.' },
    { question: 'Is personal training available?', answer: 'Absolutely! We have certified personal trainers who create customized workout and nutrition plans suited to your goals.' },
    { question: 'Do you have parking facilities?', answer: 'Yes, we provide ample parking space for our members at both our Balewadi locations.' },
  ];

  return (
    <div className="bg-with-logo">
      {/* Hero Banner containing 'Our Story' visual */}
      <section className="hero-banner">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
          alt="About Us Hero"
          className="hero-bg-image"
        />
        <div className="hero-content">
          <h1 className="hero-title font-poppins">
            Our Story of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Excellence & Passion</span>
          </h1>
          <p className="hero-description">
            Discover the journey that turned our vision into Pune's premier fitness destination.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg h-full">
                <div className="bg-fitness-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-fitness-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-poppins">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed font-poppins font-normal">
                  To empower individuals of all ages to achieve their fitness goals through expert guidance, world-class facilities, and a motivating community. We strive to make fitness accessible, enjoyable, and sustainable for everyone.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg h-full">
                <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-poppins">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed font-poppins font-normal">
                  To become Pune’s most trusted and innovative fitness & wellness ecosystem, setting the standard for comprehensive health solutions and inspiring a healthier, happier society.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose VJS - High Impact */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">
                Why We’re Balewadi’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Preferred Fitness Destination</span>
              </h2>
              <p className="text-gray-600 font-poppins font-normal">Building instant authority with excellence in every detail.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-fitness-purple group">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-gray-50 p-2 rounded-lg group-hover:bg-fitness-purple/10 transition-colors">
                      <item.icon className="h-6 w-6 text-fitness-purple" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 font-poppins">{item.title}</h4>
                      <p className="text-gray-600 text-sm font-poppins font-normal">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Ecosystem vs Gym */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <ScrollAnimation>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-white">
                    Not Just a Gym.<br />A Complete <span className="text-yellow-400">Fitness Ecosystem.</span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 font-poppins">
                    Most gyms offer equipment. <span className="text-white font-bold">We offer transformation.</span>
                  </p>

                  <div className="space-y-4">
                    {['Strength Training', 'Functional & Crossfit', 'Swimming Programs', 'Kids Swimming Classes', 'Personal Training', 'Fitness Assessments'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                        <span className="font-medium tracking-wide">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Fitness Ecosystem"
                    className="rounded-xl shadow-lg border-4 border-white/10"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-4 rounded-lg shadow-xl hidden md:block">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold">Premium Experience</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Counters - Big Bold Numbers */}
      <section className="py-20 bg-fitness-purple text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {achievements.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="p-4">
                  <h3 className="text-4xl md:text-5xl font-extrabold mb-2 font-poppins">{stat.value}</h3>
                  <p className="text-white/80 font-medium font-poppins uppercase tracking-wider text-sm">{stat.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-3 opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Training Philosophy"
                  className="relative rounded-2xl shadow-xl z-10"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                Our Approach to <span className="text-transparent bg-clip-text bg-gradient-fitness">Fitness</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-poppins">
                We believe fitness is not a short-term challenge — it’s a lifelong commitment. Our holistic approach goes beyond just muscle building to ensure overall well-being.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Brain, title: 'Scientific Methods', desc: 'Evidence-based training protocols' },
                  { icon: Clock, title: 'Consistency', desc: 'Sustainable habits for long term' },
                  { icon: Leaf, title: 'Balanced Nutrition', desc: 'Fueling your body right' },
                  { icon: ShieldCheck, title: 'Injury Prevention', desc: 'Safe technique coaching' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col bg-white p-4 rounded-lg shadow-sm">
                    <item.icon className="h-8 w-8 text-fitness-purple mb-3" />
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Swimming Highlight Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold text-sm mb-4 uppercase tracking-widest">
                <Bath className="h-4 w-4" />
                VJS Signature Feature
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins text-blue-900">
                Professional <span className="text-blue-500">Swimming Programs</span>
              </h2>
              <p className="text-gray-600 font-poppins">
                One of the few facilities in Balewadi featuring an Olympic-sized pool with comprehensive aquatic programs.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Learn to Swim (Kids & Adults)', 'Competitive Training', 'Water Fitness (Aqua Aerobics)', 'Safety & Technique Coaching'].map((prog, i) => (
              <ScrollAnimation key={i} delay={i * 100}>
                <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col items-center text-center">
                  <div className="bg-blue-50 p-4 rounded-full mb-4">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 font-poppins">{prog}</h4>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins">
              Stories of <span className="text-transparent bg-clip-text bg-gradient-fitness">Transformation</span>
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollAnimation key={i} delay={i * 100}>
                <div className="bg-gray-50 p-8 rounded-2xl relative">
                  <Quote className="absolute top-4 right-4 h-10 w-10 text-gray-200" />
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, r) => (
                      <Star key={r} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 relative z-10">"{t.quote}"</p>
                  <div>
                    <h4 className="font-bold text-lg font-poppins">{t.name}</h4>
                    <p className="text-fitness-purple text-sm">{t.role}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team (Keep Existing) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 font-poppins">
                Our <span className="text-transparent bg-clip-text bg-gradient-fitness">Leadership Team</span>
              </h2>
              <p className="text-gray-600 font-poppins">
                Meet the visionaries and experts behind our fitness club.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Mr. Vijay Jambhale',
                role: 'Managing Director',
                bio: 'With over 15 years in the fitness industry, Mr. Vijay brings expertise and vision to our club.',
                image: sir
              },
              {
                name: 'Dr. Preeti Dhumale',
                role: 'Operations Director',
                bio: 'Dr. Preeti ensures smooth operations across all our facilities with attention to detail and excellence.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((member, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="relative pb-3/4 w-full h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1 font-poppins">{member.name}</h3>
                    <p className="text-fitness-purple mb-3 font-medium">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6 font-poppins">More Than Members — <span className="text-fitness-purple">We’re a Family</span></h2>
            <p className="max-w-3xl mx-auto text-gray-600 mb-12 font-poppins">
              We focus on community retention through fitness events, transformation challenges, member meetups, and health awareness camps. When you join VJS, you join a supportive tribe.
            </p>
          </ScrollAnimation>

          {/* Awards / Certifications Small Strip */}
          <ScrollAnimation delay={200}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center">
                <Award className="h-12 w-12 text-yellow-500 mb-2" />
                <span className="font-bold text-sm">Recognized Brand</span>
              </div>
              <div className="flex flex-col items-center">
                <BadgeCheck className="h-12 w-12 text-blue-500 mb-2" />
                <span className="font-bold text-sm">Govt Registered</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-12 w-12 text-purple-500 mb-2" />
                <span className="font-bold text-sm">Top Rated in Pune</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Timeline (Bonus) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-16 font-poppins">Our <span className="text-transparent bg-clip-text bg-gradient-fitness">Journey</span></h2>
          </ScrollAnimation>
          <div className="relative border-l-4 border-fitness-purple/20 ml-4 md:ml-1/2 md:-ml-0.5 space-y-12">
            {milestones.map((m, i) => (
              <ScrollAnimation key={i} delay={i * 100}>
                <div className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} md:w-full`}>
                  <div className="absolute left-[-10px] md:left-1/2 md:-ml-3 w-6 h-6 bg-fitness-purple rounded-full border-4 border-white shadow-lg"></div>
                  <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:pl-8 text-left' : 'md:pr-8 md:text-right'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <span className="text-2xl font-bold text-fitness-purple block mb-2 font-poppins">{m.year}</span>
                      <h3 className="text-xl font-bold mb-2 font-poppins">{m.title}</h3>
                      <p className="text-gray-600 text-sm font-poppins font-normal">{m.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (Bonus) */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-10 font-poppins">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left font-bold font-poppins text-gray-800"
                    onClick={() => toggleFaq(index)}
                  >
                    {item.question}
                    {openFaq === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-white text-gray-600 font-poppins font-normal leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Local SEO Text */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 mb-4 text-gray-500">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold uppercase tracking-widest text-xs">Serving Pune West</span>
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm leading-relaxed font-poppins font-normal">
            VJS Fitness Club is proudly located in <strong>Balewadi, Pune</strong>, serving fitness enthusiasts from Baner, Wakad, Hinjewadi, Aundh, and nearby areas. As a premier fitness destination, we are committed to providing world-class health and wellness services to our local community.
          </p>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="py-20 bg-gradient-to-r from-fitness-purple to-fitness-blue text-white text-center">
        <div className="container-custom">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-poppins">Ready to Start Your Transformation?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-poppins font-normal">
              Join hundreds of happy members who trust VJS Fitness Club for their health and fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-8 py-4 bg-white text-fitness-purple rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                Book Free Trial
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                Contact Us Today
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

    </div>
  );
};

export default About;
