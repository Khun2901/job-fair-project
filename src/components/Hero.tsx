'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useSession } from 'next-auth/react'

export default function Hero() {

    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);
    const { data: session } = useSession()

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        
        <div>
            <div className='relative block p-[5px] max-w-screen h-screen'>
                <Image src={'/banner.png'} data-aos='fade-left'
                alt="background" fill={true} objectFit='cover' priority/>
                <div className='relative top-[25%] z-20 text-left max-w-[51%] px-10 md:px-20'>
                    <h1 className='text-md md:text-xl xl:text-4xl font-bold mb-2' 
                    data-aos='fade-up'>
                        Intanuay Job Fair
                    </h1>
                    <h2 className='text-sm md:text-lg xl:text-2xl font-semibold mb-4' 
                    data-aos='fade-up' data-aos-delay='100'>
                        "Connecting Talent, Fueling Dreams"
                    </h2>
                    <h3 className='text-sm md:text-md xl:text-lg font-serif text-justify' 
                    data-aos='fade-up' data-aos-delay='200'>
                        A platform where you can find a means to advance in your job, 
                        gain practical experience, and learn from industry experts. 
                    </h3>
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
                {
                    session? <div className='z-30 absolute mt-[6%] top-5 right-10 py-2 px-4 font-semibold text-black
                    text-xl rounded-md bg-slate-200 shadow-lg'>
                        Welcome, {session.user?.name}</div>:null
                }
            </div>


            <div ref={ref} className='relative block w-max-screen h-screen'>
                <Image src={'/scroll1.png'} data-aos='fade-right'
                alt="background" fill={true} objectFit='cover' priority/>
                <div className='relative top-[20%] z-20 text-center text-white text-shadow-md 
                px-10 md:px-20'>
                    <h1 data-aos='fade-up' className='text-md md:text-xl xl:text-4xl font-bold mb-8'>
                        We're here to guide you on your beautiful journey.
                    </h1>
                    <h2 data-aos='fade-up' data-aos-delay='100' 
                    className='text-sm md:text-lg xl:text-xl font-semibold mb-4'>
                        ✔ A student seeking for internships
                    </h2>
                    <h2 data-aos='fade-up' data-aos-delay='200' 
                    className='text-sm md:text-lg xl:text-xl font-semibold mb-4'>
                        ✔ A fresh graduate looking for your first job
                    </h2>
                    <h2 data-aos='fade-up' data-aos-delay='300' 
                    className='text-sm md:text-lg xl:text-xl font-semibold mb-4'>
                        ✔ A professional ready for a change
                    </h2>
                </div>
            </div>

        </div>
    );
}