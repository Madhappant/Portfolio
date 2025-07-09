import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, Download } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      degree: 'B.E. Computer Science Engineering',
      institution: 'Sona College of Technology',
      period: '2021 – 2025',
      icon: GraduationCap
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Govt. Hr. Sec. School',
      period: '2018 – 2021',
      icon: GraduationCap
    }
  ];

  const certifications = [
    'Full Stack Development – Infosys Springboard',
    'MongoDB for Developers – MongoDB University',
    'React Basics – Meta',
    'JavaScript Algorithms – freeCodeCamp'
  ];

  const skills = [
    'React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'TypeScript', 'MySQL', 'Git'
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
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio and Skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="text-6xl text-coral-400/20 font-serif absolute -top-4 -left-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                "
              </motion.div>
              <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed italic pl-8">
                I'm Madhappan, a full-stack developer focused on MERN apps with 
                real-world scalability and UI precision.
              </blockquote>
            </div>

            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                I'm a dedicated full-stack developer with a passion for creating scalable, 
                efficient web applications. My journey in software development has been driven 
                by curiosity and a desire to solve real-world problems through technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently pursuing my B.E. in Computer Science Engineering, I've gained 
                hands-on experience in the MERN stack and am continuously expanding my 
                skill set with modern technologies like TypeScript and cloud platforms.
              </p>
            </div>

            {/* Skills Tags */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-coral-50 text-coral-600 rounded-full border border-coral-200 font-medium hover:bg-coral-100 transition-colors duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-coral-500 hover:bg-coral-600 text-white rounded-lg font-medium transition-colors duration-200"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.button>

            <motion.div
              className="flex items-center space-x-2 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <MapPin size={20} className="text-coral-500" />
              <span>Based in Bengaluru, India</span>
            </motion.div>
          </motion.div>

          {/* Education and Certifications */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <GraduationCap className="text-coral-500" />
                <span>Education</span>
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-coral-300 hover:bg-coral-50/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-coral-100 rounded-lg">
                        <edu.icon size={20} className="text-coral-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-gray-600 mb-2">{edu.institution}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Award className="text-coral-500" />
                <span>Certifications</span>
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-coral-50 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-coral-500 rounded-full" />
                    <span className="text-gray-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;