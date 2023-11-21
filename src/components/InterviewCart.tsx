'use client'
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBookingItem } from "@/redux/features/bookSlice"
import Image from 'next/image'
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useModel } from "@/hooks/useModel"
import DeleteConfirmation from "@/components/modal/DeleteConfirmation"
import { useState } from "react"
import { BookingItem } from "../../interfaces"

export default function InterviewCart() {

    const [isOpen,onOpen,onClose] = useModel()

    const router = useRouter()
    const { data: session } = useSession()
    const bookingItems = useAppSelector(state => state.bookSlice.bookingItems)
    const dispatch = useDispatch<AppDispatch>()
    const [selectedItem, setSelectedItem] = useState<BookingItem | null>(null);

    const handleOpenConfirmation = (bookingItem: BookingItem) => {
        onOpen();
        setSelectedItem(bookingItem);   
    };

    const handleConfirmDelete = () => {
        if (selectedItem) {
            dispatch(removeBookingItem(selectedItem));
            setSelectedItem(null);
            onClose;
        }
    };
    
    return (
        <>
        <DeleteConfirmation isOpen={isOpen} onClose={onClose} onConfirmDelete={handleConfirmDelete}></DeleteConfirmation>
        {
            
            bookingItems.map((bookingItem) => (
                
                <div className="bg-slate-200 rounded-lg flex flex-row justify-between p-4 my-4 shadow-md"
                key = {bookingItem.firstname && bookingItem.lastname && bookingItem.company}>

                    <div>
                        <div className="text-sm">Interview Date:</div>
                        <div className="text-xl">{bookingItem.interviewdate}</div>
                        <br></br>
                        <div className="text-md">User: {session?.user?.name}</div>
                    </div>

                    <div className="flex flex-col text-center">
                        <div className="text-sm">Booking for:</div>
                        <div className="text-xl">{bookingItem.firstname} {bookingItem.lastname}</div>
                        <div className="text-md">Position: {bookingItem.position}</div>
                        <div className="text-md">Company: {bookingItem.company}</div>
                    </div>

                    <div className="flex flex-row">

                        
                        <button type='submit'
                        className='rounded-md bg-neutral-300 m-1 p-2 text-sm border-2 border-neutral-300 
                        font-semibold text-white shadow-sm hover:bg-neutral-100 focus-visible:outline
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100'
                        onClick={ (e) => {
                            e.stopPropagation();
                            router.push(`/interview?firstName=${bookingItem.firstname}&lastName=${bookingItem.lastname}&position=${bookingItem.position}&company=${bookingItem.company}&interviewDate=${bookingItem.interviewdate}&status=edit`);
                        }}
                        >
                        <Image src={'/edit.png'} alt="edit" width={20} height={20}/>
                        </button>
                        
                        
                        <button type='submit'
                        className='rounded-md bg-red-400 m-1 p-2 text-sm border-2 border-red-400 
                        font-semibold text-white shadow-sm hover:bg-white focus-visible:outline 
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                        // onClick={ () => dispatch(removeBookingItem(bookingItem))}
                        onClick={() => {handleOpenConfirmation(bookingItem)}}
                        >
                        <Image src={'/delete.png'} alt="delete" width={20} height={20}/>
                        </button>
                    </div>
                </div>
                
            ))
        }
        </>
    )
}