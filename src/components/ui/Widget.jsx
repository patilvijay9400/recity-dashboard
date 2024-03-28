import React from 'react';

const Widget = ({ title, value, large, small }) => {
  const widthClasses = large
    ? 'col-span-2' 
    : small
    ? 'col-span-1'
    : 'col-span-1'; 


  return (
    <div className={`bg-white rounded-lg border-2 border-blue-300 mb-4 ${widthClasses}`}>
      <div className="text-center mb-4">
        <h2 className="text-white text-lg w font-bold bg-gradient-to-r from-blue-500 to-green-400 py-2 rounded-t-md">{title}</h2>
      </div>
      <div className="text-center mb-6">
        <h3 className="text-gray-800 text-5xl font-semibold">{value}</h3>
      </div>
    </div>
  );
};

export default Widget;
