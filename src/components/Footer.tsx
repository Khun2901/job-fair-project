import Link from 'next/link'
//will useRouter in future

export default function Footer(){
    return(
        
        <footer className='bg-black flex flex-col justify-end py-5'>
        <div className="text-white flex container" >
            <div className="flex  flex-col p-5" >
            <h2 className="text-lg font-bold">Intanuay Job Fair</h2>
            <Link href="/"><div className="text-sm hover:underline">Home</div></Link>
            <Link href="/"><div className="text-sm hover:underline">Pricing</div></Link>
            </div>
        </div>
        <div className='container'>
            <p className='text-white px-5'>Sponsored by: </p>
            <p className='text-white px-5'>WasteOfCP48 Tech © 2023.</p>
            <p className='text-white px-5'>All rights reserved.</p>
        </div>
        </footer>
        
    )
}