'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Hero() {

    const router = useRouter();

    return (
        <div className='relative block m-0 p-[5px] w-screen h-screen' >
            <Image src={'/banner.png'} alt="background" fill={true} objectFit='cover' priority/>
            <div className='relative top-[25%] z-20 text-left max-w-[51%] px-20'>
                <h1 className='text-4xl font-bold mb-2'>Intanuay Job Fair</h1>
                <h2 className='text-3xl font-semibold mb-4'>"Connecting Talent, Fueling Dreams"</h2>
                <h3 className='text-xl font-serif text-justify'>Our online Intanuay Job Fair is a platform 
                for you to take control of your future, gain practical experience, and learn from industry experts. 
                Whether you're a student seeking internships, a fresh graduate looking for your first job, or an 
                experienced professional ready for a change, we're here to guide you on your beautiful journey.</h3>
                <div className='flex justify-evenly'>
                    <button className='w-[200px] bg-[#111b47] text-white border-[#111b47]
                        font-semibold text-[18px] py-1 px-4 rounded-lg mt-10 border-2 
                        hover:bg-white hover:text-[#111b47] hover:border-[#111b47]'
                        onClick={(e)=>{e.stopPropagation(); router.push('/company')}}>
                        Browse Company
                    </button>
                    <button className='w-[200px] text-[#111b47] bg-white border-[#111b47]
                        font-semibold text-[18px] py-1 px-4 rounded-lg mt-10 border-2 
                        hover:bg-[#111b47] hover:text-white'
                        onClick={(e)=>{e.stopPropagation(); router.push('/interview')}}>
                        Interview Session
                    </button>
                </div>
            </div>

            
        </div>
    );
}