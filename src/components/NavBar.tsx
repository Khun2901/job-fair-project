import Link from 'next/link'

export default function NavBar() {
    return(
        <header className="fixed w-full top-0 bg-white h-15 lg:h-20 flex items-center shadow-md z-[100]">
            <div className="w-11/12 mx-auto flex justify-between items-center" >
                <Link href="/">
                <div className="flex gap-3 w-fit items-center" >
                    
                    <h1 className="text-2xl lg:text-3xl text-[#657CBC] font-bold" >Job Fair?</h1>
                </div></Link>
                {/* <Link href="/demo">
                <a className="flex h-fit p-2 items-center text-md lg:text-xl bg-purple-400 text-white px-5 lg:px-10 rounded-full hover:bg-purple-500 transition">
                    Try demo !
                </a></Link> */}
            </div>
        </header>
    )
}