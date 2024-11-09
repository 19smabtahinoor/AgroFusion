import * as Tooltip from '@radix-ui/react-tooltip';
import { useEffect, useState } from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';
import { latitude, longitude } from '../../datacenter/LocationTrack';

const TopBarLocation = () => {
  interface LocationProperties {
    suburb?: string;
    city?: string;
    country?: string;
  }

  const [location, setLocation] = useState<LocationProperties>({});
  interface CurrentLocation {
    lat: number;
    lon: number;
  }

  const [current, setCurrent] = useState<CurrentLocation>({ lat: 0, lon: 0 });

  useEffect(() => {
    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=6e6ddceb233743eb9fb3fcc4d111435d`
    )
      .then((response) => response.json())
      .then((result) => {
        setLocation(result?.features[0]?.properties);
        setCurrent(result?.query);
      })
      .catch((error) => console.log('error', error));
  }, [latitude, longitude]);



  return (
    <div className="border border-slate-200 px-2 py-3 rounded-full flex flex-row items-center space-x-2">
      <FaLocationDot className="text-primary text-lg" />
      {current?.lat == 0 || current?.lon == 0 ? (
        <>
          <h1 className="text-xs">Location detecting...</h1>
        </>
      ) : (
        <div>


          <Tooltip.Provider>
            <div className="">
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className='flex flex-row items-center space-x-2 cursor-pointer'>
                    <h1 className="text-xs">
                      {location?.suburb},{location?.city},{location?.country}
                    </h1>
                    <FaInfoCircle className='text-slate-400 cursor-pointer' />
                  </div>

                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                    sideOffset={5}
                  >
                    This is our machine&apos;s location              <Tooltip.Arrow className="fill-white" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </div>
          </Tooltip.Provider>

        </div>
      )}
    </div>
  );
};

export default TopBarLocation;
