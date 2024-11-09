import ModuleTitle from '@/components/ui/ModuleTitle';
import PageTitle from '@/components/ui/PageTitle';
import his_humdity from '@/icons/humidity.png';
import Image from 'next/image';
import Link from 'next/link';

const humidity_history = () => {
    return (
        <main className="lg:px-16">
            <Link href="/dashboard/field_overview">
                <PageTitle title="<- Back" />
            </Link>
            <div className="my-3">
                <ModuleTitle title="Relative Humidity History" />
            </div>

            <div className='py-8'>
                <Image src={his_humdity} alt="Humidity History" width="500" height="800" className='w-full h-auto object-contain' />
            </div>
        </main>
    );
};

export default humidity_history;