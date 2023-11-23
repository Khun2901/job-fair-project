'use client'

import Image from 'next/image'
import DeleteConfirmation from "./modal/DeleteConfirmation";
import { useModel } from "@/hooks/useModel";
import deleteCompany from "@/libs/deleteCompany";
import { redirect, useRouter } from 'next/navigation';


export default function DeleteCompanyButton({cid}: {cid: string|null}) {

    const router =  useRouter()
    const [isOpen, onOpen, onClose] = useModel()

    const handleOpenConfirmation = (cid: string|null) => {
        onOpen();
    };

    const handleConfirmDelete = () => {
        deleteCompany(cid);
        onClose();
    };

    return (
        <>
            <DeleteConfirmation isOpen={isOpen} onClose={redirect('/company')} onConfirmDelete={handleConfirmDelete}></DeleteConfirmation>
            <button type='submit'
                className='rounded-md bg-red-400 my-1 p-2 text-sm border-2 border-red-400 
                font-semibold text-white shadow-sm hover:bg-white focus-visible:outline 
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                // onClick={ () => dispatch(removeBookingItem(bookingItem))}
                onClick={() => {handleOpenConfirmation(cid)}}
                >
                <Image src={'/delete.png'} alt="delete" width={20} height={20}/>
            </button>
        </>
        
    )
}