import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, Code, MapPin } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineItems = [
    {
      year: '2024',
      title: 'Full Stack Developer',
      subtitle: 'Currently Learning TypeScript',
      description: 'Expanding expertise in type-safe development and advanced React patterns',
      icon: Code,
      type: 'learning',
      color: 'cyan'
    },
    {
      year: '2023',
      title: 'MERN Stack Certification',
      subtitle: 'Advanced Web Development',
      description: 'Completed comprehensive training in MongoDB, Express.js, React, and Node.js',
      icon: Award,
      type: 'certification',
      color: 'purple'
    },
    {
      year: '2022',
      title: 'Frontend Development Focus',
      subtitle: 'React & Modern JavaScript',
      description: 'Specialized in React ecosystem, Redux, and modern frontend development practices',
      icon: Code,
      type: 'milestone',
      color: 'orange'
    },
    {
      year: '2021',
      title: 'Bachelor\'s in Computer Science',
      subtitle: 'University Graduate',
      description: 'Graduated with focus on software engineering and web technologies',
      icon: GraduationCap,
      type: 'education',
      color: 'green'
    },
    {
      year: '2020',
      title: 'Started Web Development Journey',
      subtitle: 'First Line of Code',
      description: 'Began learning programming with HTML, CSS, and JavaScript fundamentals',
      icon: Code,
      type: 'milestone',
      color: 'cyan'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const scrollPercentage = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
      
      timelineRef.current.style.transform = `translateX(${-scrollPercentage * 200}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'from-cyan-400 to-cyan-500',
      purple: 'from-purple-400 to-purple-500',
      orange: 'from-orange-400 to-orange-500',
      green: 'from-green-400 to-green-500'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-cyan-900/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From first line of code to full-stack mastery - the continuous learning journey
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 transform -translate-y-1/2" />
            
            <div ref={timelineRef} className="flex items-center justify-between py-12 transition-transform duration-300">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center group">
                  {/* Timeline dot */}
                  <div className={`w-4 h-4 bg-gradient-to-r ${getColorClasses(item.color)} rounded-full mb-8 group-hover:scale-150 transition-all duration-300 relative z-10`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 rounded-full animate-pulse" />
                  </div>

                  {/* Content card */}
                  <div className="w-64 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl group-hover:border-cyan-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 bg-gradient-to-r ${getColorClasses(item.color)} rounded-lg`}>
                        <item.icon size={16} className="text-white" />
                      </div>
                      <span className={`text-sm font-bold bg-gradient-to-r ${getColorClasses(item.color)} bg-clip-text text-transparent`}>
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-3 font-medium">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative flex items-start space-x-4 group">
              {/* Timeline line */}
              {index < timelineItems.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-gray-600 to-gray-700" />
              )}
              
              {/* Timeline dot */}
              <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(item.color)} rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-all duration-300`}>
                <item.icon size={20} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl group-hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`text-lg font-bold bg-gradient-to-r ${getColorClasses(item.color)} bg-clip-text text-transparent`}>
                    {item.year}
                  </span>
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-cyan-400 text-sm mb-3 font-medium">
                  {item.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Location info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full">
            <MapPin size={16} className="text-cyan-400" />
            <span className="text-gray-400">Based in</span>
            <span className="text-white font-semibold">Bengaluru, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;