import React, { useState, useEffect } from 'react';
import { Droplets, Thermometer, Wind, Activity, Waves, Gauge, ArrowDown, Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedQualityCard } from './AnimatedQualityCard';
import { LocationCard } from './LocationCard';
import { Header } from './Header';
import { Map } from './Map';
import { Charts } from './Charts';
import { locations, generateMockData } from '../utils/mockData';
import { calculateStatus } from '../utils/statusCalculator';
import { generateTrendData } from '../utils/trendData';
import type { WaterQualityData, TrendData } from '../types/waterQuality';

export const Dashboard: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0].id);
  const [data, setData] = useState<WaterQualityData | null>(null);
  const [trendData, setTrendData] = useState<TrendData[]>([]);

  useEffect(() => {
    const newData = generateMockData(selectedLocation);
    setData(newData);
    setTrendData(prev => [...prev, { timestamp: newData.timestamp, value: newData.ph }].slice(-20));

    const interval = setInterval(() => {
      const newData = generateMockData(selectedLocation);
      setData(newData);
      setTrendData(prev => [...prev, { timestamp: newData.timestamp, value: newData.ph }].slice(-20));
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedLocation]);

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Monitoring Stations</h2>
              {locations.map((location) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  isSelected={location.id === selectedLocation}
                  onClick={() => setSelectedLocation(location.id)}
                />
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <Map
              locations={locations}
              selectedLocation={selectedLocation}
              onLocationSelect={setSelectedLocation}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatedQualityCard
                index={0}
                title="pH Level"
                value={data.ph}
                unit="pH"
                icon={<Droplets className="w-6 h-6" />}
                status={calculateStatus(data.ph, 'ph')}
                description="Measure of water acidity"
              />
              <AnimatedQualityCard
                index={1}
                title="Dissolved Oxygen"
                value={data.dissolvedOxygen}
                unit="mg/L"
                icon={<Wind className="w-6 h-6" />}
                status={calculateStatus(data.dissolvedOxygen, 'dissolvedOxygen')}
                description="Oxygen content in water"
              />
              <AnimatedQualityCard
                index={2}
                title="Temperature"
                value={data.temperature}
                unit="°C"
                icon={<Thermometer className="w-6 h-6" />}
                status={calculateStatus(data.temperature, 'temperature')}
                description="Water temperature"
              />
              <AnimatedQualityCard
                index={3}
                title="Turbidity"
                value={data.turbidity}
                unit="NTU"
                icon={<Waves className="w-6 h-6" />}
                status={calculateStatus(data.turbidity, 'turbidity')}
                description="Water clarity measure"
              />
              <AnimatedQualityCard
                index={4}
                title="Conductivity"
                value={data.conductivity}
                unit="µS/cm"
                icon={<Activity className="w-6 h-6" />}
                status={calculateStatus(data.conductivity, 'conductivity')}
                description="Electrical conductivity"
              />
              <AnimatedQualityCard
                index={5}
                title="Water Level"
                value={data.waterLevel}
                unit="m"
                icon={<Gauge className="w-6 h-6" />}
                status={calculateStatus(data.waterLevel, 'waterLevel')}
                description="Current water depth"
              />
              <AnimatedQualityCard
                index={6}
                title="Flow Rate"
                value={data.flowRate}
                unit="m³/s"
                icon={<ArrowDown className="w-6 h-6" />}
                status={calculateStatus(data.flowRate, 'flowRate')}
                description="Water flow velocity"
              />
              <AnimatedQualityCard
                index={7}
                title="Total Dissolved Solids"
                value={data.totalDissolvedSolids}
                unit="mg/L"
                icon={<Scale className="w-6 h-6" />}
                status={calculateStatus(data.totalDissolvedSolids, 'totalDissolvedSolids')}
                description="Dissolved matter concentration"
              />
            </div>

            <Charts
              data={trendData}
              parameter="pH Level"
              unit="pH"
            />
          </div>
        </div>
      </main>
    </div>
  );
};