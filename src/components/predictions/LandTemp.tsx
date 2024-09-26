import ModuleTitle from '@/components/ui/ModuleTitle';
import ViewReportBtn from '@/components/ui/ViewReportBtn';
import cloud from '@/icons/cloud.svg';
import Image from 'next/image';

const LandTemp = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <ModuleTitle title="Land Temperature" />
        <ViewReportBtn />
      </div>
      {/* temp  */}
      <div className="flex flex-col py-4">
        <div className="flex flex-row items-center space-x-2">
          {/* icon  */}
          <Image src={cloud} width={40} height={40} alt="Weather Type" />
          <h2 className="font-bold text-2xl">53°C</h2>
        </div>
        <p className="text-xs font-semibold text-red-600">Excessive Heat</p>
      </div>

      {/* charts  */}
    </div>
  );
};

export default LandTemp;
