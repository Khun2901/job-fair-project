'use client'
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBookingItem } from "@/redux/features/bookSlice"

export default function InterviewCart() {

    const bookingItems = useAppSelector(state => state.bookSlice.bookingItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
            bookingItems.map((bookingItem) => (
                <div className="bg-slate-200 rounded px-5 mx-5 mt-5 py-4"
                key = {bookingItem.firstname && bookingItem.company}>

                    <div className="text-sm">Booking for:</div>
                    <div className="text-xl">{bookingItem.firstname} {bookingItem.lastname}</div>
                    <div className="text-md">For {bookingItem.position}</div>
                    <div className="text-md">At {bookingItem.company}</div>

                    <button type="submit"
                    className="rounded-md bg-indigo-600 mt-2 px-3 py-2 text-sm border-2 border-indigo-600 font-semibold text-white shadow-sm 
                    hover:bg-white hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600"
                    onClick={ () => dispatch(removeBookingItem(bookingItem))}>
                    Remove Booking
                    </button>
                </div>
                
            ))
        }
        </>
    )
}