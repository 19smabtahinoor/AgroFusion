import icons from '@/constants/menuIcons';
import Image from 'next/image';

export default function FutureGoals() {


  const teamData = [
    {
      title: 'Farm Central',
      description: 'Establishing a location where farmers can readily obtain all the information they require, presented effectively and without needless jargon',
      image: icons.futureGoal1,
    },
    {
      title: 'Efficient, Low-Cost Agriculture',
      description: 'Constructing a low-cost system with an emphasis on productivity and efficiency. ensuring that this approach improves resource management, increases crop productivity, and reduces losses',
      image: icons.futureGoal2,
    },
    {
      title: 'Optimizing Agriculture',
      description: 'Providing the greatest resource management, reducing disease and insect infestations, and increasing total crop output. ensuring that these methods are used to lessen the world food issue. With a goal of saving resources  to make the world a better place.',
      image: icons.futureGoal3,
    },
    {
      title: 'Tech-Driven Food Security',
      description: 'Ensuring the improvement of global food security by utilizing the initiative to automate processes, make educated decisions about agriculture, and improve management. Using this, we aim to improve the world.',
      image: icons.futureGoal4,
    },
  ];

  return (
    <div className=" mt-48 mb-[100px]">
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
                <p className='text-justify text-xs text-slate-500'>{description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
