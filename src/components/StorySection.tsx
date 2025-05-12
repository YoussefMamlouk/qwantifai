'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StorySectionProps {
  year: string;
  title: string;
  description: string;
  image: string;
  isLeft: boolean;
}

const StorySection = ({ year, title, description, image, isLeft }: StorySectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  
  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
      
      {/* Year marker */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 -top-5 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-24 h-10 bg-primary text-dark flex items-center justify-center rounded-full font-bold">
          {year}
        </div>
      </motion.div>
      
      {/* Content */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
        <motion.div 
          className={`${isLeft ? 'md:text-right' : ''}`}
          initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 50 : -50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative h-64 md:h-80 overflow-hidden rounded-lg"
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default StorySection; 