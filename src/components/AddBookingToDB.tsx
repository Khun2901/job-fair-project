import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { dbConnect } from '@/db/dbConnect'
import Booking from '@/db/models/Booking'

export default async function AddBookingToDB() {
    const addBookingToDB = async () => {
        'use server'
        
        try {
            await dbConnect()
            const booking = await Booking.create(
                {
                    
                }
            )
        } catch (error) {
            console.log(error)
        }
        revalidateTag('bookings')
        redirect('/interviewcart')
    }
}