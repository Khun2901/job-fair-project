'use server'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
export default async function deleteBooking(id: string|null) {

    const session = await getServerSession(authOptions)

    const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {

        method: "DELETE",
        headers: {
            'accept': 'application/json',
            "Authorization": `Bearer ${session?.user.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "id": id
        })
        
    })

    if(!response.ok){
        throw new Error("Failed to delete booking data.")
    }
    revalidateTag('bookings')
    redirect('/managecart')
    return await response.json()

}