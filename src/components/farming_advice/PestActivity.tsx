import ModuleTitle from '../ui/ModuleTitle';
import ViewReportBtn from '../ui/ViewReportBtn';
import PestActivityLineChart from './PestActivityLineChart';

const PestActivity = () => {
  return (
    <>
      <div>
        <div className="flex justify-between pb-3">
          <div>
            <div className="mb-3">
              <ModuleTitle title="Pest Activity" />
            </div>
            <h1 className="text-lg">State: </h1>
          </div>
          <ViewReportBtn />
        </div>

        <PestActivityLineChart />
      </div>
    </>
  );
};

export default PestActivity;
