import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LocationData } from '../types/waterQuality';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  locations: LocationData[];
  selectedLocation: string;
  onLocationSelect: (locationId: string) => void;
}

export const Map: React.FC<MapProps> = ({ locations, selectedLocation, onLocationSelect }) => {
  const center = { lat: 27.5, lng: 81 }; // Center of the Ganges region

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={6}
      style={{ height: '400px', width: '100%', borderRadius: '0.5rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.coordinates.lat, location.coordinates.lng]}
          icon={defaultIcon}
          eventHandlers={{
            click: () => onLocationSelect(location.id),
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">{location.name}</h3>
              <p className="text-sm text-gray-600">{location.riverSection}</p>
              <p className="text-xs mt-1">{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};