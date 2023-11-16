"use client"

import { useRouter } from 'next/navigation'

export default function AuthButton({title, pageLink} : {title: string, pageLink: string}) {

    const router = useRouter()

    return (
        <button className='border-[2px] border-[#000000] rounded-md px-4 py-1
        hover:bg-blue-600 hover:text-white hover:border-blue-600'
        onClick={(e) => {e.stopPropagation(); router.push(pageLink)}}>
            {title}
        </button>
    )
}