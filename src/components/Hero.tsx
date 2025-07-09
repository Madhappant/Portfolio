import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-coral-100 to-coral-200 opacity-20"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-gray-900"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block mb-2">Madhappan T</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            MERN Stack Developer from Bengaluru, India
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build scalable, fast, and beautiful web experiences with modern technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 114, 94, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-coral-500 hover:bg-coral-600 rounded-full text-white font-semibold transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Explore Projects</span>
              <motion.div
                className="absolute inset-0 bg-coral-600 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: 'https://github.com/Madhappant', color: 'hover:text-gray-700' },
                { icon: Linkedin, href: 'https://linkedin.com/in/madhappan-t', color: 'hover:text-blue-600' },
                { icon: Mail, href: 'mailto:madhappandharman@gmail.com', color: 'hover:text-coral-500' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-500 transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-2 text-gray-500 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <MapPin size={16} />
            <span>Bengaluru, India</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm group-hover:text-coral-500 transition-colors duration-300">
            Scroll to explore
          </span>
          <ChevronDown size={24} className="text-coral-500 group-hover:text-coral-600 transition-colors duration-300" />
        </div>
      </motion.button>
    </div>
  );
};

export default Hero;