'use client'
import InterviewCart from "@/components/InterviewCart"
import { useAppSelector } from "@/redux/store"

export default function CartPage() {

    const bookingItems = useAppSelector(state => state.bookSlice.bookingItems)

    return(
        <main className='max-w-screen min-h-screen bg-zinc-200 mt-[75px] pt-2 py-2 px-4'>
            {bookingItems.length ?

            <InterviewCart />

            :
            <div className='text-bold p-40 text-3xl text-center'>
                “No Company Interview Yet”
            </div>

        }
            
        </main>
    )
}