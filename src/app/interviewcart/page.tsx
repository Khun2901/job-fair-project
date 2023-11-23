import InterviewCart from "@/components/InterviewCart"
import getBookings from "@/libs/getBookings"
import { useAppSelector } from "@/redux/store"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function CartPage() {

    const bookings = getBookings()
    const session = await getServerSession( authOptions )
    if(!session || !session.user.token) return (
        <div className="mt-[100px]">Please login as Admin.</div>
    )
    const profile = await getUserProfile(session.user.token)

    return (
         
        <main className="p-5 bg-[#d5e3f0] min-h-screen">
            <div className="text-center">
                <InterviewCart bookingJson={bookings} />
            </div>
        </main> 
        
    )
}