import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';

export const QualityCard = ({
  title,
  value,
  unit,
  icon,
  status,
  description,
}) => {
  const statusConfig = {
    good: {
      colors: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
      label: 'Good',
      ringColor: 'ring-emerald-500',
    },
    moderate: {
      colors: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
      label: 'Moderate',
      ringColor: 'ring-amber-500',
    },
    poor: {
      colors: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      label: 'Poor',
      ringColor: 'ring-red-500',
    },
  };

  return (
    <Card className="p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-200 border border-sky-100 dark:border-sky-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-xl ${statusConfig[status].colors} ring-2 ${statusConfig[status].ringColor}`}>
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-sky-900 dark:text-sky-100">{title}</h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-sky-800 dark:text-sky-200">
                {value.toFixed(2)}
              </span>
              <span className="text-sky-600 dark:text-sky-400">{unit}</span>
            </div>
            {description && (
              <p className="text-sm text-sky-600 dark:text-sky-400 mt-1">{description}</p>
            )}
          </div>
        </div>
        <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusConfig[status].colors}`}>
          {statusConfig[status].label}
        </span>
      </motion.div>
    </Card>
  );
};