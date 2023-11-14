'use client'
import { useRouter } from "next/navigation";

export default function IndigoButton({title, pageLink}: {title: string, pageLink: string}) {

    const router = useRouter() 

    return(
        <button className='rounded-md bg-indigo-600 px-3 py-2 my-4 text-sm font-semibold text-white 
            shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 
            focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            onClick={(e) => {
                e.preventDefault();
                router.push(pageLink)
            }}>
                {title}
            </button>
    )
}