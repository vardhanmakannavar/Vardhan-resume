import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../utils/constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-white dark:bg-slate-800/50">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 flex justify-center"
        >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-[2rem] rotate-6 opacity-20 blur-lg"></div>
                <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[2rem] rotate-6 border border-gray-100 dark:border-slate-700 shadow-xl"></div>
                <img 
                    src="https://picsum.photos/seed/sagar/800/800" 
                    alt="Sagar Shah" 
                    className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 transform hover:-translate-y-2"
                />
            </div>
        </motion.div>
        
        <div className="w-full md:w-2/3">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Executive Summary
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
          >
            {PERSONAL_INFO.summary}
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "20 Years Experience", color: "bg-green-500" },
              { label: "$15M+ Portfolio Mgmt", color: "bg-blue-500" },
              { label: "AI & Cloud Transformation", color: "bg-purple-500" },
              { label: "Global Team Leadership", color: "bg-orange-500" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors shadow-sm"
              >
                  <div className={`w-3 h-3 rounded-full ${item.color} shadow-lg shadow-${item.color}/50`}></div>
                  <span className="font-semibold text-gray-700 dark:text-gray-200">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;