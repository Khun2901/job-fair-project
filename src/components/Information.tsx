'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

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
            <div className='relative top-[33%] z-20 text-center text-white text-shadow-md 
            px-10 md:px-20'>
                <h1 data-aos='fade-up' className='text-md text-neutral-100 md:text-xl xl:text-4xl 
                font-bold mb-8 outline-4 drop-shadow-[0px_0px_35px_rgba(1,1,1,1)]'>
                    We're here to guide you on your beautiful journey.
                </h1>
                {/* <h2 data-aos='fade-up' data-aos-delay='100' 
                className='text-sm md:text-lg xl:text-xl font-semibold mb-4'>
                    - A student seeking for internships
                </h2>
                <h2 data-aos='fade-up' data-aos-delay='200' 
                className='text-sm md:text-lg xl:text-xl font-semibold mb-4'>
                    - A fresh graduate looking for your first job
                </h2>
                <h2 data-aos='fade-up' data-aos-delay='300' 
                className='text-sm md:text-lg xl:text-xl font-semibold mb-4'>
                    - A professional ready for a change
                </h2> */}
            </div>
        </div>
    )
}