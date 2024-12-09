import React from 'react';
import { motion } from 'framer-motion';
import { QualityCard } from './QualityCard';

interface AnimatedQualityCardProps extends React.ComponentProps<typeof QualityCard> {
  index: number;
}

export const AnimatedQualityCard: React.FC<AnimatedQualityCardProps> = ({ index, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <QualityCard {...props} />
    </motion.div>
  );
};