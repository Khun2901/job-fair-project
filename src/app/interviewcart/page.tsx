'use client'
import InterviewCart from "@/components/InterviewCart"
import { useAppSelector } from "@/redux/store"

export default function CartPage() {

    // const bookingItems = useAppSelector(state => state.bookSlice.bookingItems)
    const bookingItems = []

    return(
        <main className='w-screen h-screen pt-[70px] bg-zinc-300'>
            {bookingItems.length ?

            <InterviewCart />

            :

            <div className='bg-slate-200 rounded px-5 mx-5 mt-5 py-4 text-2xl'>
                “No Company Interview Yet”
            </div>

        }
            
        </main>
    )
}