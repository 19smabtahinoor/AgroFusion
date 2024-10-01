import ModuleTitle from '../ui/ModuleTitle';
import UVindexFetch from './UVindexFetch';

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
        </div>
        <UVindexFetch />
      </div>
    </>
  );
};

export default UVindexSituation;
