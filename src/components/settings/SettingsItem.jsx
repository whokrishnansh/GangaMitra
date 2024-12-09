import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const SettingsItem = ({ item }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  const handleToggle = () => {
    if (item.id === 'theme') {
      toggleDarkMode();
    }
  };

  const isEnabled = item.id === 'theme' ? isDarkMode : item.value;

  return (
    <div className="flex items-center justify-between py-2">
      <label htmlFor={item.id} className="text-sm text-gray-700 dark:text-gray-300">
        {item.label}
      </label>
      <button
        id={item.id}
        type="button"
        className={`${
          isEnabled ? 'bg-sky-600' : 'bg-gray-200 dark:bg-gray-700'
        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900`}
        role="switch"
        aria-checked={isEnabled}
        onClick={handleToggle}
      >
        <span
          aria-hidden="true"
          className={`${
            isEnabled ? 'translate-x-5' : 'translate-x-0'
          } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
        />
      </button>
    </div>
  );
};