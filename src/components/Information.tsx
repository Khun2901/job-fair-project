'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import DeleteConfirmation from '@/components/modal/DeleteConfirmation';
import { useModel } from '@/hooks/useModel';

export default function Information({resultRef} : {resultRef: any}) {

    const router = useRouter();
    const covers = ['/scroll1.png', '/scroll2.png', '/scroll3.png', '/scroll4.png']
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            delay: 100,
        });
    }, []);

    return(
        
        <div ref={resultRef} data-aos='fade-right' className='relative block w-max-screen h-screen'
        onClick={(e)=>{setIdx(idx+1), e.stopPropagation()}}>
            
            <Image src={covers[idx % 4]} alt="background" fill={true} objectFit='cover' priority/>
            <div className="absolute inset-0 bg-gray-100 opacity-80 m-[12%] rounded-3xl"></div>
            <div className='relative top-[33%] z-20 text-center font-bold text-black
            px-10 md:px-20' >

                

                <h1 data-aos='fade-up' className='text-md md:text-xl xl:text-4xl 
                    mb-8 opcity-80 z-10'>
                        We're here to guide you on your beautiful journey.
                </h1>
                <h2 data-aos='fade-up' data-aos-delay='150'
                className='text-sm md:text-lg xl:text-xl mb-4 z-10'>
                    INTERNSHIP | APPRENTICESHIP | PART-TIME | FULL-TIME
                </h2>
                <h2 data-aos='fade-up' data-aos-delay='300' 
                className='text-sm md:text-lg xl:text-xl mb-4 z-10'>
                    Connect with us, browse over 100+ company around the world, and book your interviews here.
                </h2>
                <button className='w-auto text-[#111b47] bg-white border-[#111b47]
                    font-semibold text-[18px] py-1 px-10 rounded-lg mt-7 border-2 
                    hover:bg-[#111b47] hover:text-white' data-aos='fade-up' data-aos-delay='450'
                    onClick={(e)=>{router.push('/interview'), e.stopPropagation()}}
                    >
                    Book An Interview
                </button>
                
            </div>
            
        </div>
        
    )
}