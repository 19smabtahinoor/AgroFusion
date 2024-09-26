import ModuleTitle from '../ui/ModuleTitle';

const GroundWaterPredict = () => {
  const data = [
    { id: 1, title: 'Amount of Water', value: '20%' },
    { id: 2, title: 'Water Run Off', value: '73%' },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center space-x-3">
      <div className="border-r border-slate-200 py-16 px-10">
        <ModuleTitle title="Groud-Water" />
      </div>

      {/* groundwater prediction */}
      <div className="flex flex-col lg:flex-row items-center space-x-10 px-12">
        {data?.map((item) => {
          return (
            <div
              key={item?.id}
              className="flex flex-col items-center space-y-1"
            >
              <div className="bg-primary flex flex-col items-center w-24 h-24 justify-center rounded-full p-4">
                <h1 className="text-xl text-white">{item?.value}</h1>
              </div>

              <p className="text-slate-500 text-sm ">{item?.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroundWaterPredict;
