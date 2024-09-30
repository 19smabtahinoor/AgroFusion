import ModuleTitle from '../ui/ModuleTitle';
import ViewReportBtn from '../ui/ViewReportBtn';
import GroundWaterLevelLineChart from './GroundWaterLevelLineChart';

const UVindexSituation = () => {
  return (
    <>
      <div>
        <div className="flex justify-between pb-3">
          <div>
            <div className="mb-3">
              <ModuleTitle title="UV Index" />
            </div>
            <h1 className="text-lg">Result: </h1>
          </div>
          <ViewReportBtn />
        </div>
        
        <GroundWaterLevelLineChart />
      </div>
    </>
  );
};

export default UVindexSituation;
