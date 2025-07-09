import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      href: '#'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'madhappandharman@gmail.com',
      href: 'mailto:madhappandharman@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 80723 60246',
      href: 'tel:+918072360246'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Madhappant'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/madhappan-t'
    }
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
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="group flex items-center space-x-4 p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-coral-300 hover:bg-coral-50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="p-3 bg-coral-100 rounded-lg group-hover:bg-coral-200 transition-colors duration-300">
                    <info.icon size={20} className="text-coral-500" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{info.label}</p>
                    <p className="text-gray-900 font-medium group-hover:text-coral-600 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-gray-900 font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="group p-4 bg-gray-100 hover:bg-coral-100 rounded-xl transition-all duration-300"
                  >
                    <social.icon size={24} className="text-gray-600 group-hover:text-coral-500 group-hover:scale-110 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-transparent focus:outline-none focus:border-coral-500 focus:bg-white transition-all duration-300"
                    placeholder="Your Name"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'name' || formData.name
                        ? '-top-2 text-xs text-coral-500 bg-white px-2'
                        : 'top-4 text-gray-500'
                    }`}
                    animate={{
                      y: focusedField === 'name' || formData.name ? -24 : 0,
                      scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                    }}
                  >
                    Your Name
                  </motion.label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-transparent focus:outline-none focus:border-coral-500 focus:bg-white transition-all duration-300"
                    placeholder="Your Email"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'email' || formData.email
                        ? '-top-2 text-xs text-coral-500 bg-white px-2'
                        : 'top-4 text-gray-500'
                    }`}
                    animate={{
                      y: focusedField === 'email' || formData.email ? -24 : 0,
                      scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                    }}
                  >
                    Your Email
                  </motion.label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-transparent focus:outline-none focus:border-coral-500 focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Your Message"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? '-top-2 text-xs text-coral-500 bg-white px-2'
                        : 'top-4 text-gray-500'
                    }`}
                    animate={{
                      y: focusedField === 'message' || formData.message ? -24 : 0,
                      scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                    }}
                  >
                    Your Message
                  </motion.label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full relative px-8 py-4 bg-coral-500 hover:bg-coral-600 rounded-xl text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <motion.span
                    className="relative z-10 flex items-center justify-center space-x-2"
                    animate={{
                      opacity: isSubmitted ? 0 : 1,
                      scale: isSubmitted ? 0.8 : 1,
                    }}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.span>
                  
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center space-x-2"
                    animate={{
                      opacity: isSubmitted ? 1 : 0,
                      scale: isSubmitted ? 1 : 0.8,
                    }}
                  >
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </motion.span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;