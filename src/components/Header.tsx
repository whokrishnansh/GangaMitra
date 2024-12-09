import React from 'react';
import { Activity } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Activity className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Ganga Water Quality Monitor</h1>
              <p className="text-sm text-gray-600">Real-time monitoring and analysis system</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Last sync</div>
            <div className="text-base font-medium text-gray-900">
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};