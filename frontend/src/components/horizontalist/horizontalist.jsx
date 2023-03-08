import React from 'react';

const HorizontalList = () => {
  return (
    <div className="flex overflow-x-scroll">
      <div className="flex-shrink-0 bg-gray-200 h-32 w-32"></div>
      <div className="flex-shrink-0 bg-gray-300 h-32 w-32"></div>
      <div className="flex-shrink-0 bg-gray-400 h-32 w-32"></div>
      <div className="flex-shrink-0 bg-gray-500 h-32 w-32"></div>
      <div className="flex-shrink-0 bg-gray-600 h-32 w-32"></div>
      <div className="flex-shrink-0 bg-gray-700 h-32 w-32"></div>
      <div className="flex-shrink-0 bg-gray-800 h-32 w-32"></div>
    </div>
  );
};

export default HorizontalList;
