import Link from 'next/link'
//will useRouter in future

export default function Footer(){
    return(
        
        <footer className='bg-black flex flex-col justify-end py-5'>
        <div className="text-white flex container" >
            <div className="flex  flex-col p-5" >
            <h2 className="text-lg font-bold">Intanuay Job Fair</h2>
            <Link href="/"><div className="hover:underline">Home</div></Link>
            <Link href="/"><div className="hover:underline">Pricing</div></Link>
            </div>
        </div>
        <div className='container'>
            <p className='text-white px-5'>Sponsored by WasteOfCP48 Corp</p>
            <p className='text-white px-5'>© 2023. All rights reserved.</p>
        </div>
        </footer>
        
    )
}