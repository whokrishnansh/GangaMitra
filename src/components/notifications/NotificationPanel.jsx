import React from 'react';
import { motion } from 'framer-motion';
import { NotificationItem } from './NotificationItem';

const notifications = [
  {
    id: 1,
    title: 'High pH Level Alert',
    message: 'pH levels at Varanasi station exceeded normal range',
    time: '2 minutes ago',
    type: 'alert'
  },
  {
    id: 2,
    title: 'Water Quality Update',
    message: 'Daily water quality report is now available',
    time: '1 hour ago',
    type: 'info'
  },
  {
    id: 3,
    title: 'System Maintenance',
    message: 'Scheduled maintenance in 2 hours',
    time: '3 hours ago',
    type: 'system'
  }
];

export const NotificationPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-100 z-50"
    >
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <span className="text-sm text-sky-600 cursor-pointer hover:text-sky-700">
            Mark all as read
          </span>
        </div>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
      <div className="p-4 border-t border-gray-100">
        <button className="w-full text-sm text-sky-600 hover:text-sky-700 font-medium">
          View all notifications
        </button>
      </div>
    </motion.div>
  );
};