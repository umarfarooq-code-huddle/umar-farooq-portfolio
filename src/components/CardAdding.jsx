import React, { useState } from 'react';

export default function CardAdding(props) {

  return (
    <div className="ml-10 mr-12 mb-20 -mt-10 w-80 h-72 relative">
      {/* Card */}
      <div
        className="bg-white w-full h-full flex items-center justify-center rounded-lg text-6xl font-bold text-gray-500 dark:bg-neutral-700 cursor-pointer"
        // onClick={handlePlusClick}
        onClick={props.onClick}
      >
        +
      </div>



    </div>
  );
}
