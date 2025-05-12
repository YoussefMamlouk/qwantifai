'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800"
    >
      {submitSuccess ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-400 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="btn btn-primary"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          
          {submitError && (
            <div className="bg-red-900/20 border border-red-500 text-red-200 px-4 py-3 rounded mb-4">
              {submitError}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            >
              <option value="">Select a subject</option>
              <option value="Software Development">Software Development</option>
              <option value="AI Automation">AI Automation</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full btn btn-primary flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : 'Send Message'}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm; 