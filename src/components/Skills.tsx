import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, BookOpen } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-coral-400 to-coral-500',
      skills: ['React.js', 'Redux', 'Tailwind CSS', 'Material-UI', 'Framer Motion']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-blue-400 to-blue-500',
      skills: ['Node.js', 'Express.js', 'REST API', 'JWT', 'Socket.io']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-green-400 to-green-500',
      skills: ['MongoDB', 'MySQL', 'Mongoose', 'Database Design', 'Aggregation']
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'from-purple-400 to-purple-500',
      skills: ['Git', 'Postman', 'Vercel', 'Netlify', 'VS Code']
    },
    {
      title: 'Learning',
      icon: BookOpen,
      color: 'from-orange-400 to-orange-500',
      skills: ['TypeScript', 'Next.js', 'GraphQL', 'Docker', 'AWS']
    }
  ];

  // Crafto-style scattered positions for skills
  const positions = [
    { top: '10%', left: '10%', rotation: -5 },
    { top: '15%', right: '15%', rotation: 8 },
    { top: '45%', left: '5%', rotation: -3 },
    { top: '60%', right: '10%', rotation: 6 },
    { top: '25%', left: '45%', rotation: -2 },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-900">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Floating Skill Bubbles - Desktop */}
        <div className="relative min-h-[600px] hidden lg:block">
          {skillCategories.map((category, categoryIndex) => {
            const position = positions[categoryIndex];
            
            return (
              <motion.div
                key={categoryIndex}
                className="absolute w-72 h-80"
                style={{
                  top: position.top,
                  left: position.left,
                  right: position.right,
                }}
                initial={{ 
                  opacity: 0, 
                  scale: 0.5,
                  rotate: position.rotation 
                }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: position.rotation 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: categoryIndex * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6 group hover:shadow-2xl transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}>
                      <category.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`} />
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating decorative elements */}
                  <motion.div
                    className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${category.color} rounded-full opacity-60`}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.9, 0.6]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: categoryIndex * 0.5
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Grid */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 group hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`} />
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;