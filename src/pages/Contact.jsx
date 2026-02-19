
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle, CheckCircle2, ShieldCheck, Users, Star, Trophy, Zap } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, interests: [...formData.interests, value] });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value)
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        reply_to: formData.email,
        to_email: 'vjsfitnessclubswimmingpool@gmail.com',
        subject: 'New Contact Enquiry - VJS Fitness Club',
        phone: formData.phone || 'Not provided',
        interests: formData.interests.length ? formData.interests.join(', ') : 'Not specified',
        message: formData.message
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: 'service_7oq9n1c',
          template_id: 'template_um3njxy',
          user_id: 'Eibk87Os-1SqJLFfK',
          template_params: templateParams
        })
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || `EmailJS request failed with status ${response.status}`);
      }

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interests: [],
        message: ''
      });
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setFormStatus('error');
    }
  };

  const locations = [
    {
      name: 'Gym Facility',
      address: "VJ's fitness, 6th floor, Balewadi High st, Pune, 411045",
      phone: '+91 84215 17771, +91 82759 29556',
      whatsapp: '+91 8421517771',
      email: 'gym@vjfitnessclub.com',
      hours: 'Mon-Sat: 6:00 AM - 10:00 PM\nSunday: 7:00 AM - 8:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7563.90165974129!2d73.76881804207825!3d18.57625538011245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sVJS%20Fitness%20Club%20%26%20Swimming%20Pool!5e0!3m2!1sen!2sin!4v1744617991734!5m2!1sen!2sin'
    },

    {
      name: 'Swimming Pool Facility',
      address: ' Near by Rohan Ekam, F Residences road, Balewadi, 411045 ',
      phone: '+91 84215 17771, +91 82759 29556',
      whatsapp: '+91 8421517771',
      email: 'swimming@vjfitnessclub.com',
      hours: 'Mon-Sat: 6:00 AM - 8:00 PM\nSunday: 7:00 AM - 6:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7563.90165974129!2d73.76881804207825!3d18.57625538011245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sVJS%20Fitness%20Club%20%26%20Swimming%20Pool!5e0!3m2!1sen!2sin!4v1744617991734!5m2!1sen!2sin'
    }
  ];

  const contactCards = [
    {
      icon: <Phone className="h-8 w-8 text-fitness-purple" />,
      title: "Phone",
      items: [
        { label: "+91 84215 17771 (Gym)", url: "tel:+918421517771" },
        { label: "+91 82759 29556 (Gym)", url: "tel:+918275929556" },
        { label: "+91 84215 17771 (Pool)", url: "tel:+918421517771" }
      ]
    },
    {
      icon: <Mail className="h-8 w-8 text-fitness-purple" />,
      title: "Email",
      items: [
        { label: "info@vjfitnessclub.com", url: "mailto:info@vjfitnessclub.com" },
        { label: "support@vjfitnessclub.com", url: "mailto:support@vjfitnessclub.com" }
      ]
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-fitness-purple" />,
      title: "WhatsApp",
      items: [
        { label: "+91 8421517771 (Gym)", url: "https://wa.me/8421517771" },
        { label: "+91 8421517771 (Pool)", url: "https://wa.me/8421517771" }
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-fitness-purple" />,
      title: "Working Hours",
      items: [
        { label: "Mon-Sat: 6:00 AM - 10:00 PM", url: null },
        { label: "Sunday: 7:00 AM - 8:00 PM", url: null }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: "https://facebook.com" },
    { icon: <Instagram size={20} />, url: "https://instagram.com" },
    { icon: <Twitter size={20} />, url: "https://twitter.com" },
    { icon: <Youtube size={20} />, url: "https://youtube.com" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com" }
  ];

  const trustPoints = [
    {
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
      title: 'Fast Response',
      description: 'Most enquiries are answered within 30 minutes during working hours.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-blue-500" />,
      title: 'Personalized Guidance',
      description: 'We recommend the best program based on your goals, level, and schedule.'
    },
    {
      icon: <Users className="h-5 w-5 text-purple-500" />,
      title: 'Supportive Team',
      description: 'Our front-desk and coaching staff help you from first visit to ongoing progress.'
    }
  ];

  const consultationSteps = [
    'Share your fitness goal and preferred location.',
    'Get a custom plan for gym, swimming, or both.',
    'Book your trial session and start with confidence.'
  ];

  return (
    <div className="bg-with-logo pb-24 md:pb-0">
      {/* Hero Section */}
      <section className="hero-banner contact-hero-banner">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=75&fm=webp"
          alt="Contact VJS Fitness Club"
          className="hero-bg-image"
          fetchPriority="high"
        />
        <div className="hero-content contact-hero-content">
          <div className="contact-offer-badge">
            <Zap size={14} />
            Free Trial Available
          </div>
          <h1 className="hero-title contact-hero-title">
            <span className="block contact-title-top">Contact</span>
            <span className="block contact-title-main md:whitespace-nowrap">VJS Fitness Club & Swimming Pool</span>
            <span className="block contact-title-accent">Balewadi Pune</span>
          </h1>
          <p className="hero-description contact-hero-subtitle">
            Premium Gym & Swimming Pool in Balewadi for serious fitness goals.
          </p>
          <p className="contact-emotional-line">
            Call us today and take the first step toward a stronger, healthier you.
          </p>
          <div className="contact-hero-proof">
            <div className="contact-proof-pill">
              <Star size={14} className="text-yellow-300 fill-yellow-300" />
              4.8 Google Rating
            </div>
            <div className="contact-proof-pill">
              <Users size={14} />
              5000+ Happy Members
            </div>
            <div className="contact-proof-pill">
              <Trophy size={14} />
              {new Date().getFullYear() - 2010}+ Years Experience
            </div>
          </div>
          <div className="hero-buttons">
            <a href="tel:+918421517771" className="btn-hero-primary contact-call-btn">Call Now</a>
            <a href="https://wa.me/918421517771" target="_blank" rel="noreferrer" className="btn-hero-secondary contact-whatsapp-btn">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 flex md:hidden border-t border-white/10 bg-gray-950/90 backdrop-blur-xl rounded-t-2xl shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <div className="flex-1 flex flex-col border-r border-white/5">
          <a
            href="tel:+918421517771"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold uppercase tracking-tight text-white border-b border-white/5 active:bg-white/10"
          >
            <Phone size={12} className="text-red-500" />
            8421517771
          </a>
          <a
            href="tel:+918275929556"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold uppercase tracking-tight text-white active:bg-white/10"
          >
            <Phone size={12} className="text-red-500" />
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
          <MapPin size={16} className="text-blue-500" />
          Directions
        </a>
      </div>



      {/* Contact Info Section */}
      <section className="section-padding bg-white pt-14 md:pt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {trustPoints.map((point, index) => (
              <ScrollAnimation key={point.title} delay={index * 100}>
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 px-5 py-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{point.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{point.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{point.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Contact cards with equal height */}
            {contactCards.map((card, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                  <div className="h-16 w-16 rounded-full bg-fitness-purple/10 flex items-center justify-center mx-auto mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <div className="flex-grow">
                    {card.items.map((item, i) => (
                      <p key={i} className="text-gray-600 mb-2">
                        {item.url ? (
                          <a href={item.url} className="hover:text-fitness-purple transition-colors">
                            {item.label}
                          </a>
                        ) : (
                          item.label
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Locations */}
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our <span className="text-transparent bg-clip-text bg-gradient-fitness">Locations</span>
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {locations.map((location, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <div className="aspect-video w-full">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title={`Map for ${location.name}`}
                    ></iframe>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4">{location.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-fitness-purple mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-fitness-purple transition-colors"
                          >
                            {location.address}
                          </a>
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-fitness-purple mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          <a href={`tel:${location.phone.replace(/\s+/g, '')}`} className="hover:text-fitness-purple transition-colors">
                            {location.phone}
                          </a>
                        </p>
                      </div>
                      <div className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-fitness-purple mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          <a href={`https://wa.me/${location.whatsapp}`} className="hover:text-fitness-purple transition-colors">
                            WhatsApp: {location.whatsapp}
                          </a>
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-fitness-purple mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          <a href={`mailto:${location.email}`} className="hover:text-fitness-purple transition-colors">
                            {location.email}
                          </a>
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-fitness-purple mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600 whitespace-pre-line">{location.hours}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2.5 px-4 bg-gradient-fitness text-white rounded-md font-medium hover:shadow-lg transition-all duration-300"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Contact Form */}
          {/* Contact Form */}
          <div className="rounded-2xl shadow-lg overflow-hidden border border-gray-100 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Contact Form */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-6">
                  Send Us a <span className="text-transparent bg-clip-text bg-gradient-fitness">Message</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions or ready to start your fitness journey? Fill out the form and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fitness-purple focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fitness-purple focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fitness-purple focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Interests */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">I'm interested in (check all that apply)</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {['Gym', 'Swimming Pool'].map(interest => (
                          <div key={interest} className="flex items-center">
                            <input
                              type="checkbox"
                              id={interest.toLowerCase()}
                              name="interests"
                              value={interest}
                              checked={formData.interests.includes(interest)}
                              onChange={handleCheckboxChange}
                              className="h-4 w-4 text-fitness-purple focus:ring-fitness-purple rounded"
                            />
                            <label htmlFor={interest.toLowerCase()} className="ml-2 text-sm text-gray-700">
                              {interest}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fitness-purple focus:border-transparent"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <div>
                      <button
                        type="submit"
                        className="w-full py-3 px-6 bg-gradient-fitness text-white rounded-md font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : 'Send Message'}
                      </button>
                    </div>

                    {/* Success */}
                    {formStatus === 'success' && (
                      <div className="bg-green-50 text-green-800 p-4 rounded-md">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </div>
                    )}

                    {formStatus === 'error' && (
                      <div className="bg-red-50 text-red-800 p-4 rounded-md">
                        We could not send your message right now. Please try again in a moment.
                      </div>
                    )}
                  </div>
                </form>
              </div>

              {/* Right Column - Image and Info */}
              <div className="relative min-h-[400px] lg:min-h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Contact Us"
                  className="absolute h-full w-full object-cover"
                />
                <div className="relative lg:absolute lg:inset-0 bg-gradient-to-br from-fitness-purple/90 to-fitness-blue/90 flex flex-col justify-start lg:justify-center text-white p-8 lg:p-12 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-4 flex-shrink-0 text-white/90" />
                      <div>
                        <p className="font-medium text-white">Our Locations</p>
                        <p className="mt-1 text-sm text-white/80">Two premium facilities to serve you better</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 mr-4 flex-shrink-0 text-white/90" />
                      <div>
                        <p className="font-medium text-white">Working Hours</p>
                        <p className="mt-1 text-sm text-white/80">Open 7 days a week for your convenience</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 mr-4 flex-shrink-0 text-white/90" />
                      <div>
                        <p className="font-medium text-white">Contact Numbers</p>
                        <p className="mt-1 text-sm text-white/80">Call us directly for immediate assistance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MessageCircle className="h-6 w-6 mr-4 flex-shrink-0 text-white/90" />
                      <div>
                        <p className="font-medium text-white">WhatsApp</p>
                        <p className="mt-1 text-sm text-white/80">Message us anytime for quick responses</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl bg-white/10 border border-white/20 p-4">
                    <p className="font-semibold mb-3 text-white">What Happens Next?</p>
                    <ul className="space-y-2">
                      {consultationSteps.map((step, index) => (
                        <li key={index} className="flex items-start text-sm text-white/90">
                          <span className="mr-2 font-semibold">{index + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Socials */}
                  <div className="mt-10">
                    <p className="font-medium mb-4 text-white">Connect with Us</p>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Video Section */}
          {/* <div className="mt-16">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Take a <span className="text-transparent bg-clip-text bg-gradient-fitness">Virtual Tour</span>
              </h2>
            </ScrollAnimation>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video w-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/5yz9qbvMx6Y"
                  title="Fitness Club Virtual Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
