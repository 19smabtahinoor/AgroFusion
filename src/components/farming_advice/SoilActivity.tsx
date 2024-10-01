import ModuleTitle from '../ui/ModuleTitle';
import ViewReportBtn from '../ui/ViewReportBtn';
import SoilActivityState from './SoilActivityState';

const SoilActivity = () => {
  const soil_type = SoilActivityState(); 

  return (
    <>
      <div>
        <div className="flex justify-between pb-3">
          <div>
            <div className="mb-3">
              <ModuleTitle title="Soil Type" />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center'>
        <div className="bg-primary flex flex-col items-center w-52 h-52 justify-center rounded-full p-4">
            <h1 className='text-3xl text-white'>{soil_type}</h1>
        </div>
        </div>
      </div>
    </>
  );
};

export default SoilActivity;
