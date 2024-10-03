import PestActivity from '@/components/farming_advice/PestActivity';
import PestActivitySolution from '@/components/farming_advice/PestActivitySolution';
import SoilActivity from '@/components/farming_advice/SoilActivity';
import SoilActivitySolution from '@/components/farming_advice/SoilActivitySolution';
import UVindexSituation from '@/components/farming_advice/UVindexSituation';
import PageTitle from '@/components/ui/PageTitle';


export default function page() {

  return (
    <main className="lg:px-16">
      <PageTitle title="Farming Advice" />

      <div className="flex flex-col space-y-2 py-8">
        {/* UV Index  */}
        <UVindexSituation />

        {/* pest activity  */}
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-2 border-b border-slate-200 px-10 py-5">
            <PestActivity />
          </div>
          <div className="col-span-2 border-l border-b border-slate-200 px-10 py-5 flex flex-col gap-y-10">
            <PestActivitySolution />
          </div>
        </div>

        {/* SOIL  */}
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-2 px-10 py-5">
            <SoilActivity />
          </div>
          <div className="col-span-2 border-l  border-slate-200 px-10 py-5 flex flex-col gap-y-10">
            <SoilActivitySolution />
          </div>
        </div>
      </div>
    </main>
  );
}
