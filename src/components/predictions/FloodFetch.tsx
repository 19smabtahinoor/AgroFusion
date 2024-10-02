import {longitude, latitude} from '../../datacenter/LocationTrack';

import React from 'react'
import getQuery from '@/lib/functions/FetchQuery';
import FloodChart from './FloodChart';


const FloodFetch: React.FC = async  () => {

    const floodData =await getQuery(`https://flood-api.open-meteo.com/v1/flood?latitude=${latitude}&longitude=${longitude}&daily=river_discharge`)
    

  return (
    <>
      <FloodChart floodData={floodData}/>
    </>
  )
}

export default FloodFetch
