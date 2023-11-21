import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import  getUserProfile from '@/libs/getUserProfile'
import Link from 'next/link'
import Image from 'next/image'
import AuthButton from './AuthButton'

export default async function NavBar() {

    const session = await getServerSession(authOptions)
    const profile = session? await getUserProfile(session.user.token) : null

    return(
        <div className='w-screen h-[12%] p-[9px] bg-blue-50 fixed top-0 inset-x-0 z-30 border-b border-t flex flex-row'>
            
            <div className='grow flex flex-row justify-start gap-10 ml-[40px] place-items-center'>

                <Link href='/'>
                    <Image src='/logo.png' width={50} height={50} alt='logo'/>
                </Link>

                <Link href='/'><div className='hover:font-semibold hover:underline'>
                    Home
                </div></Link>

                <Link href='/company'><div className='hover:font-semibold hover:underline'>
                    Company
                </div></Link>

                <Link href='/interview'><div className='hover:font-semibold hover:underline'>
                    Interview
                </div></Link>

                {
                profile?.data.role === 'admin'?
                <Link href='/admin/manage-booking'><div className='hover:font-semibold hover:underline'>
                    Manage Bookings
                </div></Link>
                :
                null
                }

            </div>

            <div className='grow flex flex-row justify-end gap-5 mr-5 h-[100%] place-items-center'>

                {
                <Link href='/interviewcart' className='mr-5'>
                    <Image src='/bookingcart.png' width={30} height={30} alt='bookingcart'/>
                </Link>
                }
                
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
                <div>
                    {
                    session?
                    null
                    :
                    <AuthButton title='Register' pageLink='/register'/>
                    }
                </div>
                

            </div>

        </div>
    )
}