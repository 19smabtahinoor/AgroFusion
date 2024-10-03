'use client';

import Link from 'next/link';
import { useState } from 'react';
import Markdown from '../help/markdown';
import ModuleTitle from '../ui/ModuleTitle';

const DiseaseSolution = () => {
  const [state, setState] = useState('State1');

  const solution_Data = [
    {
      id: 1,
      state: 'State1',
      solution: `
**1. Identify the Pest**: Accurately identify the pest causing the infestation. Resources: pest identification guides, agricultural extension services, and pest-specific apps.

**2. Assess the Severity**: Determine the scale of infestation through visual inspection or traps. Resources: Sticky traps, pheromone traps, or professional pest assessment services.

**3. Sanitation and Prevention**: Eliminate potential breeding grounds by cleaning and removing debris. Seal entry points. Resources: Cleaning supplies, caulk, pest-proof containers, and weather stripping.

**4. Biological Control**: Introduce natural predators like ladybugs or parasitic wasps to control pest populations. Resources: Beneficial insect suppliers, biological control guides.

**5. Mechanical Control**: Use physical methods like hand-picking, trapping, or setting barriers. Resources: Row covers, traps, or hand-picking tools.

**6. Chemical Control (if needed)**: Apply pesticides, targeting specific pests. Opt for eco-friendly options first. Resources: Insecticide products, sprayers, protective gear.

**7. Monitor and Maintain**: Regularly check pest activity and adjust methods if necessary. Resources: Monitoring tools like pest trackers or follow-up inspections.

**8. Cost-Effective Strategy**: Prioritize biological and mechanical controls to reduce chemical use, saving costs. Use DIY traps or consult local agricultural services for affordable solutions.

`,
    },
    {
      id: 2,
      state: 'State2',
      solution: `
**1. Rotate Crops:** Regularly change the type of crops grown in a particular field to disrupt the life cycles of pests that specialize in certain plants.

**2. Use Resistant Varieties:** Plant pest-resistant crop varieties that are less likely to be attacked by insects, fungi, or viruses.

**3. Practice Proper Irrigation:** Water plants properly to avoid over-irrigation or waterlogging, as moist conditions can attract pests.

**4. Maintain Field Hygiene:** Remove plant debris, weeds, and other residues that may harbor pests, ensuring a clean growing environment.

**5. Use Biological Control:** Introduce natural predators or beneficial insects to control pest populations, such as ladybugs for aphids.

**6. Apply Organic Mulch:** Use organic materials like straw or wood chips to discourage pests from breeding and sheltering near the plants.

**7. Monitor and Trap Pests:** Regularly monitor crops for early signs of infestation and use traps to capture pests before they become a problem.

**8. Avoid Overuse of Pesticides:** Rotate or reduce pesticide use to prevent pests from developing resistance and harming beneficial organisms.

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

export default DiseaseSolution;
