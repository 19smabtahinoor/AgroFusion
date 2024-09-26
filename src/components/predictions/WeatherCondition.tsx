import ModuleTitle from '../ui/ModuleTitle';
import ViewReportBtn from '../ui/ViewReportBtn';

const WeatherCondition = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <ModuleTitle title="Weather Conditions" />
        <ViewReportBtn />
      </div>
    </div>
  );
};

export default WeatherCondition;
