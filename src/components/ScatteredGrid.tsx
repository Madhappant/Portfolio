import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../App';

interface ScatteredGridProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const ScatteredGrid: React.FC<ScatteredGridProps> = ({ projects, onProjectSelect }) => {
  // Crafto-style scattered positions with exact asymmetrical layout
  const positions = [
    { top: '5%', left: '8%', rotation: -3, scale: 1.1 },
    { top: '15%', right: '12%', rotation: 5, scale: 0.9 },
    { top: '45%', left: '5%', rotation: -2, scale: 1.0 },
    { top: '60%', right: '8%', rotation: 4, scale: 1.05 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="relative min-h-screen px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        className="text-center mb-20 pt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-900">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A collection of my recent work showcasing full-stack development expertise
        </p>
      </motion.div>

      {/* Desktop Scattered Layout */}
      <motion.div 
        className="relative max-w-7xl mx-auto hidden lg:block"
        style={{ minHeight: '800px' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => {
          const position = positions[index % positions.length];
          
          return (
            <motion.div
              key={project.id}
              className="absolute w-80 h-96 cursor-pointer group"
              style={{
                top: position.top,
                left: position.left,
                right: position.right,
              }}
              variants={itemVariants}
              initial={{ 
                rotate: position.rotation,
                scale: position.scale
              }}
              whileHover={{ 
                scale: 1.08, 
                rotate: 0,
                zIndex: 10,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              onClick={() => onProjectSelect(project)}
            >
              <div className="relative w-full h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Year Badge */}
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-coral-500 text-sm font-medium border border-coral-200"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {project.year}
                  </motion.div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-coral-500/90 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github size={20} className="text-white" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-coral-500 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-600 text-sm mb-4 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {project.stack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200 group-hover:border-coral-200 group-hover:bg-coral-50 group-hover:text-coral-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </motion.div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-coral-400 rounded-full opacity-60"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-coral-300 rounded-full opacity-50"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.9, 0.5]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    delay: index * 0.7
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Mobile Grid for smaller screens */}
      <div className="block lg:hidden mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={`mobile-${project.id}`}
              className="cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => onProjectSelect(project)}
            >
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group-hover:shadow-2xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-coral-500 text-sm font-medium border border-coral-200">
                    {project.year}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-coral-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScatteredGrid;