import React from 'react';
import Section from './Section';
import { SKILLS, ICONS } from '../utils/constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes("AI")) {
      return (
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-4 inline-block"
        >
          <ICONS.Cpu className="w-8 h-8 text-primary-500" />
        </motion.div>
      );
    }
    if (title.includes("Cloud")) {
      return (
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-4 inline-block"
        >
          <ICONS.Cloud className="w-8 h-8 text-blue-500" />
        </motion.div>
      );
    }
    if (title.includes("Tools")) {
      return (
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="mb-4 inline-block"
        >
          <ICONS.Terminal className="w-8 h-8 text-emerald-500" />
        </motion.div>
      );
    }
    return (
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="mb-4 inline-block"
      >
        <ICONS.Database className="w-8 h-8 text-purple-500" />
      </motion.div>
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section id="skills" title="Technical Skills">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SKILLS.map((category, index) => (
          <motion.div 
            key={index} 
            variants={item}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 group hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 rounded-bl-[100px] -mr-4 -mt-4 opacity-50 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-2xl mb-5 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-slate-700 transition-all duration-300 shadow-inner">
                {getIcon(category.title)}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <ul className="space-y-2.5 w-full">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-sm font-medium text-gray-600 dark:text-gray-300 py-1.5 border-b border-gray-50 dark:border-slate-700/50 last:border-0 flex items-center justify-center">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;