import React from 'react';
import { MapPin } from 'lucide-react';
import { LocationData } from '../types/waterQuality';
import { Card } from './ui/Card';

interface LocationCardProps {
  location: LocationData;
  isSelected: boolean;
  onClick: () => void;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location, isSelected, onClick }) => {
  return (
    <Card 
      className={`p-4 cursor-pointer transition-all ${
        isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <MapPin className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{location.name}</h3>
          <p className="text-sm text-gray-600">{location.riverSection}</p>
          <p className="text-xs text-gray-500 mt-1">{location.description}</p>
        </div>
      </div>
    </Card>
  );
};