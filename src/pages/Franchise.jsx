import React, { useState } from 'react';
import { Check, Info, Users, TrendingUp, Award, Building, Target, IndianRupee, Clock, FileCheck, Handshake, GraduationCap, BarChart3, Shield, MapPin, Phone, Mail, Calendar, Sparkles, CheckCircle2, AlertCircle, ArrowRight, Download, Star } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import gym10 from '../Assets/vj-gym10.jpg';
import gym11 from '../Assets/vj-gym11.jpg';

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    investment: '',
    experience: '',
    propertyStatus: '',
    timeline: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        subject: 'New Franchise Enquiry - VJS Fitness Club',
        phone: formData.phone,
        city: formData.city,
        investment: formData.investment,
        experience: formData.experience,
        property_status: formData.propertyStatus || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        message: formData.message || 'No additional information provided'
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
        city: '',
        investment: '',
        experience: '',
        propertyStatus: '',
        timeline: '',
        message: ''
      });

      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Franchise form submission failed:', error);
      setFormStatus('error');
    }
  };

  const keyHighlights = [
    { icon: Users, value: '4+', label: 'Successful Franchisees' },
    { icon: TrendingUp, value: '₹2-5 Cr', label: 'Average Annual Revenue' },
    { icon: Clock, value: '24-36M', label: 'ROI Timeframe' },
    { icon: Award, value: '98%', label: 'Member Retention' }
  ];

  const experienceYears = new Date().getFullYear() - 2010;

  const benefits = [
    {
      icon: Building,
      title: 'Established Brand Recognition',
      description: `Leverage ${experienceYears}+ years of market presence with proven customer loyalty and trust across Pune and Maharashtra.`
    },
    {
      icon: BarChart3,
      title: 'Proven Business Model',
      description: 'Multiple revenue streams including memberships, personal training, group classes, and swimming programs.'
    },
    {
      icon: GraduationCap,
      title: 'Comprehensive Training Program',
      description: 'Initial 4-week training covering operations, sales, member management, and staff development protocols.'
    },
    {
      icon: Handshake,
      title: 'End-to-End Support',
      description: 'Dedicated franchise manager, marketing support, software systems, and quarterly business reviews.'
    },
    {
      icon: Target,
      title: 'Exclusive Territory Rights',
      description: 'Protected geographical area with no competition from other franchises within your designated zone.'
    },
    {
      icon: TrendingUp,
      title: 'Strong Growth Potential',
      description: 'Fitness industry growing at 15% annually with increasing health awareness across all demographics.'
    }
  ];

  const investmentBreakdown = [
    { category: 'Franchise Fee', amount: '₹3-7 Lakhs', description: 'One-time initial fee' },
    { category: 'Equipment & Setup', amount: '₹25-40 Lakhs', description: 'Gym equipment, furniture, interiors' },
    { category: 'Swimming Pool (Optional)', amount: '₹50-80 Lakhs', description: 'Construction & filtration system' },
    { category: 'Working Capital', amount: '₹10-15 Lakhs', description: 'First 6 months operations' },
    { category: 'Total Investment', amount: '₹40L - ₹1.5 Cr', description: 'Based on facility type & location', highlighted: true }
  ];

  const supportIncludes = [
    'Site selection and lease negotiation guidance',
    'Complete architectural and interior design plans',
    'Equipment procurement at discounted rates',
    'Staff recruitment and training assistance',
    'Marketing materials and digital presence setup',
    'Member management software and CRM',
    'Monthly operations review calls',
    'National and regional marketing campaigns'
  ];

  const franchiseRequirements = [
    { icon: MapPin, title: 'Space', detail: '3,000-15,000 sq ft depending on services' },
    { icon: IndianRupee, title: 'Investment', detail: '₹40 Lakhs to ₹1.5 Crore capital' },
    { icon: Target, title: 'Location', detail: 'High-visibility commercial area' },
    { icon: Users, title: 'Commitment', detail: 'Full-time active management' }
  ];

  const revenueStreams = [
    'Monthly membership subscriptions (Gym)',
    'Annual membership packages (Premium)',
    'Personal training sessions',
    'Group fitness classes (Yoga, Zumba, etc.)',
    'Swimming coaching programs',
    'Corporate wellness packages',
    'Sports nutrition and supplements',
    'Merchandise and apparel'
  ];

  const faqs = [
    {
      question: 'What is the total investment required?',
      answer: 'Total investment ranges from ₹40 lakhs to ₹1.5 crores depending on location size and services offered. This includes franchise fee, equipment, interiors, and working capital for first 6 months.'
    },
    {
      question: 'What is the franchise agreement duration?',
      answer: 'Standard franchise term is 5 years with renewal options. Renewals are offered based on performance and mutual agreement with reduced renewal fees.'
    },
    {
      question: 'What ongoing fees do I need to pay?',
      answer: 'Franchisees pay 6-8% monthly royalty on gross revenue and contribute 2% to the national marketing fund. No hidden charges or additional consultation fees.'
    },
    {
      question: 'Do you help with location selection?',
      answer: 'Yes, our team conducts market feasibility studies, helps identify suitable properties, assists with lease negotiations, and provides architectural guidance for optimal layout.'
    },
    {
      question: 'What training and support is provided?',
      answer: 'We provide 4-week initial training, staff training, ongoing operational support, marketing assistance, member management software, and quarterly business performance reviews.'
    },
    {
      question: 'How long until I can open my franchise?',
      answer: 'From agreement signing to opening: 4-6 months. Timeline includes site preparation (2-3 months), equipment delivery (4-6 weeks), and staff training (3-4 weeks).'
    },
    {
      question: 'What kind of returns can I expect?',
      answer: 'Franchisees typically achieve breakeven in 18-24 months with average ROI of 25-35% annually. Returns depend on location, management quality, and local market conditions.'
    },
    {
      question: 'Can I operate multiple franchises?',
      answer: 'Yes! Multi-unit franchise opportunities are available for qualified partners. We offer reduced fees and enhanced support for multi-location operators.'
    }
  ];

  const processSteps = [
    {
      title: 'Submit Inquiry',
      description: 'Fill out the detailed franchise application form with your background, investment capacity, and preferred location.',
      timeline: 'Day 1'
    },
    {
      title: 'Initial Screening',
      description: 'Our team reviews your application and conducts a preliminary phone interview to assess mutual fit.',
      timeline: '3-5 Days'
    },
    {
      title: 'Discovery Meeting',
      description: 'Visit our corporate office in Pune, tour existing facilities, meet the leadership team, and review franchise documentation.',
      timeline: 'Week 2'
    },
    {
      title: 'Financial Review',
      description: 'Detailed discussion of investment requirements, financial projections, and review of Franchise Disclosure Document (FDD).',
      timeline: 'Week 3'
    },
    {
      title: 'Location Selection',
      description: 'Site visits, market analysis, demographic study, and finalization of property with our real estate consultants.',
      timeline: 'Week 4-8'
    },
    {
      title: 'Agreement Signing',
      description: 'Legal review (recommended), sign franchise agreement, pay initial fees, and receive welcome package.',
      timeline: 'Week 10'
    },
    {
      title: 'Build-Out & Training',
      description: 'Construction management, equipment installation, staff hiring, and comprehensive 4-week training program.',
      timeline: 'Month 3-5'
    },
    {
      title: 'Grand Opening',
      description: 'Pre-launch marketing, member enrollment drives, grand opening event with corporate support team present.',
      timeline: 'Month 6'
    }
  ];

  return (
    <div className="bg-with-logo">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1920&q=80"
            alt="Premium Fitness Franchise Opportunity"
            className="w-full h-full object-cover scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/70 to-black/85"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-white py-16">
          <ScrollAnimation animation="fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-widest uppercase rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-md">
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-yellow-400">Limited Franchise Opportunities</span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={200}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-poppins mb-6 leading-tight text-white">
              Partner With <br />
              <span className="whitespace-nowrap">VJS Fitness Club & Swimming Pool</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={400}>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-poppins font-normal">
              Join Pune's fastest-growing premium fitness franchise with proven success, comprehensive support, and exclusive territorial rights.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Apply Now
                <ArrowRight size={20} />
              </a>
              <a
                href="#investment-details"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border-2 border-white/30 backdrop-blur-md transition-all duration-300"
              >
                <Download size={20} />
                Download Brochure
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-12 bg-gray-900 border-y border-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {keyHighlights.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-red-600/20 text-red-400 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={28} />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Franchise Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">VJS Fitness Franchise</span>
              </h2>
              <p className="text-lg text-gray-600">
                Partner with a proven brand that combines premium facilities, expert systems, and dedicated support to ensure your franchise success.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Breakdown Section */}
      <section id="investment-details" className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Investment <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Breakdown</span>
              </h2>
              <p className="text-lg text-gray-600">
                Transparent breakdown of investment requirements with no hidden costs.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {investmentBreakdown.map((item, index) => (
                <ScrollAnimation key={index} delay={index * 80}>
                  <div className={`p-6 border-b border-gray-100 last:border-b-0 flex items-center justify-between ${item.highlighted ? 'bg-gradient-to-r from-red-50 to-orange-50' : ''}`}>
                    <div className="flex-1">
                      <h3 className={`text-lg md:text-xl font-bold mb-1 ${item.highlighted ? 'text-red-700' : 'text-gray-900'}`}>
                        {item.category}
                      </h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <div className={`text-2xl md:text-3xl font-black ${item.highlighted ? 'text-red-600' : 'text-gray-900'}`}>
                      {item.amount}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation delay={400}>
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Financing Options Available</h4>
                    <p className="text-blue-800 text-sm">
                      We have partnerships with leading banks and NBFCs offering franchise financing at competitive rates. Our team can assist with business plan preparation and loan application support.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Revenue Streams Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Multiple <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Revenue Streams</span>
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Diversify your income with 8+ proven revenue channels. Our franchisees generate income from various sources, reducing dependency on single revenue stream.
                </p>
                <div className="space-y-3">
                  {revenueStreams.map((stream, index) => (
                    <ScrollAnimation key={index} delay={index * 80}>
                      <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                        <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{stream}</span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">What's Included in Support</h3>
                <div className="space-y-4">
                  {supportIncludes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-400" />
                      </div>
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Franchise <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Requirements</span>
              </h2>
              <p className="text-lg text-gray-600">
                Here's what you need to become a franchisee partner.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {franchiseRequirements.map((req, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 text-center border border-red-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4">
                    <req.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{req.title}</h3>
                  <p className="text-sm text-gray-700">{req.detail}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Franchise <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Process</span>
              </h2>
              <p className="text-lg text-gray-600">
                A step-by-step journey from inquiry to grand opening in 6 months.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-8 top-12 h-[calc(100%-96px)] w-1 bg-gradient-to-b from-red-500 to-orange-500"></div>

              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <ScrollAnimation key={index} delay={index * 80}>
                    <div className="flex items-start gap-6">
                      <div className="hidden md:flex h-16 w-16 rounded-full bg-gradient-to-br from-red-600 to-orange-600 items-center justify-center flex-shrink-0 shadow-lg z-10">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                            {step.timeline}
                          </span>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Questions</span>
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our franchise opportunity.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 80}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Form Section */}
      <section id="inquiry-form" className="section-padding bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Begin?</span>
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Take the first step towards owning a successful fitness franchise. Our franchise development team is ready to guide you through the entire process.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Call Us</h4>
                      <a href="tel:+918421517771" className="text-white/80 hover:text-white transition-colors">
                        +91 84215 17771
                      </a> / <a href="tel:+918275929556" className="text-white/80 hover:text-white transition-colors">
                        +91 82759 29556
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email Us</h4>
                      <a href="mailto:franchise@vjfitness.com" className="text-white/80 hover:text-white transition-colors">
                        franchise@vjfitness.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                      <p className="text-white/80">
                        VJS Fitness Club<br />
                        Balewadi High Street, Pune 411045
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                      <p className="text-white/80">
                        Mon - Sat: 9:00 AM - 6:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <h4 className="font-bold text-white">Why Apply Today?</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      Limited territories available
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      Exclusive launch support
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      Free market analysis for your area
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-3">
              <ScrollAnimation delay={200}>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                    Franchise Inquiry Form
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Complete this form and our franchise development team will contact you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      {/* City */}
                      <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred City/Location *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                          placeholder="e.g., Mumbai, Bangalore"
                        />
                      </div>

                      {/* Investment Budget */}
                      <div>
                        <label htmlFor="investment" className="block text-sm font-semibold text-gray-700 mb-2">
                          Investment Capacity *
                        </label>
                        <select
                          id="investment"
                          name="investment"
                          value={formData.investment}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select Investment Range</option>
                          <option value="50L-75L">₹50 Lakhs - ₹75 Lakhs</option>
                          <option value="75L-1Cr">₹75 Lakhs - ₹1 Crore</option>
                          <option value="1Cr-1.5Cr">₹1 Crore - ₹1.5 Crore</option>
                          <option value="1.5Cr+">Above ₹1.5 Crore</option>
                        </select>
                      </div>

                      {/* Business Experience */}
                      <div>
                        <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                          Business Experience *
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select Experience Level</option>
                          <option value="No Prior Experience">No Prior Business Experience</option>
                          <option value="1-3 Years">1-3 Years in Business</option>
                          <option value="3-5 Years">3-5 Years in Business</option>
                          <option value="5+ Years">5+ Years in Business</option>
                          <option value="Fitness Industry">Experience in Fitness Industry</option>
                        </select>
                      </div>

                      {/* Property Status */}
                      <div>
                        <label htmlFor="propertyStatus" className="block text-sm font-semibold text-gray-700 mb-2">
                          Property Status
                        </label>
                        <select
                          id="propertyStatus"
                          name="propertyStatus"
                          value={formData.propertyStatus}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select Property Status</option>
                          <option value="Identified">Property Identified</option>
                          <option value="Need Help">Need Help Finding Property</option>
                          <option value="Under Negotiation">Under Negotiation</option>
                          <option value="Owned">Already Own Suitable Property</option>
                        </select>
                      </div>

                      {/* Timeline */}
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                          Expected Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all bg-white"
                        >
                          <option value="">When Do You Plan to Start?</option>
                          <option value="Immediate">Immediate (1-3 months)</option>
                          <option value="3-6 Months">3-6 Months</option>
                          <option value="6-12 Months">6-12 Months</option>
                          <option value="Exploring">Just Exploring</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your background, why you're interested in our franchise, and any specific questions you have..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full py-4 px-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting Application...
                          </span>
                        ) : (
                          <>
                            Submit Franchise Inquiry
                            <ArrowRight size={20} />
                          </>
                        )}
                      </button>
                    </div>

                    {formStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Application Submitted Successfully!</h4>
                          <p className="text-sm">
                            Thank you for your interest! Our franchise development team will review your application and contact you within 24 hours.
                          </p>
                        </div>
                      </div>
                    )}

                    {formStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
                        We could not submit your inquiry right now. Please try again in a moment.
                      </div>
                    )}

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to be contacted by VJS Fitness Club regarding franchise opportunities. Your information will be kept confidential.
                    </p>
                  </form>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Your Fitness Empire?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
              Join our successful franchise network and be part of India's growing fitness revolution. Limited territories available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Apply for Franchise
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+918421517771"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Phone size={20} />
                Call: +91 84215 17771
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Franchise;
