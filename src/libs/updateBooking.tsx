'use server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
export default async function updateBooking(id: string|null, interviewDate: string|null) {

    const session = await getServerSession(authOptions)
    const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {

        method: "PUT",
        headers: {
            "accept": "*/*",
            "Authorization": `Bearer ${session?.user.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            'id': id,
            'bookingDate': interviewDate
        })
        
    }
    )

    if(!response.ok){
        throw new Error("Failed to update booking data.")
    }
    revalidateTag('bookings')

    return await response.json()
}