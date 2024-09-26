'use client';

import Link from 'next/link';
import { useState } from 'react';
import Markdown from '../help/markdown';
import ModuleTitle from '../ui/ModuleTitle';

const SoilActivitySolution = () => {
  const [state, setState] = useState('State1');

  const solution_Data = [
    {
      id: 1,
      state: 'State1',
      solution: `
**1.  Cleanliness:** Keep your home and surroundings clean and free of food crumbs, spills, and clutter. Regularly clean up pet food and water bowls.

**2.  Sanitation:** Dispose of garbage promptly and store food in airtight containers. This will prevent pests from finding food sources.

**3.  Seal Entry Points:** Caulk cracks and crevices around windows, doors, and pipes to prevent pests from entering your home.

**4.  Remove Moisture Sources:** Address leaks, humidity, and standing water. These conditions attract pests and create breeding grounds.

**5.  Natural Predators:** Encourage natural predators like birds, bats, and ladybugs to help control pest populations.

**6.  Plant Resistant Varieties:** Choose plants that are naturally resistant to pests. This can help reduce the need for chemical treatments.

**7.  Rotate Crops:** If you're gardening, rotate your crops to disrupt pest life cycles. This can prevent pests from becoming established.

**8.  Monitor for Pests:** Regularly inspect your home and garden for signs of pests. Early detection can help you address infestations before they become severe.


`,
    },
    {
      id: 2,
      state: 'State2',
      solution: `
## Understanding Soil pH:


**1.  Test:** Use a soil pH testing kit to accurately measure the pH level.

**2.  Identify Target pH:** Determine the ideal pH range for your specific crops.


## Addressing High pH: 


**3.  Lime Application:** Use agricultural lime (calcium carbonate) to neutralize acidity. 


**4.  Sulfur Amendment:** For more severe cases, elemental sulfur can be added to lower pH over time. 


**5.  Organic Matter:** Incorporate organic materials like compost or manure to improve soil structure and reduce pH. 


**6.  Crop Rotation:** Rotate crops to prevent nutrient depletion and maintain soil balance. 


**7.  Avoid Excessive Fertilizers:** Overuse of nitrogen fertilizers can contribute to high pH. 


**8.  Monitor and Adjust:** Regularly test soil pH and make adjustments as needed.


`,
    },
    {
      id: 3,
      state: 'State3',
      solution: `
**1.  Assess the Situation:** Determine the severity of the issue by measuring soil moisture and groundwater levels. Identify the cause of the decline, such as drought, excessive water usage, or soil compaction.


**2.  Conserve Water:** Implement water-saving practices like reducing outdoor watering, fixing leaks, and using efficient irrigation systems.


**3.  Improve Soil Health:** Add organic matter to the soil to improve its water-holding capacity. Consider using mulch to reduce evaporation.


**4.  Collect Rainwater:** Install rainwater harvesting systems to capture and store rainwater for later use.


**5.  Recharge Groundwater:** Create recharge basins or pits to allow rainwater to infiltrate the soil and replenish groundwater.


**6.  Consider Alternative Water Sources:** Explore options like treated wastewater or desalinated seawater if necessary.


**7.  Monitor and Adapt:** Continuously monitor soil moisture and groundwater levels to assess the effectiveness of your measures and make adjustments as needed.


**8.  Seek Professional Advice:** If the issue persists or is severe, consult with experts in soil science, hydrology, or agricultural engineering for guidance.


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
                ? 'bg-[#2057ce] text-white'
                : 'text-[#2057ce] bg-white'
            } w-full px-4 py-3 text-xs font-medium cursor-pointer rounded-md border border-[#2057ce] `}
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

export default SoilActivitySolution;
