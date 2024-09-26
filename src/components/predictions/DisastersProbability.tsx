'use client';

import { useState } from 'react';
import ModuleTitle from '../ui/ModuleTitle';

const DisastersProbability = () => {
  const [disaster, setDisaster] = useState('Flood');

  return (
    <div>
      <div className="flex flex-row justify-between">
        <ModuleTitle title="Probability of disasters" />

        {/* buttotn */}
        <div className="flex flex-row items-center space-x-3">
          <button
            className={`${
              disaster == 'Flood'
                ? 'bg-primary text-white'
                : 'text-primary bg-white'
            } w-full px-4 py-2 text-xs font-medium cursor-pointer  rounded-md border border-primary `}
            onClick={() => setDisaster('Flood')}
          >
            Flood
          </button>
          <button
            className={`${
              disaster == 'Drought'
                ? 'bg-primary text-white'
                : 'text-primary bg-white'
            } w-full px-4 py-2 text-xs font-medium cursor-pointer rounded-md border border-primary `}
            onClick={() => setDisaster('Drought')}
          >
            Drought
          </button>
        </div>
      </div>

      {/* probability */}

      {disaster === 'Flood' ? (
        <div className="mt-5">
          <div className="w-36 h-36 text-white bg-red-600 rounded-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">40%</h1>
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <div className="w-36 h-36 text-white bg-red-600 rounded-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">70%</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisastersProbability;
