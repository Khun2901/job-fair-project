'use client'
import deleteBooking from "@/libs/deleteBooking";
import dayjs from "dayjs";
import Image from "next/image"
import Link from "next/link";

export default async function BookingCatalog({bookingJson}: {bookingJson: Object}) {

    const bookingJsonReady = await bookingJson

    return (
        <div className="mt-12">
        {
            bookingJsonReady.data.map((bookingItem: Object)=>(
                
                <div className="bg-slate-200 rounded-lg flex flex-row justify-between p-4 my-4 shadow-md"
                key = {bookingItem._id}>
                    <div className="text-left flex flex-col place-content-evenly">
                        <div className="text-md font-bold">Interview Date: {dayjs(bookingItem.bookingDate).format('DD MMM YYYY')}</div>
                        <div className="text-sm">Last Edited: {dayjs(bookingItem.createdAt).format('DD MMM YYYY')}</div>
                    </div> 
                                                
                    <div className="flex flex-col text-center place-content-center">
                        <div className="text-sm ">User: <span className="text-xl font-bold">{bookingItem.user.name}</span></div>
                        <div className="text-md">Company: {bookingItem.company.name}</div>
                    </div>

                    <div className="flex flex-row">
                        
                        <Link href={`/interview?name=${bookingItem.user.name}&company=${bookingItem.company.name}&interviewDate=${dayjs(bookingItem.bookingDate).format('YYYY-DD-MM')}&booking_id=${bookingItem._id}&status=adminedit`}>
                        <button type='submit'
                        className='rounded-md bg-neutral-300 m-1 py-6 px-4 text-sm border-2 border-neutral-300
                        font-semibold text-white shadow-sm hover:bg-neutral-100 focus-visible:outline
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100'
                        >
                        <Image src={'/edit.png'} alt="edit" width={20} height={20}/>
                        </button>
                        </Link>
                        
                        <button type='submit'
                        className='rounded-md bg-red-400 m-1 py-6 px-4 text-sm border-2 border-red-400 
                        font-semibold text-white shadow-sm hover:bg-white focus-visible:outline 
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                        onClick={ (e) => {e.stopPropagation(), deleteBooking(bookingItem._id)}}>
                        <Image src={'/delete.png'} alt="delete" width={20} height={20}/>
                        </button>
                    </div>
                </div>
                ) 
            )
        }
        </div>
    )
}