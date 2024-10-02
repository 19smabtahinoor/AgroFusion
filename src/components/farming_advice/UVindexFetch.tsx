import getQuery from '@/lib/functions/FetchQuery';
import React from 'react';
import UVIndexChart from './UVIndexChart';
import { longitude, latitude } from '@/datacenter/LocationTrack';

interface UVindexFetchProps {

	uvindexarr: { uv: number; level: string }[];
  
  }

const UVindexFetch: React.FC<UVindexFetchProps> = async ({ uvindexarr }) => {
	const UVIndexData = await getQuery(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max&timezone=auto`);

	console.log(uvindexarr)

	return (
		<div>
			{/* current data   */}
			{/* <div className='py-6'>
           <h2 className='font-semibold'>Current Weather Situation</h2>
            <div className='flex flex-row items-center justify-between mt-2 p-4 border border-slate-300 rounded-xl'>
            <h2>Last Updated:  <span className='font-bold'>{formattedTime}</span></h2>
            <h2>Percipitation: <span className='font-bold'>{UVIndexData?.current?.precipitation}mm</span></h2>
            <h2>Rain:<span className='font-bold'> {UVIndexData?.current?.rain}mm</span></h2>
            </div> 
        </div>*/}

			<UVIndexChart UVIndexData={UVIndexData} uvindexarr={uvindexarr} />

		</div>
	);
};

export default UVindexFetch;
