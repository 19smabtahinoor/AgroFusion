"use client";
import { getRatDetection } from '@/datacenter/rat_dectect';
import { useEffect, useState } from 'react';
import ModuleTitle from '../ui/ModuleTitle';

const RatDetectionActivity = () => {

  interface RatDetectionData {
    rat_detected: boolean;
  }

  const [data, setData] = useState<RatDetectionData>({ rat_detected: false });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRatDetection();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [data]);


  return (
    <>
      <div>
        <div className="flex justify-between pb-3">
          <div>
            <div className="mb-3">
              <ModuleTitle title="Rat Detection" />
            </div>
          </div>
        </div>


        {/* details  */}
        <div className='flex flex-col space-y-4'>

          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl text-black'>{data?.rat_detected + ""}</h1>
          </div>






        </div>

      </div>
    </>
  );
};

export default RatDetectionActivity;
