'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
import ServiceCard from '@/components/ServiceCard';
import FeatureItem from '@/components/FeatureItem';
import ContactForm from '@/components/ContactForm';

export default function Home() {
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
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="section-padding flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[90vh]"
      >
        <div className="lg:w-1/2">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={fadeIn}
          >
            Transforming Ideas into <span className="gradient-text">Digital Reality</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 mb-8"
            variants={fadeIn}
          >
            Quantifai delivers cutting-edge software development, AI automation, and digital marketing solutions to help your business thrive in the digital age.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={fadeIn}
          >
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </motion.div>
        </div>
        <motion.div 
          className="lg:w-1/2 relative"
          variants={fadeIn}
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-lg flex items-center justify-center">
              <div className="text-6xl font-bold text-white/20">Quantifai</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="section-padding bg-dark/50"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive solutions to help businesses leverage technology and achieve their goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Software Development"
            description="Custom software solutions tailored to your business needs, from web applications to mobile apps."
            icon="code"
          />
          <ServiceCard 
            title="AI Automation"
            description="Leverage the power of artificial intelligence to automate processes and gain valuable insights."
            icon="robot"
          />
          <ServiceCard 
            title="Digital Marketing"
            description="Strategic digital marketing campaigns to boost your online presence and drive growth."
            icon="chart"
          />
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="section-padding"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">Quantifai</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine technical expertise with creative thinking to deliver exceptional results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureItem 
            title="Cutting-Edge Technology"
            description="We stay at the forefront of technological advancements to provide innovative solutions."
          />
          <FeatureItem 
            title="Tailored Approach"
            description="Every solution is customized to meet your specific business requirements and goals."
          />
          <FeatureItem 
            title="Expert Team"
            description="Our team of experienced professionals brings diverse skills and deep expertise."
          />
          <FeatureItem 
            title="Continuous Support"
            description="We provide ongoing support and maintenance to ensure your solutions remain effective."
          />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        id="contact"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="section-padding bg-gradient-to-r from-dark to-dark/80"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to <span className="gradient-text">Transform</span> Your Business?</h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss how Quantifai can help you achieve your digital goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>info@quantifai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>123 Tech Street, Innovation City</span>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </motion.section>
    </>
  );
} 