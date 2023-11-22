'use server'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function addInterviewToMongo(cid: string|null, interviewDate: string|null) {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return (
        <div className="mt-[100px]">Please login first.</div>
    )

    const response = await fetch(`http://localhost:5000/api/v1/companies/${cid}/bookings`, {

        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Authorization": `Bearer ${session.user.token}`,
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            bookingDate: interviewDate
        })
    })

    if(!response.ok){
        throw new Error("Failed to post booking data.")
    }

    return await response.json()

}