import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation";
import getCompany from "@/libs/getCompany";

export default async function BookingCatalog({bookingJson}: {bookingJson: Object}) {
    const bookingJsonReady = await bookingJson
    const router = useRouter();
    return (
        <>
            <div className='grid grid-cols-5 gap-8 mx-6 my-2'>
                {
                    bookingJsonReady.data.map((bookingItem: Object)=>(
                        
                        <div className="bg-slate-200 rounded-lg flex flex-row justify-between p-4 my-4 shadow-md"
                        key = {bookingItem.date && bookingItem.user && bookingItem.company}>
                            <div>
                                <div className="text-md">Form Register Date: {bookingItem.createdAt}</div>
                                <div className="text-xl">Interview Date: {bookingItem.date}</div>
                            </div>

                            <div className="flex flex-col text-center">
                                <div className="text-sm">User: </div>
                                <div className="text-xl">{bookingItem.user}</div>
                                <div className="text-md">Company: {bookingItem.company}</div>
                            </div>

                            <div className="flex flex-row">

                                
                                <button type='submit'
                                className='rounded-md bg-neutral-300 m-1 p-2 text-sm border-2 border-neutral-300 
                                font-semibold text-white shadow-sm hover:bg-neutral-100 focus-visible:outline
                                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100'
                                onClick={ (e) => {
                                    e.stopPropagation();
                                    router.push(`/interview?user=${bookingItem.user}&company=${bookingItem.company}&interviewDate=${bookingItem.interviewdate}&status=edit`);
                                }}
                                >
                                <Image src={'/edit.png'} alt="edit" width={20} height={20}/>
                                </button>
                                

                                <button type='submit'
                                className='rounded-md bg-red-400 m-1 p-2 text-sm border-2 border-red-400 
                                font-semibold text-white shadow-sm hover:bg-white focus-visible:outline 
                                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                                onClick={ (e) => (e.stopPropagation())}>
                                <Image src={'/delete.png'} alt="delete" width={20} height={20}/>
                                </button>
                            </div>
                        </div>
                        ) 
                    )
                }
            </div>
        </>
    )
}