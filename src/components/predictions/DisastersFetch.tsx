/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React from 'react'
// import FloodFetch from './FloodFetch';

interface DisastersFetchProps {
  disaster: string;

}
const floodProbablity = 93;
const droughtProbablity = 70;

  //push alert 
  setTimeout(() => {
    if (floodProbablity >= 90){
      axios.post('/api/alert', {
        alert: `The Chances of Flood ${floodProbablity}%`,
        description: `Flood is happending soon in your area.`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    } 
  
    if (droughtProbablity >= 90){
      axios.post('/api/alert', {
        alert: `The Chances of Drought ${droughtProbablity}%`,
        description: `Drought is happending soon in your area.`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
  
  }, 21600000);


    
  

    

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DisastersFetch: React.FC<DisastersFetchProps> = ({disaster}) => {

  return (
  <>
         {/* probability */}

         {disaster === 'Flood' ? (
        <div className="mt-5">
          <div className="w-full p-4 border border-red-600 bg-red-100 rounded-lg flex flex-row items-center justify-around text-red-700">
            <h1 className="text-sm">Chances of floods: <span className='font-bold'>{floodProbablity}%</span></h1>
            <p className="text-sm">Risk Type: <span className='font-bold'>High</span></p>
           
          </div>

           {/* flood chart   */}
           {/* <FloodFetch /> */}
        </div>
      ) : (
        <div className="mt-5">
          <div className="w-full text-white bg-red-600 rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">{droughtProbablity}%</h1>
          </div>
        </div>
      )}
  </>
  )
}

export default DisastersFetch
