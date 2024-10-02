/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
// import FloodFetch from './FloodFetch';

interface DisastersFetchProps {
  disaster: string;

}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DisastersFetch: React.FC<DisastersFetchProps> = ({disaster}) => {

  return (
  <>
         {/* probability */}

         {disaster === 'Flood' ? (
        <div className="mt-5">
          <div className="w-full p-4 border border-red-600 bg-red-100 rounded-lg flex flex-row items-center justify-around text-red-700">
            <h1 className="text-sm">Chances of floods: <span className='font-bold'>40%</span></h1>
            <p className="text-sm">Risk Type: <span className='font-bold'>High</span></p>
           
          </div>

           {/* flood chart   */}
           {/* <FloodFetch /> */}
        </div>
      ) : (
        <div className="mt-5">
          <div className="w-full text-white bg-red-600 rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">70%</h1>
          </div>
        </div>
      )}
  </>
  )
}

export default DisastersFetch
