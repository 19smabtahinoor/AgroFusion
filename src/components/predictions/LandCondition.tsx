import ModuleTitle from '@/components/ui/ModuleTitle';

const LandCondition = () => {
  const data = [
    { id: 1, title: 'Soil Moisture Content', value: '20%' },
    { id: 2, title: 'Soil Nutrient Levels', value: '73%' },
    { id: 3, title: 'Soil pH Level', value: '6.0' },
    { id: 4, title: 'Organic Matter', value: '89%' },
    { id: 5, title: 'Erosion Risk', value: '10%' },
  ];
  return (
    <div className="pl-4">
      <ModuleTitle title="Land Conditions" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
        {data?.map((item) => {
          return (
            <>
              <div
                key={item?.id}
                className="bg-green-50 flex flex-col items-center justify-center rounded-lg p-4"
              >
                <p className="text-slate-600 text-sm ">{item?.title}</p>
                <h1 className="text-4xl font-bold">{item?.value}</h1>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LandCondition;
