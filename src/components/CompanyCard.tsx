import Image from 'next/image'
import InteractCard from './InteractCard';

export default function CompanyCard({ companyName, imgSrc }:{ companyName: string,  imgSrc:string}) {

    return (
        <InteractCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='companyimage' fill={true} className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[15px] relative'>
                <div>{companyName}</div>
                
            </div>
        </InteractCard>
    );
}