import ModuleTitle from '../ui/ModuleTitle';
import UVindexFetch from './UVindexFetch';

interface UVindexSituationProps {

  uvindexarr: { uv: number; level: string }[];

}

const UVindexSituation: React.FC<UVindexSituationProps> = ({ uvindexarr }) => {


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
        <UVindexFetch uvindexarr={uvindexarr} />
      </div>
    </>
  );
};

export default UVindexSituation;
