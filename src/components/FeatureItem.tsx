'use client';

import { motion } from 'framer-motion';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem = ({ title, description }: FeatureItemProps) => {
  return (
    <motion.div 
      whileHover={{ x: 5 }}
      className="p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-gray-400 pl-14">{description}</p>
    </motion.div>
  );
};

export default FeatureItem; 