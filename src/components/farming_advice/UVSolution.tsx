'use client';

import Link from 'next/link';
// import { useState } from 'react';
// import Markdown from '../help/markdown';
import ModuleTitle from '../ui/ModuleTitle';
import Markdown from '../help/markdown';


type uvindextype = {
  uv: number;
  level: string;

}




function UVSolution({ uvindexarr }:{uvindexarr:uvindextype[]}) {

 
  const solution_Data = [
    {
      id: 1,
      state: 'UV_HIGH',
      solution: `
When UV levels exceed 6, it can negatively affect crops by damaging their cells, reducing photosynthesis, and impacting overall growth. To mitigate these effects, farmers can adopt several preventive measures:

 1. **Use of Shade Nets or Tunnels**
   - **Shade nets** can filter out excess UV radiation and protect plants from direct exposure. These nets come in different densities (ranging from 30% to 90% shade), allowing you to control the amount of light entering.
   - **Tunnels or greenhouses** with UV-blocking plastic coverings provide an additional layer of protection, particularly in areas with consistently high UV levels.

 2. **Apply Mulching**
   - Mulching the soil surface with organic materials (e.g., straw, leaves) or reflective mulches (e.g., silver polyethylene) helps reduce soil temperature and reflect excess sunlight away from plants, which can reduce the overall UV impact.

 3. **Grow UV-Tolerant Crop Varieties**
   - Some crops and plant varieties are naturally more resistant to UV stress. Choosing UV-tolerant or adapted varieties for high UV environments can reduce the risk of damage.

 4. **Increase Watering**
   - High UV levels can lead to more water evaporation and stress in plants. Adjusting irrigation schedules to ensure consistent moisture can help plants cope with UV-related stress.

 5. **Use of Anti-Stress Agents (Biostimulants)**
   - Applying **biostimulants** such as seaweed extracts, humic substances, or amino acids can enhance plants’ natural resistance to stressors like UV radiation by promoting stronger root development, better nutrient absorption, and improved stress tolerance.

 6. **Apply Protective Sprays**
   - **UV-blocking sprays** made from kaolin clay or other reflective materials can be applied to plant surfaces. These sprays reflect UV rays and reduce the amount of harmful radiation reaching the leaves.

 7. **Intercropping and Planting Dense Crops**
   - **Intercropping** or planting crops more densely can provide natural shade for plants. Tall plants can act as a barrier for lower-growing, more sensitive crops, reducing their direct UV exposure.

 8. **Monitor UV Index**
   - Use a **UV monitor** or refer to weather forecasts to track UV index levels daily. This allows you to implement protective measures when UV levels are expected to exceed the safe threshold.

By combining these strategies, farmers can effectively protect crops from harmful UV levels and sustain healthy yields despite high radiation levels.`,
    },
    {
      id: 2,
      state: 'UV_LOW',
      solution: `
**1.Low UV levels (below 3 UV index)**: Minimal effect on crops, potentially leading to less robust growth or lower production of protective compounds.

**2.Moderate UV levels (UV index of 3–6)**: Often beneficial as they can enhance crop hardiness, stress tolerance, and nutrient content without causing damage.

**3.High UV levels (UV index above 6):** May become detrimental, especially without adequate protective measures like shading or selective breeding for UV tolerance.
Optimal UV exposure depends on the crop species, geographic location, and existing adaptations to sunlight intensity.
preventive measures against UV (If level is over 6)

`,
    }
  ];
console.log(uvindexarr)

const filterUVindex = uvindexarr?.find((item) => item.level == "High");

  return (
    <div>
      <div className="flex justify-between pb-3">
        <div>
          <div className="mb-3">
            <ModuleTitle title="Possible Solutions: " />
          </div>
        </div>
      </div>

    

      {/* solution  */}
      <div>
      
              <div className="mt-6">

                {filterUVindex?.level == "High" ? (
                  <>
                    <div className="text-sm text-justify bg-red-200 p-4 rounded-md">
                      <Markdown text={solution_Data[0]?.solution} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-sm text-justify bg-green-200 p-4 rounded-md">
                      <Markdown text={solution_Data[1]?.solution} />
                    </div>
                  </>
                )}

              </div>
           
       


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

export default UVSolution;
