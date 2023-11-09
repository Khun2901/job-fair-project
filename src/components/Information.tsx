'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Information({resultRef} : {resultRef: any}) {
    const router = useRouter();

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return(
        <div ref={resultRef} className='relative block w-max-screen h-screen'>
            <Image src={'/scroll1.png'} data-aos='fade-right'
            alt="background" fill={true} objectFit='cover' priority/>
            <div className='relative top-[20%] z-20 text-center text-white text-shadow-md 
            px-10 md:px-20'>
                <h1 data-aos='fade-up' className='text-md md:text-xl xl:text-4xl font-bold mb-8'>
                    We're here to guide you on your beautiful journey.
                </h1>
                <h2 data-aos='fade-up' data-aos-delay='100' 
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
                </h2>
            </div>
        </div>
    )
}