'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
import ServiceCard from '@/components/ServiceCard';
import FeatureItem from '@/components/FeatureItem';
import ContactForm from '@/components/ContactForm';
import StorySection from '@/components/StorySection';

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

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 opacity-70"></div>
        
        {/* Background image with parallax effect */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="/images/backgrounds/hero-bg.jpg"
              alt="Digital Technology Background"
              fill
              priority
              style={{ objectFit: 'cover' }}
              className="brightness-75"
            />
          </div>
        </div>
        
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
                  backgroundColor: '#00B7FF',
                  boxShadow: '0 0 10px 2px rgba(0, 183, 255, 0.7)'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Hero content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16">
          <motion.div
            style={{ opacity, scale }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            >
              <span className="gradient-text">Quantifai</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            >
              Transforming businesses through cutting-edge technology, AI solutions, and digital innovation
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#services" className="btn btn-primary text-lg px-8 py-4">Explore Our Services</a>
              <a href="#story" className="btn btn-outline text-lg px-8 py-4">Our Story</a>
            </motion.div>
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

      {/* Story Section */}
      <motion.section 
        id="story"
        ref={storyRef}
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-dark/80 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/images/backgrounds/story-bg.jpg"
            alt="Our Story Background"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">The <span className="gradient-text">Quantifai</span> Story</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              From humble beginnings to industry innovation, follow our path of growth and discovery.
            </p>
          </div>
          
          <div className="space-y-24">
            <StorySection 
              year="2018"
              title="The Beginning"
              description="Quantifai was founded with a vision to bridge the gap between complex technology and practical business solutions. Our journey began with a small team of passionate technologists."
              image="/images/backgrounds/story-1.jpg"
              isLeft={true}
            />
            
            <StorySection 
              year="2020"
              title="AI Innovation"
              description="We expanded our focus to artificial intelligence, developing proprietary algorithms and automation tools that revolutionized how businesses handle data and make decisions."
              image="/images/backgrounds/story-2.jpg"
              isLeft={false}
            />
            
            <StorySection 
              year="2022"
              title="Global Expansion"
              description="Our client base grew internationally as we established partnerships with industry leaders and expanded our team to include specialists from diverse technological backgrounds."
              image="/images/backgrounds/story-3.jpg"
              isLeft={true}
            />
            
            <StorySection 
              year="Today"
              title="Shaping the Future"
              description="Today, we continue to push the boundaries of what's possible, helping businesses transform and thrive in an increasingly digital world through innovative solutions and strategic guidance."
              image="/images/backgrounds/story-4.jpg"
              isLeft={false}
            />
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

      {/* CTA Section with Parallax */}
      <motion.section 
        id="contact"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-32 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/images/backgrounds/cta-bg.jpg"
            alt="Contact Background"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-30"
          />
        </div>
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