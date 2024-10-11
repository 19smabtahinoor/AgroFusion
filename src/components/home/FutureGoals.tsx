import icons from '@/constants/menuIcons';
import Image from 'next/image';

export default function FutureGoals() {


  const teamData = [
    {
      title: 'Farm Central',
      description: 'Creating a place where farmers can easily access all the information they need, clearly presented and without unnecessary jargon.',
      image: icons.futureGoal1,
    },
    {
      title: 'Efficient, Low-Cost Agriculture',
      description: 'Building a low-cost system focused on boosting productivity, improving resource management, and reducing crop losses.',
      image: icons.futureGoal2,
    },
    {
      title: 'Optimizing Agriculture',
      description: 'Improving resource management, reducing pests and disease, and boosting crop yields to help ease the global food crisis and save resources for a better future.',
      image: icons.futureGoal3,
    },
    {
      title: 'Tech-Driven Food Security',
      description: 'Improving global food security by automating processes, making informed agricultural decisions, and enhancing management, all to create a better world.',
      image: icons.futureGoal4,
    },
  ];

  return (
    <div className="mb-[200px]">
      <div className="container pt-[100px]">
        <div className="text-center mb-20">
          <h1 className="text-3xl font-bold mb-2">Future Goals</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamData.map(({ title, image, description }) => (
            <div
              key={title}
              className="flex flex-col rounded-lg overflow-hidden shadow-md"
            >
              {/* img  */}
              <div className='h-48 overflow-hidden'>
                <Image className='object-cover' src={image} alt={title} />
              </div>

              {/* title */}
              <div className='flex flex-col items-center p-5'>
                <h1 className="text-lg font-bold text-primary mb-2 text-center lg:text-left">{title}</h1>
                <p className='text-justify text-sm text-slate-600'>{description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
