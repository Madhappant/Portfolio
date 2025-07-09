import React, { useState } from 'react';
import { ExternalLink, Github, Database, Smartphone, ShoppingCart, BookOpen } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'NFT Marketplace',
      description: 'A complete NFT marketplace built with React, Node.js, and blockchain integration. Features include minting, trading, and wallet connectivity.',
      icon: ShoppingCart,
      tech: ['React', 'Node.js', 'MongoDB', 'Web3', 'Solidity'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/6954174/pexels-photo-6954174.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Admin Dashboard',
      description: 'Comprehensive admin dashboard with analytics, user management, and real-time data visualization. Built for scalability and performance.',
      icon: Database,
      tech: ['React', 'Express', 'MongoDB', 'Chart.js', 'Socket.io'],
      gradient: 'from-cyan-500 to-blue-500',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Workout Tracker App',
      description: 'Mobile-first fitness tracking application with progress monitoring, custom workouts, and social features for fitness enthusiasts.',
      icon: Smartphone,
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'Redux', 'JWT'],
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Library Management System',
      description: 'Digital library platform with book cataloging, user management, and automated lending system. Streamlines library operations.',
      icon: BookOpen,
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Mongoose'],
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    },
  ];

  return (
    <section id="projects" className="relative px-4 py-20 overflow-hidden sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-purple-900/10" />
      
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-transparent sm:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Showcase of my recent work demonstrating full-stack development expertise and modern web technologies
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] ${
                hoveredProject === index ? 'shadow-2xl shadow-cyan-500/20' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Project Icon */}
                <div className="absolute p-3 rounded-full top-4 right-4 bg-black/50 backdrop-blur-sm">
                  <project.icon size={24} className="text-white" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
                  <a
                    href={project.github}
                    className="p-3 transition-colors duration-200 rounded-full bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href={project.live}
                    className="p-3 transition-colors duration-200 rounded-full bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium text-gray-300 transition-colors duration-300 border border-gray-600 rounded-full bg-gray-700/50 group-hover:border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 transition-opacity duration-500 border-2 border-transparent opacity-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 group-hover:opacity-100 -z-10" 
                   style={{ background: 'linear-gradient(90deg, transparent, transparent), linear-gradient(90deg, #00f5ff, #8b5cf6, #f97316)', backgroundClip: 'padding-box, border-box' }} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="relative px-8 py-4 font-semibold text-white transition-all duration-300 border border-gray-700 rounded-full group bg-gray-800/50 backdrop-blur-sm hover:border-cyan-400/50 hover:scale-105">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

