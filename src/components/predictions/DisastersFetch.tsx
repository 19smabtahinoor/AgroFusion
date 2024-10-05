/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import FloodChart from './FloodChart';
import DroughtChart from './DroughtChart';
// import FloodFetch from './FloodFetch';

interface DisastersFetchProps {
  disaster: string;

}



 




// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DisastersFetch: React.FC<DisastersFetchProps> = ({disaster}) => {

  const [riverDischargeFlood, setRiverDischargeFloor] = useState<number[]>([])

  const maxRiverDischarge = Math.max(...riverDischargeFlood);
    //risk changes create 
    let floodriskChanges: string;   
    let droughtriskChanges: string;



//calculate the flood percentage======================

function calculateFloodPercentage(maxRiverDischarge: number) {
  const thresholdDischarge = 200;
  const exponent = 2;              
  
  if (maxRiverDischarge < thresholdDischarge) {
      return 0;
  }
  
  let floodPercentage = Math.pow((maxRiverDischarge / thresholdDischarge), exponent) * 10;

  // Cap the flood percentage at 100%
  if (floodPercentage > 100) {
      floodPercentage = 100;
  }
  
  return floodPercentage;
}

const floodPercentage = Math.round(calculateFloodPercentage(maxRiverDischarge)) ;

  // floods risk condition 
  if(floodPercentage >0 && floodPercentage <=40){
    floodriskChanges="Safe"

  }else if(floodPercentage >40 && floodPercentage <=90){
    floodriskChanges="Moderate"

  } else {
    floodriskChanges = "High";
  }


  //drought =======================================
//   const maxRelativeHumidity = droughtFetchData ? Math.max(...droughtFetchData.daily.relative_humidity_2m_max) : 0;
//   const maxTemp = droughtFetchData ? Math.max(...droughtFetchData.daily.temperature_2m_max) : 0;

// function calculateDroughtIndex(maxTemp:number, maxRelativeHumidity: number) {
//     const alpha = 1.5;  // Sensitivity of drought to temperature
//     const beta = 0.8;   // Sensitivity of drought to humidity
//     const referenceTemperature = 25; // Reference temperature (°C)

//     // Calculate drought index
//     const droughtIndex = alpha * (maxTemp - referenceTemperature) - beta * maxRelativeHumidity;
    
//     return droughtIndex;
// }


// const droughtPercentage = calculateDroughtIndex(maxTemp, maxRelativeHumidity);
const droughtPercentage = 10;


 //push alert 
 setTimeout(() => {
  if (floodPercentage >= 90){
    axios.post('/api/alert', {
      alert: `The Chances of Flood ${floodPercentage}%`,
      description: `Flood is happending soon in your area.`,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  } 

  if (droughtPercentage >= 90){
    axios.post('/api/alert', {
      alert: `The Chances of Drought ${droughtPercentage}%`,
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
     
  


  //drought risk condition 
  if(droughtPercentage >0 && droughtPercentage <=40){
    droughtriskChanges="Safe"

  }else if(droughtPercentage >40 && droughtPercentage <=90){
    droughtriskChanges="Moderate"
  }else{
    droughtriskChanges="High"

  }

  return (
  <>
         {/* probability */}

         {disaster === 'Flood' ? (
        <div className="mt-5">
          <div className={`w-full p-4  rounded-lg flex flex-row items-center justify-around ${floodriskChanges=="Safe" ? "text-green-700 border border-green-600 bg-green-100 ": floodriskChanges=="Moderate"?"border border-yellow-600 bg-yellow-100 text-yellow-700":"border border-red-600 bg-red-100 text-red-700"} `}>
            <h1 className="text-sm">Chances of floods: <span className='font-bold'>{floodPercentage}%</span></h1>
            <p className="text-sm">Risk Type: <span className='font-bold'>{floodriskChanges}</span></p>
           
          </div>

           {/* flood chart   */}
           <FloodChart setRiverDischargeFloor={setRiverDischargeFloor}/>
        </div>
      ) : (
        <div className="mt-5">
        <div className={`w-full p-4  rounded-lg flex flex-row items-center justify-around ${droughtriskChanges=="Safe" ? "text-green-700 border border-green-600 bg-green-100 ": droughtriskChanges=="Moderate"?"border border-yellow-600 bg-yellow-100 text-yellow-700":"border border-red-600 bg-red-100 text-red-700"} `}>
          <h1 className="text-sm">Chances of Droughts: <span className='font-bold'>{droughtPercentage}%</span></h1>
          <p className="text-sm">Risk Type: <span className='font-bold'>{droughtriskChanges}</span></p>
         
        </div>

         {/* drought chart   */}
         <DroughtChart 
         />
      </div>
      )}
  </>
  )
}

export default DisastersFetch
