import DiseaseControl from '@/components/farming_advice/DiseaseControl';
import DiseaseSolution from '@/components/farming_advice/DiseaseSolution';
import RatDetectionActivity from '@/components/farming_advice/RatDetectionActivity';
import RatDetectionSolution from '@/components/farming_advice/RatDetectionSolution';
import SoilActivity from '@/components/farming_advice/SoilActivity';
import SoilActivitySolution from '@/components/farming_advice/SoilActivitySolution';
import UVindexSituation from '@/components/farming_advice/UVindexSituation';
import PageTitle from '@/components/ui/PageTitle';
import getQuery from '@/lib/functions/FetchQuery';


export default async function page() {
  const { data: disease } = await getQuery('https://agro-fusion.vercel.app/api/disease/');


  return (
    <main className="lg:px-16">
      <PageTitle title="Farming Advice" />

      <div className="flex flex-col space-y-2 py-8">
        {/* UV Index  */}
        <UVindexSituation />

        {/* disease activity  */}
        <div className="grid grid-cols-1 xl:grid-cols-4">
          <div className="col-span-2 border-b border-slate-200 lg:px-10 lg:py-5">
            <DiseaseControl data={disease} />
          </div>
          <div className="col-span-2 border-l border-b border-slate-200 lg:px-10 lg:py-5 flex flex-col gap-y-10">
            <DiseaseSolution data={disease} />
          </div>
        </div>

           {/* rat detection  */}
           <div className="grid grid-cols-1 xl:grid-cols-4">
          <div className="col-span-2 border-b border-slate-200 lg:px-10 lg:py-5">
            <RatDetectionActivity />
          </div>
          <div className="col-span-2 border-l border-b border-slate-200 lg:px-10 lg:py-5 flex flex-col gap-y-10">
            <RatDetectionSolution />
          </div>
        </div>

        {/* SOIL  */}
        <div className="grid grid-cols-1 xl:grid-cols-4">
          <div className="col-span-2 lg:px-10 lg:py-5">
            <SoilActivity />
          </div>
          <div className="col-span-2 border-l  border-slate-200 lg:px-10 lg:py-5 flex flex-col gap-y-10">
            <SoilActivitySolution />
          </div>
        </div>
      </div>
    </main>
  );
}
