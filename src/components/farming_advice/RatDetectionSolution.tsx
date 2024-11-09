'use client';

import { getRatDetection } from '@/datacenter/rat_dectect';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ModuleTitle from '../ui/ModuleTitle';

const RatDetectionSolution = () => {
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
    <div>
      <div className="flex justify-between pb-3">
        <div>
          <div className="mb-3">
            <ModuleTitle title="Possible Solutions: " />
          </div>
        </div>
      </div>



      <div>
        {/* Recommendations  */}
        <p className=''>
          {
            data?.rat_detected === false ? (
              <>
                We&apos;ve conducted checks in the farming field, and currently, there are no signs of rats. We&apos;ll continue regular monitoring to ensure the area remains safe and free from pests
              </>
            ) : (
              <>
                To control rats in the farming field, start by maintaining cleanliness to reduce food sources and hiding spots. Use natural predators like barn owls by installing nesting boxes nearby. Try organic repellents like peppermint oil or garlic sprays around the crops. Setting up traps is also effective; place them strategically near rat burrows. Consider placing physical barriers like wire mesh around plant beds to prevent access. Additionally, secure stored grains tightly. Avoid excessive use of poisons as they can harm other wildlife and soil health. Regular monitoring and combining these methods will help keep the rat population under control.
              </>
            )
          }
        </p>

        {/* help route  */}
        <Link href="/dashboard/help">
          <div className="cursor-pointer text-xs bg-green-50 border border-secondary py-3 px-3 rounded-md mt-4">
            Ask more help here:{' '}
            <Link href="/dashboard/help" className="font-bold text-primary">
              Help Center
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RatDetectionSolution;
