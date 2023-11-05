import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import AuthButton from './AuthButton'

export default async function NavBar() {

    const session = await getServerSession(authOptions)

    return(
        <div className='h-[12%] p-[9px] bg-blue-50 fixed top-0 inset-x-0 z-[30] border-b border-t flex flex-row'>
            
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

            <div className='grow flex flex-row justify-end gap-5 mr-5 h-[100%] place-items-center'>

                <Link href='/interviewcart' className='mr-5'>
                    <Image src='/bookingcart.png' width={30} height={30} alt='bookingcart'/>
                </Link>
                
                <div> 
                    {
                    session? 
                    <div>
                        <AuthButton title={`Sign-Out of ${session.user?.name}`} pageLink='/api/auth/signout'/>
                    </div>
                    :
                    <div>
                        <AuthButton title='Sign-In' pageLink='/api/auth/signin'/>
                    </div>
                    }
                </div>

                <AuthButton title='Register' pageLink='/api/auth/register'/>

            </div>

        </div>
    )
}