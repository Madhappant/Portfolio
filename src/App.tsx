import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import ScatteredGrid from './components/ScatteredGrid';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import './styles/globals.css';

export interface Project {
  id: string;
  title: string;
  stack: string[];
  description: string;
  year: string;
  image: string;
  details: string;
  features: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    stack: ['React', 'Node.js', 'MongoDB', 'Web3', 'Solidity'],
    description: 'Decentralized marketplace for NFT trading with wallet integration',
    year: '2024',
    image: 'https://images.pexels.com/photos/6954174/pexels-photo-6954174.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: 'A complete NFT marketplace built with MERN stack and blockchain integration. Features include minting, trading, and wallet connectivity with MetaMask.',
    features: [
      'Wallet connection with MetaMask',
      'Token minting functionality',
      'Animated frontend with Tailwind',
      'Smart contract integration',
      'Real-time price updates'
    ],
    github: '#',
    live: '#'
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    stack: ['React', 'Express', 'MongoDB', 'Chart.js'],
    description: 'Comprehensive admin panel with analytics and user management',
    year: '2023',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: 'Modern admin dashboard with JWT authentication, interactive charts, and sales data visualization.',
    features: [
      'JWT authentication system',
      'Interactive charts and graphs',
      'Sales data visualization',
      'User management system',
      'Real-time notifications'
    ],
    github: '#',
    live: '#'
  },
  {
    id: 'workout-tracker',
    title: 'Workout Tracker',
    stack: ['React', 'Node.js', 'MongoDB', 'Context API'],
    description: 'Personal fitness tracking app with progress monitoring',
    year: '2023',
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: 'MERN stack fitness application with user log tracking and React Context for state management.',
    features: [
      'User workout logging',
      'Progress tracking charts',
      'Exercise library',
      'Goal setting and monitoring',
      'Social sharing features'
    ],
    github: '#',
    live: '#'
  },
  {
    id: 'library-management',
    title: 'Library Management',
    stack: ['Node.js', 'MySQL', 'Express', 'EJS'],
    description: 'Digital library system with book cataloging and user management',
    year: '2022',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: 'Node.js and MySQL backend system with admin routes and comprehensive validation.',
    features: [
      'Book cataloging system',
      'User management',
      'Admin dashboard',
      'Search and filter functionality',
      'Automated notifications'
    ],
    github: '#',
    live: '#'
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <ParticleBackground />
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="projects" className="py-20">
          <ScatteredGrid 
            projects={projects} 
            onProjectSelect={setSelectedProject} 
          />
        </section>
        
        <section id="skills" className="py-20">
          <Skills />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;