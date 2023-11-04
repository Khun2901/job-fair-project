import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import AuthButton from './AuthButton'
//will useRouter in future

export default async function NavBar() {

    const session = await getServerSession(authOptions)
    const userName = session?.user?.name

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
                
                {/* session? Recommend to duplicate sign-in and register button */}
                {session ? <AuthButton session={false}/> :<AuthButton session={true}/>}

            </div>

        </div>
    )
}