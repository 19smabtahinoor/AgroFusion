import ModuleTitle from '../ui/ModuleTitle';
import ViewReportBtn from '../ui/ViewReportBtn';
import PestActivityLineChart from './PestActivityLineChart';
import SoilActivityState from './SoilActivityState';

const SoilActivity = () => {
  const soil_type = SoilActivityState(); 

  return (
    <>
      <div>
        <div className="flex justify-between pb-3">
          <div>
            <div className="mb-3">
              <ModuleTitle title="Soil Activity" />
            </div>
            <h1 className="text-lg">State: </h1>
          </div>
          <ViewReportBtn />
        </div>

        <div>
          <h1 className='text-xl text-gray'>{soil_type}</h1>
        </div>
      </div>
    </>
  );
};

export default SoilActivity;
