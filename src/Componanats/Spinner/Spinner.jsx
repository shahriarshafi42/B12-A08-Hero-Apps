import React from 'react';

const Spinner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="w-16 h-16 border-4 border-dashed border-purple-500 rounded-full animate-spin"></div>
      <p className="text-purple-600 font-medium text-lg">Loading...</p>
    </div>
    );
};

export default Spinner;