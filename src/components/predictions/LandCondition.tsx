"use client"
import ModuleTitle from '@/components/ui/ModuleTitle';
import { getData } from "@/datacenter/esp32";
import { useEffect, useState } from 'react';

const LandCondition = () => {
  const [soilData, setSoilData] = useState<any>(null);

  //low turbidity means high water purity
  const waterPurity = 100-soilData?.Turbidity;

  //if moisture is 10%-- then dryness would be 90%.
  // moisture 0-10%-- very dry
  // moisture 90-100% --- very wet
  const soilDryness = 100-((soilData?.SoilMoisture1 + soilData?.SoilMoisture2)/2); 
  



  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setSoilData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [getData]);


  const data = [
    // { id: 1, title: 'Soil Moisture Content', value: '20%' },
    { id: 2, title: 'Soil Nutrient Levels', value: '73%' },
    { id: 4, title: 'Organic Matter', value: '89%' }, // If TDS is high, organic matter is low
    { id: 5, title: 'Soil Dryness', value: `${soilDryness}%` },
    { id: 6, title: 'Water Purity', value: `${waterPurity}%` },
  ];
  return (
    <div className="pl-4">
      <ModuleTitle title="Land Conditions" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
        {data?.map((item) => {
          return (
            <>
              <div
                key={item?.id}
                className="bg-green-50 flex flex-col items-center justify-center rounded-lg p-4"
              >
                <p className="text-slate-600 text-sm ">{item?.title}</p>
                <h1 className="text-4xl font-bold">{item?.value}</h1>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LandCondition;
