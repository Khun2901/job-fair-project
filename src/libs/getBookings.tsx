import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
export default async function getBookings() {

    const session = await getServerSession(authOptions)

    const response = await fetch("http://localhost:5000/api/v1/bookings", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${session?.user.token}`,
            "Content-Type": "application/json",
            'accept': 'application/json'
        },
    })
    
    if(!response.ok) {
        throw new Error("Failed to fetch Bookings")
    }
    
    return await response.json()
}