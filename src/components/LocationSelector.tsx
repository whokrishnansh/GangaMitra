import React from 'react';
import { MapPin } from 'lucide-react';
import { LocationData } from '../types/waterQuality';

interface LocationSelectorProps {
  locations: LocationData[];
  selectedLocation: string;
  onLocationChange: (locationId: string) => void;
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({
  locations,
  selectedLocation,
  onLocationChange,
}) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
      <MapPin className="text-blue-500" />
      <select
        value={selectedLocation}
        onChange={(e) => onLocationChange(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  );
};