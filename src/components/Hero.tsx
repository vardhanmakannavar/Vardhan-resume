import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../utils/constants';
import { Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  const roles = PERSONAL_INFO.roles || [PERSONAL_INFO.title];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, roleIndex]);

  const tick = () => {
    let i = roleIndex % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Pause at end
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setRoleIndex(roleIndex + 1);
      setDelta(100);
    } else if (!isDeleting && updatedText !== fullText) {
      setDelta(100); // Normal typing speed
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
             <span className="inline-block py-2 px-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-bold tracking-wide shadow-sm border border-primary-200 dark:border-primary-800">
               {PERSONAL_INFO.credentials} | {PERSONAL_INFO.status}
             </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 dark:from-primary-400 dark:via-blue-400 dark:to-indigo-400 animate-gradient-x">{PERSONAL_INFO.name}</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-16 mb-8 flex items-center justify-center"
          >
            <p className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 font-medium">
              I am a <span className="text-primary-600 dark:text-primary-400 font-bold">{text}</span>
              <span className="animate-pulse ml-1 text-primary-600 dark:text-primary-400">|</span>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/30 focus:ring-4 focus:ring-primary-500/30"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 font-semibold text-lg transition-all hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6"
          >
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-lg transition-all hover:-translate-y-1"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary-400/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;