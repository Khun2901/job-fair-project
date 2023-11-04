'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function Hero() {

    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div>
            <div className='relative block p-[5px] w-max-screen h-screen'>
                <Image src={'/banner.png'} alt="background" fill={true} objectFit='cover' priority/>
                <div className='relative top-[25%] z-20 text-left max-w-[51%] px-10 md:px-20'>
                    <h1 className='text-md md:text-xl xl:text-4xl font-bold mb-2'>Intanuay Job Fair</h1>
                    <h2 className='text-sm md:text-lg xl:text-2xl font-semibold mb-4'>"Connecting Talent, Fueling Dreams"</h2>
                    <h3 className='text-sm md:text-md xl:text-lg font-serif text-justify'>A platform 
                    for you to take control of your future, gain practical experience, and learn from industry experts. 
                    Whether you're a student seeking internships, a fresh graduate looking for your first job, or a 
                    professional ready for a change, we're here to guide you on your beautiful journey.</h3>
                    <div className='flex justify-evenly gap-4'>
                        <button className='w-auto bg-[#111b47] text-white border-[#111b47]
                            font-semibold text-[18px] py-1 px-10 rounded-lg mt-10 border-2 
                            hover:bg-white hover:text-[#111b47] hover:border-[#111b47]'
                            onClick={(e)=>{e.stopPropagation(); router.push('/company')}}>
                            Browse Company
                        </button>
                        <button className='w-auto text-[#111b47] bg-white border-[#111b47]
                            font-semibold text-[18px] py-1 px-10 rounded-lg mt-10 border-2 
                            hover:bg-[#111b47] hover:text-white'
                            onClick={handleClick}>
                            Explore Our Campaign
                        </button>
                    </div>
                </div>
            </div>

            <div ref={ref} className='relative block w-max-screen h-screen' 
            >
                <Image src={'/scroll1.png'} alt="background" fill={true} objectFit='cover' priority/>
            </div>

        </div>
    );
}