import Image from 'next/image'
import InteractCard from './InteractCard';
import Link from 'next/link';

export default function CompanyCard({ companyName, imgSrc }:{ companyName: string,  imgSrc:string}) {

    return (
        <InteractCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='companyimage' fill={true} className='object-cover rounded-t-lg shadow-md'/>
            </div>
            <div className='w-full text-center font-semibold h-[15%] p-[15px] relative'> {companyName} </div>
            
        </InteractCard>
    );
}