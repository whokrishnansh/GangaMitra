import React from 'react';
import { AlertTriangle, Info, Settings } from 'lucide-react';

const getIcon = (type) => {
  switch (type) {
    case 'alert':
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    case 'system':
      return <Settings className="h-5 w-5 text-purple-500" />;
    default:
      return <Info className="h-5 w-5 text-sky-500" />;
  }
};

export const NotificationItem = ({ notification }) => {
  return (
    <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          {getIcon(notification.type)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">
            {notification.title}
          </p>
          <p className="text-sm text-gray-500">
            {notification.message}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
};