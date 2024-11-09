"use client";
import { getRatDetection } from '@/datacenter/rat_dectect';
import { useEffect, useState } from 'react';
import ModuleTitle from '../ui/ModuleTitle';

const RatDetectionActivity = () => {

  interface RatDetectionData {
    rat_detected: boolean;
  }

  const [data, setData] = useState<RatDetectionData>({ rat_detected: true });

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

          {
            data?.rat_detected === false ? (
              <p className='text-primary bg-green-200 px-3 py-2 rounded-md'>
                No rat activity detected in the field
              </p>
            ) : (
              <p className='text-red-700 bg-red-200 px-3 py-2 rounded-md'>
                Rat Found!
              </p>
            )
          }






        </div>

      </div>
    </>
  );
};

export default RatDetectionActivity;
