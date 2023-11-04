"use client"

import { useRouter } from 'next/navigation'

export default function AuthButton({session}: {session: boolean}) {

    const router = useRouter()

    return (
        session ? <button className='border-[2px] border-[#000000] rounded-md px-4 py-1
        hover:bg-blue-600 hover:text-white hover:border-blue-600'
        onClick={(e) => {e.stopPropagation(); router.push('/api/auth/signin')}}>
            Sign In or Register
        </button>  
        : <button className='border-[2px] border-[#000000] rounded-md px-4 py-1
        hover:bg-blue-600 hover:text-white hover:border-blue-600'
        onClick={(e) => {e.stopPropagation(); router.push('/api/auth/signout')}}>
            Sign Out
        </button>
    )
}