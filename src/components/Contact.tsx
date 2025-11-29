import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../utils/constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
        >
            Get In Touch
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          I am currently open to new opportunities in program management and AI transformation leadership. 
          Feel free to reach out.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex items-center gap-3 px-8 py-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-primary-500/50 transition-colors"
          >
             <span className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Email</span>
             <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-primary-400 transition-colors font-medium text-lg">
               {PERSONAL_INFO.email}
             </a>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex items-center gap-3 px-8 py-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl"
          >
             <span className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Location</span>
             <span className="text-white font-medium text-lg">{PERSONAL_INFO.location}</span>
          </motion.div>
        </div>

        <div className="flex justify-center gap-6 mb-12">
            {SOCIAL_LINKS.map((link, index) => (
              <motion.a 
                key={link.name}
                href={link.url} 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -5, backgroundColor: '#0ea5e9' }}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-gray-300 transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;