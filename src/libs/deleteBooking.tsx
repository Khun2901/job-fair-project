'use server'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
export default async function deleteBooking(id: string|null) {

    const session = await getServerSession(authOptions)

    const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {

        method: "DELETE",
        headers: {
            'accept': '*/*',
            "Authorization": `Bearer ${session?.user.token}`,
            "Content-Type": "application/json",
        }
    })

    if(!response.ok){
        throw new Error("Failed to delete booking data.")
    }

    return await response.json()

}