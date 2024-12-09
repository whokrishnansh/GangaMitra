import React from 'react';
import { Card } from './ui/Card';
import { MetricStatus } from '../types/waterQuality';

interface QualityCardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  status: MetricStatus;
  description?: string;
}

export const QualityCard: React.FC<QualityCardProps> = ({
  title,
  value,
  unit,
  icon,
  status,
  description,
}) => {
  const statusConfig = {
    good: {
      colors: 'bg-green-100 text-green-800',
      label: 'Good',
    },
    moderate: {
      colors: 'bg-yellow-100 text-yellow-800',
      label: 'Moderate',
    },
    poor: {
      colors: 'bg-red-100 text-red-800',
      label: 'Poor',
    },
  };

  return (
    <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-full ${statusConfig[status].colors}`}>
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                {value.toFixed(2)}
              </span>
              <span className="text-gray-600">{unit}</span>
            </div>
            {description && (
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
          </div>
        </div>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig[status].colors}`}>
          {statusConfig[status].label}
        </span>
      </div>
    </Card>
  );
};