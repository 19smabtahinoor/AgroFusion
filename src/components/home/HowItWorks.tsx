import icons from '@/constants/menuIcons';
import Image from 'next/image';

export default function HowItWorks() {


  return (
    <div className=" mt-[300px] mb-[100px]">
      <div className="container pt-[50px]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">How It Works</h1>
          <p>
            A diagram about how the AgroFusion works!
          </p>
        </div>

        <div className="">
          <Image src={icons.diagram} alt="How It Works" className='hidden lg:block object-cover w-full mx-auto' />
          <Image src={icons.diagram_mobile} alt="How It Works" className='block lg:hidden object-cover w-full mx-auto' />
        </div>

        {/* button  */}
        <div className='flex flex-row justify-center'>
          <a href="https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/agrofusion/?tab=project" target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white py-2 px-4 text-sm rounded-full ">About AgroFusion</button>
          </a>
        </div>

      </div>
    </div>
  );
}
