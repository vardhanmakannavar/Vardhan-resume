import React from 'react';
import Section from './Section';
import { EXPERIENCE, ICONS } from '../utils/constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience" className="bg-gray-50 dark:bg-slate-900/50">
      <div className="relative max-w-4xl mx-auto">
        {/* Animated Line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-700"
        ></motion.div>

        {EXPERIENCE.map((job, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12 relative pl-12 group"
          >
            {/* Timeline Dot */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1), type: "spring" }}
              className="absolute left-[13px] top-2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 bg-primary-500 shadow-md z-10"
            ></motion.div>
            
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{job.role}</h3>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mt-1">
                    <ICONS.Briefcase className="w-4 h-4 text-primary-500" />
                    <span>{job.company}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1">
                  <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold uppercase tracking-wider">
                    {job.period}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <ICONS.MapPin className="w-3 h-3" />
                    {job.location}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;