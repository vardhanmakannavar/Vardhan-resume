import React from 'react';
import Section from './Section';
import { EDUCATION, CERTIFICATIONS, ICONS } from '../utils/constants';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white mb-8">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <ICONS.BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            Education
          </h3>
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">{edu.institution}</p>
                {edu.year && <p className="text-sm text-gray-500 mt-2">{edu.year}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white mb-8">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <ICONS.Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.03, backgroundColor: "rgba(var(--primary-500), 0.05)" }}
                className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] flex-shrink-0"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Education;