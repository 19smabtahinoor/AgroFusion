import { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { latitude, longitude } from '../../datacenter/LocationTrack';

const TopBarLocation = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [location, setLocation] = useState<any>({});

  useEffect(() => {
    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=6e6ddceb233743eb9fb3fcc4d111435d`
    )
      .then((response) => response.json())
      .then((result) => {
        setLocation(result?.features[0]?.properties);
      })
      .catch((error) => console.log('error', error));
  }, []);

  console.log(location);

  return (
    <div className="border border-slate-200 px-2 py-3 rounded-full flex flex-row items-center space-x-2">
      <FaLocationDot className="text-primary text-lg" />
      <h1 className="text-xs">
        {location?.suburb},{location?.city},{location?.country}
      </h1>
    </div>
  );
};

export default TopBarLocation;
