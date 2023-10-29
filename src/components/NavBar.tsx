'use client'
import Link from 'next/link'
import Image from 'next/image'
//will useRouter in future

export default function NavBar() {
    return(
        <div className='h-[75px] p-[9px] bg-blue-50 fixed top-0 inset-x-0 z-[30] border-b border-t flex flex-row'>
            
            <div className='grow flex flex-row justify-start gap-10 ml-[40px] place-items-center'>

                <Link href='/'><div>
                    Logo
                </div></Link>

                <Link href='/'><div>
                    Home
                </div></Link>

                <Link href='/company'><div>
                    Company
                </div></Link>

                <Link href='/interview'><div>
                    Interview
                </div></Link>

            </div>

            <div className='grow flex flex-row justify-end gap-10 mr-5 h-[100%] place-items-center'>

                <Link href='/interviewcart'>
                    <Image src='/bookingcart.png' width={30} height={30} alt='bookingcart'/>
                </Link>
                
                {/* session? */}
                <button className='border-[2px] border-[#000000] rounded-md px-4 py-1'>
                    Sign In or Register
                </button>

            </div>

        </div>
    )
}