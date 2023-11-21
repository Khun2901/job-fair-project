'use server'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { dbConnect } from '@/db/dbConnect'
import Booking from '@/db/models/Booking'
import { useSession } from 'next-auth/react'

const { data:session} = useSession()

const addInterviewToMongo = async (bookInterviewForm: FormData) => {

    const date = bookInterviewForm.get('date')
    const user = bookInterviewForm.get('user')
    const company = bookInterviewForm.get('company')
    
    try {
        await dbConnect()
        const booking = await Booking.create(
            {
                'bookingDate': date,
                'user': user,
                'company': company,
            }
        )
    } catch (error) {
        console.log(error)
    }
    revalidateTag('bookings')
    redirect('/interviewcart')
}

export { addInterviewToMongo }