import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const customIcon = new Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const gangaRiver = {
  type: 'Feature',
  properties: {
    name: 'Ganga River',
    description: 'Main stream of the Ganges River'
  },
  geometry: {
    type: 'LineString',
    coordinates: [
      [78.2676, 30.0869], // Rishikesh
      [78.1642, 29.9457], // Haridwar
      [79.7200, 28.8000], // Moradabad
      [80.5000, 27.5000], // Approximate middle point
      [81.8300, 26.8500], // Lucknow region
      [82.9739, 25.3176], // Varanasi
      [84.6700, 25.7500], // Patna approach
      [85.1376, 25.5941], // Patna
      [87.0000, 24.5000], // Bhagalpur region
      [88.3639, 22.5726]  // Kolkata (end point)
    ]
  }
};

export const Map = ({ locations, selectedLocation, onLocationSelect }) => {
  const center = { lat: 27.5, lng: 81 };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full rounded-xl overflow-hidden shadow-lg border-4 border-sky-100 dark:border-sky-800"
    >
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* River Path */}
        <GeoJSON
          data={gangaRiver}
          style={{
            color: '#0ea5e9',
            weight: 4,
            opacity: 0.8,
            lineCap: 'round',
            lineJoin: 'round',
            dashArray: '1, 10',
            dashOffset: '0'
          }}
        />
        
        {/* River Buffer Zone */}
        <GeoJSON
          data={gangaRiver}
          style={{
            color: '#0ea5e9',
            weight: 12,
            opacity: 0.1,
            lineCap: 'round',
            lineJoin: 'round'
          }}
        />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.coordinates.lat, location.coordinates.lng]}
            icon={customIcon}
            eventHandlers={{
              click: () => onLocationSelect(location.id),
            }}
          >
            <Popup className="custom-popup">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-sky-800 dark:text-sky-200 mb-2">
                  {location.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-sky-600 dark:text-sky-400">
                      Section:
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {location.riverSection}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-sky-600 dark:text-sky-400">
                      Coordinates:
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {location.coordinates.lat.toFixed(4)}, {location.coordinates.lng.toFixed(4)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onLocationSelect(location.id)}
                  className="mt-3 w-full px-3 py-1.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.div>
  );
};