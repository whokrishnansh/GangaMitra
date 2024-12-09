import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const LocationSearch = ({ onSearch }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-sky-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-sky-200 dark:border-sky-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-gray-800 placeholder-sky-400 text-sky-900 dark:text-sky-100"
        placeholder="Search locations..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </motion.div>
  );
};