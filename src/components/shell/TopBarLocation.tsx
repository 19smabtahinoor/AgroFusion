import { useEffect, useState } from 'react';
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
  }, [longitude, latitude]);

  console.log(location);
  console.log(current);

  return (
    <div className="border border-slate-200 px-2 py-3 rounded-full flex flex-row items-center space-x-2">
      <FaLocationDot className="text-primary text-lg" />
      {current?.lat == 0 || current?.lon == 0 ? (
        <>
          <h1 className="text-xs">Location detecting...</h1>
        </>
      ) : (
        <>
          <h1 className="text-xs">
            {location?.suburb},{location?.city},{location?.country}
          </h1>
        </>
      )}
    </div>
  );
};

export default TopBarLocation;
