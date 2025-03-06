import React from 'react';

function LoadingScreen({ fullScreen = true, message = "Loading..." }) {
  return (
    <div className={`${fullScreen ? 'min-h-screen' : 'min-h-[400px]'} flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800`}>
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
        {/* Spinning ring */}
        <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
        {/* Center dot */}
        <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">{message}</p>
    </div>
  );
}

export default LoadingScreen; 