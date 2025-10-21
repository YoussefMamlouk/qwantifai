'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

// Components
import ServiceCard from '../components/ServiceCard';
import FeatureItem from '../components/FeatureItem';
import ContactForm from '../components/ContactForm';
import ValueCard from '../components/ValueCard';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Partners data
  const partners = [
    { name: "Partner 1", logo: "/images/partners/partner1.png" },
    { name: "Partner 2", logo: "/images/partners/partner2.png" },
    { name: "Partner 3", logo: "/images/partners/partner3.png" },
    { name: "Partner 4", logo: "/images/partners/partner4.png" },
    { name: "Partner 5", logo: "/images/partners/partner5.png" },
    { name: "Partner 6", logo: "/images/partners/partner6.png" },
    { name: "Partner 7", logo: "/images/partners/partner7.png" },
    { name: "Partner 8", logo: "/images/partners/partner8.png" },
  ];

  // Mission, Vision, Values data
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible, embracing new technologies and methodologies to deliver cutting-edge solutions.",
      icon: "lightbulb"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, maintaining the highest standards of quality and professionalism.",
      icon: "star"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals.",
      icon: "users"
    }
  ];

  return (
    <>
      {/* Hero Section with Large Logo and Background Image */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/backgrounds/home_background.webp)',
            filter: 'brightness(0.75)'
          }}
        ></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 z-10">
          <div className="particles-container">
            {isMounted && Array(20).fill(0).map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: Math.random() * 0.5 + 0.3,
                  scale: Math.random() * 0.6 + 0.2
                }}
                animate={{
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth
                  ],
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight
                  ]
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#0cc0df',
                  boxShadow: '0 0 10px 2px rgba(12, 192, 223, 0.7)'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Hero content with large logo */}
        <div className="relative z-20 flex flex-col items-center h-full px-4 md:px-8 lg:px-16" style={{ paddingTop: "calc(25vh - 80px)" }}>
          <motion.div
            style={{ opacity, scale }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-[18rem] h-[18rem] md:w-[26rem] md:h-[26rem] mx-auto"
                style={{ marginBottom: "-9rem" }}
              >
                <Image 
                  src="/images/logo.png"
                  alt="Quantifai Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="drop-shadow-[0_0_15px_rgba(12,192,223,0.5)]"
                  priority
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-200 mb-24 max-w-3xl mx-auto tracking-wide"
              >
                <span className="font-medium text-white">Smart Software.</span>
                <br />
                <span className="font-medium text-primary">Smarter Marketing.</span>
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4 z-10"
              >
                <Link 
                  href="#services" 
                  className="btn btn-primary text-lg px-8 py-4 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Our Services
                </Link>
                <Link 
                  href="#contact" 
                  className="btn btn-outline text-lg px-8 py-4 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request a Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-300 mb-2">Scroll to discover</span>
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section with 3D Cards */}
      <motion.section 
        id="services"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="section-padding py-32 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        
        <motion.div variants={fadeIn} className="text-center mb-20">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">What we do</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Our <span className="gradient-text">Services</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We provide comprehensive technology solutions to help businesses leverage the power of AI and digital innovation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ServiceCard 
            title="Software Development"
            description="Custom software solutions tailored to your business needs, from web applications to mobile apps and enterprise systems."
            icon="code"
          />
          <ServiceCard 
            title="AI Automation"
            description="Leverage the power of artificial intelligence to automate processes, gain valuable insights, and make data-driven decisions."
            icon="robot"
          />
          <ServiceCard 
            title="Digital Marketing"
            description="Strategic digital marketing campaigns to boost your online presence, engage your audience, and drive sustainable growth."
            icon="chart"
          />
        </div>
      </motion.section>

      {/* Our Work Section */}
      <motion.section 
        id="work"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-32 bg-dark relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        
        <motion.div variants={fadeIn} className="text-center mb-20">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Our <span className="gradient-text">Work</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore our latest projects and see how we've helped businesses achieve their digital transformation goals.
          </p>
        </motion.div>
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="glass-card overflow-hidden rounded-xl"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src="/images/projects/project1.jpg"
                  alt="E-commerce Platform"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">E-commerce Platform</h3>
                  <p className="text-primary text-sm">Web Development</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">A modern e-commerce solution with AI-powered product recommendations and seamless payment processing.</p>
                <Link href="#" className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group">
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-card overflow-hidden rounded-xl"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src="/images/projects/project2.jpg"
                  alt="AI Analytics Dashboard"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">AI Analytics Dashboard</h3>
                  <p className="text-primary text-sm">Data Visualization</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">Real-time analytics platform with predictive insights and customizable dashboards for data-driven decision making.</p>
                <Link href="#" className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group">
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card overflow-hidden rounded-xl"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src="/images/projects/project3.jpg"
                  alt="Mobile Banking App"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">Mobile Banking App</h3>
                  <p className="text-primary text-sm">Mobile Development</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">Secure and intuitive mobile banking application with biometric authentication and personalized financial insights.</p>
                <Link href="#" className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group">
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#contact" className="btn btn-primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision & Values Section */}
      <motion.section 
        id="mission"
        ref={missionRef}
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-32 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-dark/80 z-0"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(/images/backgrounds/mission-bg.jpg)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          {/* Mission */}
          <div className="text-center mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our purpose</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Mission & <span className="gradient-text">Vision</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 border-l-4 border-primary"
            >
              <h3 className="text-2xl font-bold mb-4 text-glow">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world. We are committed to delivering excellence through our expertise in software development, AI automation, and digital marketing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 border-r-4 border-primary"
            >
              <h3 className="text-2xl font-bold mb-4 text-glow">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading technology partner for businesses seeking digital transformation, recognized for our innovation, reliability, and the measurable impact we create. We envision a future where every organization can harness the full potential of technology to achieve extraordinary results.
              </p>
            </motion.div>
          </div>
          
          {/* Values */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">What drives us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Our <span className="gradient-text">Values</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              These core principles guide everything we do and define who we are as a company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
                icon={value.icon}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section with Animated Icons */}
      <motion.section 
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="section-padding py-32 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <motion.div variants={fadeIn} className="text-center mb-20">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why choose us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Our <span className="gradient-text">Approach</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We combine technical expertise with creative thinking to deliver exceptional results that exceed expectations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <FeatureItem 
            title="Cutting-Edge Technology"
            description="We stay at the forefront of technological advancements to provide innovative solutions that give your business a competitive edge."
          />
          <FeatureItem 
            title="Tailored Approach"
            description="Every solution is customized to meet your specific business requirements and goals, ensuring maximum impact and ROI."
          />
          <FeatureItem 
            title="Expert Team"
            description="Our team of experienced professionals brings diverse skills and deep expertise to solve even the most complex challenges."
          />
          <FeatureItem 
            title="Continuous Support"
            description="We provide ongoing support and maintenance to ensure your solutions remain effective and adapt to changing needs."
          />
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section 
        id="partners"
        ref={partnersRef}
        initial="hidden"
        animate={partnersInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-24 bg-dark relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our clients</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">They <span className="gradient-text">Trust Us</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              We're proud to work with leading companies across various industries.
            </p>
          </div>
          
          <div className="relative">
            {/* Partners logos slider */}
            <div className="flex overflow-hidden">
              <motion.div
                className="flex space-x-16 items-center"
                animate={{
                  x: [0, -1500],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  }
                }}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-40 h-24 relative bg-dark/50 p-4 rounded-lg glass-card">
                    <div className="w-full h-full relative">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Gradient overlays for smooth edge transitions */}
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-dark to-transparent z-10"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-dark to-transparent z-10"></div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section with Parallax */}
      <motion.section 
        id="contact"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-32 relative overflow-hidden"
      >
        <div 
          className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/images/backgrounds/cta-bg.jpg)'
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-dark to-dark/80 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Get in touch</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Ready to <span className="gradient-text">Transform</span> Your Business?</h2>
              <p className="text-gray-300 text-lg mb-10">
                Contact us today to discuss how Quantifai can help you achieve your digital goals and stay ahead in a rapidly evolving technological landscape.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <span className="text-gray-300">info@quantifai.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Visit Us</h3>
                    <span className="text-gray-300">123 Tech Street, Innovation City</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
} 