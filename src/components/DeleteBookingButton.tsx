'use client'

import Image from 'next/image'
import DeleteConfirmation from "./modal/DeleteConfirmation";
import { useModel } from "@/hooks/useModel";
import { redirect } from 'next/navigation';
import deleteBooking from '@/libs/deleteBooking';

export default function DeleteBookingButton({bid}: {bid: string|null}) {

    const [isOpen, onOpen, onClose] = useModel()

    const handleOpenConfirmation = (bid: string|null) => {
        onOpen();
    };

    const handleConfirmDelete = () => {
        deleteBooking(bid);
        onClose;
    };

    return (
        <>
            <DeleteConfirmation isOpen={isOpen} onClose={onClose} onConfirmDelete={handleConfirmDelete}></DeleteConfirmation>
            <button type='submit'
                className='rounded-md bg-red-400 m-1 py-6 px-4 text-sm border-2 border-red-400 
                font-semibold text-white shadow-sm hover:bg-white focus-visible:outline 
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                // onClick={ () => dispatch(removeBookingItem(bookingItem))}
                onClick={() => {handleOpenConfirmation(bid)}}
                >
                <Image src={'/delete.png'} alt="delete" width={20} height={20}/>
            </button>
        </>
        
    )
}