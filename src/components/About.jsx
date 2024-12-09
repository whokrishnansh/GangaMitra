import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Users, LineChart, Shield, Globe, Heart } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: <Droplets className="h-6 w-6 text-sky-500" />,
      title: 'Real-time Monitoring',
      description: 'Continuous tracking of water quality parameters across multiple locations along the Ganges River.'
    },
    {
      icon: <LineChart className="h-6 w-6 text-sky-500" />,
      title: 'Advanced Analytics',
      description: 'Sophisticated data analysis tools providing insights into water quality trends and patterns.'
    },
    {
      icon: <Shield className="h-6 w-6 text-sky-500" />,
      title: 'Early Warning System',
      description: 'Proactive alerts for potential water quality issues to enable timely interventions.'
    },
    {
      icon: <Globe className="h-6 w-6 text-sky-500" />,
      title: 'Environmental Impact',
      description: 'Contributing to the preservation of the Ganges ecosystem through informed decision-making.'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Aisha Sharma',
      role: 'Lead Scientist',
      image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=400&fit=crop'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya Patel',
      role: 'Environmental Analyst',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-sky-900 dark:text-sky-100 sm:text-5xl md:text-6xl"
            >
              Protecting the Sacred Ganges
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-sky-600 dark:text-sky-400"
            >
              Leveraging technology to monitor, analyze, and preserve the water quality of India's holiest river.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-16 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sky-900 dark:text-sky-100">Our Mission</h2>
            <p className="mt-4 text-lg text-sky-600 dark:text-sky-400">
              Empowering environmental conservation through data-driven insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-6 bg-sky-50 dark:bg-gray-700 rounded-xl"
              >
                <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sky-600 dark:text-sky-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sky-900 dark:text-sky-100">Our Team</h2>
            <p className="mt-4 text-lg text-sky-600 dark:text-sky-400">
              Dedicated experts working towards a cleaner Ganges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100">
                  {member.name}
                </h3>
                <p className="text-sky-600 dark:text-sky-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="py-16 bg-sky-600 dark:bg-sky-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Together, we can make a difference in preserving the Ganges for future generations.
          </p>
          <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors">
            Get Involved
          </button>
        </div>
      </motion.section>
    </div>
  );
};