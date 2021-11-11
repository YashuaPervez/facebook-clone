import React from 'react';

//
import { Settings } from '../icons';

const Navigation = () => {
  const button =
    'w-full h-14 mb-3 rounded-md flex items-center justify-start px-4 text-lg font-bold';
  return (
    <div className='flex flex-col items-start'>
      <button className={`bg-green-200 hover:bg-green-300 ${button}`}>
        <div className='mr-2'>
          <Settings size={7} />
        </div>
        Group
      </button>
      <button className={`bg-yellow-200 hover:bg-yellow-300 ${button}`}>
        <div className='mr-2'>
          <Settings size={7} />
        </div>
        Pages
      </button>
      <button className={`bg-blue-300 hover:bg-blue-400 ${button}`}>
        <div className='mr-2'>
          <Settings size={7} />
        </div>
        Videos
      </button>
      <button className={`bg-purple-300 hover:bg-purple-400 ${button}`}>
        <div className='mr-2'>
          <Settings size={7} />
        </div>
        MarketPlace
      </button>
    </div>
  );
};

export default Navigation;
