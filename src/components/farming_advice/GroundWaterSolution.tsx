'use client';

import Link from 'next/link';
import { useState } from 'react';
import Markdown from '../help/markdown';
import ModuleTitle from '../ui/ModuleTitle';

const GroundWaterSolution = () => {
  const [state, setState] = useState('State1');

  const solution_Data = [
    {
      id: 1,
      state: 'State1',
      solution: `
**1. Assess Water Sources:** Identify reliable water sources like rivers, lakes, wells, or rainfall. Explore groundwater options by consulting with local experts to determine feasibility and sustainability.
      
**2. Implement Water Harvesting:**  Build rainwater harvesting systems like ponds, check dams, or underground tanks. Capture surface runoff to increase water storage during the rainy season.

**3. D evelop Irrigation Systems:**  Set up efficient irrigation methods such as drip or sprinkler systems to minimize water wastage. Ensure systems are adaptable for year-round use.

**4. Soil Management:**  Improve soil's water retention capacity by using organic matter like compost or mulch. Implement conservation tillage practices to reduce evaporation and soil erosion.

**5. Adopt Water-Efficient Crops:** Plant drought-resistant crops and use crop rotation to enhance soil health. This improves water utilization and reduces overall water demand.

**6. Install Sensors and Automation:** Use soil moisture sensors and automated irrigation systems to monitor and regulate water usage efficiently.

**7. Plan for Contingencies:** Store surplus water for dry periods and prepare backup systems like water tankers or borewells in case of unexpected shortages.

**8. Engage in Community Water Management:**  Collaborate with neighboring farms for shared water resources and collective management of local watersheds.`,
    },
    {
      id: 2,
      state: 'State2',
      solution: `
**1. Identify the plant/crop**: Determine the type of plant or crop you are inquiring about, as water requirements vary by species (e.g., tomatoes, wheat, or succulents).

**2. Stage of Growth**: Understand the plant's growth stage. Seedlings generally require more frequent watering than mature plants, while flowering or fruiting stages may need additional water.

**3. Soil Type**: Analyze the soil composition (e.g., clay, loam, or sandy). Different soils retain water differently, influencing how much and how often you should water the plant.

**4. Climate and Weather Conditions**: Consider the local climate (hot, dry, humid) and recent weather patterns. Hot and dry climates often demand more watering compared to cooler, wetter conditions.

**5. Watering Method**: Choose an efficient watering method, such as drip irrigation for consistent, deep watering or surface watering for quick hydration.

**6. Watering Frequency**: Schedule watering based on plant type and conditions, typically 1-3 times per week for most crops, adjusting based on rainfall and temperature.

**7. Water Cycle**: Understand the natural water cycle---evaporation, condensation, precipitation---affecting plant hydration, especially in rain-fed agriculture.

**8. Monitor Plant Health**: Regularly check the plant's leaves and soil moisture to adjust watering practices accordingly. Signs of over- or under-watering help fine-tune irrigation.

`,
    },
    {
      id: 3,
      state: 'State3',
      solution: `
**1. Test Water Quality**: Begin by testing the water source to determine current TDS and turbidity levels. Regular testing ensures that interventions are working and helps identify problem areas.

**2. Identify Contamination Sources**: Look for potential sources of contamination, such as fertilizers, pesticides, livestock waste, or industrial runoff, and take steps to minimize their presence.

**3. Improve Drainage**: Ensure proper field drainage systems are in place to reduce sediment and contaminants flowing into water sources.

**4. Implement Buffer Zones**: Plant vegetation buffers (e.g., grasses, trees) around water bodies to trap sediment, nutrients, and pollutants before they enter water sources.

**5. Use Efficient Irrigation**: Adopt drip irrigation or other low-water usage methods to prevent overwatering and reduce nutrient runoff into water systems.

**6. Install Sediment Traps**: Set up sedimentation ponds or traps to allow solids to settle out before water reaches irrigation or storage systems.

**7. Adopt Organic Farming**: Shift towards organic fertilizers and pest control to reduce the input of chemicals that contribute to high TDS.

**8. Maintain Equipment**: Regularly service irrigation and filtration equipment to ensure optimal performance in reducing turbidity and TDS levels.

`,
    },
    {
      id: 4,
      state: 'State4',
      solution: `
**1. Drip Irrigation**: Install drip irrigation systems that deliver water directly to plant roots, minimizing waste and evaporation. It's cost-effective over time, saving up to 50% of water compared to traditional systems.

**2. Rainwater Harvesting**: Set up rainwater collection systems to capture and store rainwater for irrigation. It reduces dependence on groundwater and can be inexpensive with basic storage tanks.

**3. Mulching**: Apply organic or synthetic mulch around plants to retain soil moisture, reduce evaporation, and suppress weeds. It's affordable and promotes healthy soil.

**4. Soil Moisture Sensors**: Use low-cost soil moisture sensors to monitor water needs accurately, preventing overwatering and ensuring efficient water use.

**5. Drought-Resistant Crops**: Plant drought-tolerant crops that require less water, reducing overall irrigation needs and ensuring productivity during dry periods.

**6. Scheduling Irrigation**: Water crops during cooler times (early morning or evening) to reduce evaporation. Timed irrigation systems can automate this, minimizing water loss.

**7. Gray Water Reuse**: Recycle household wastewater from baths and sinks for irrigation. It's a low-cost method, especially for small-scale farms.

**8. Terracing and Contour Farming**: Create terraces or contour lines to slow water runoff and increase water retention in sloped areas, promoting efficient water usage.

`,
    },
  ];

  return (
    <div>
      <div className="flex justify-between pb-3">
        <div>
          <div className="mb-3">
            <ModuleTitle title="Possible Solutions: " />
          </div>
        </div>
      </div>

      {/* tabs  */}
      <div>
        <div className="flex flex-row items-center space-x-2">
          <div
            className={`${
              state == 'State1'
                ? 'bg-primary text-white'
                : 'text-primary bg-white'
            } w-full px-4 py-3 text-xs font-medium cursor-pointer  rounded-md border border-primary `}
            onClick={() => setState('State1')}
          >
            State1
          </div>

          <div
            className={`${
              state == 'State2'
                ? 'bg-[#FAD215] text-white'
                : 'text-[#FAD215] bg-white'
            } w-full px-4 py-3 text-xs font-medium cursor-pointer rounded-md border border-[#FAD215] `}
            onClick={() => setState('State2')}
          >
            State2
          </div>

          <div
            className={`${
              state == 'State3'
                ? 'bg-[#CE2029] text-white'
                : 'text-[#CE2029] bg-white'
            } w-full px-4 py-3 text-xs font-medium cursor-pointer rounded-md border border-[#CE2029] `}
            onClick={() => setState('State3')}
          >
            State3
          </div>
          <div
            className={`${
              state == 'State4'
                ? 'bg-[#2057ce] text-white'
                : 'text-[#2057ce] bg-white'
            } w-full px-4 py-3 text-xs font-medium cursor-pointer rounded-md border border-[#2057ce] `}
            onClick={() => setState('State4')}
          >
            State4
          </div>
        </div>
      </div>

      {/* solution  */}
      <div>
        {solution_Data
          ?.filter((item) => item?.state == state)
          ?.map((item) => (
            <div key={item.id} className="mt-6">
              <div className="text-xs text-justify">
                <Markdown text={item?.solution} />
              </div>
            </div>
          ))}

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

export default GroundWaterSolution;
