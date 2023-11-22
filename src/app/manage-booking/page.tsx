
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "../api/auth/[...nextauth]/route"
import getBookings from "@/libs/getBookings"
import BookingCatalog from "@/components/BookingCatalog"

export default async function CompanyPage() {

    let isAdmin = true

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token){
        isAdmin = false
    } else  {
        const profile = await getUserProfile(session.user.token)
        if(profile.data.role != 'admin') isAdmin = false
    }
    
    const bookings = getBookings()

    return(
        <BookingCatalog bookingJson={bookings}/>
    )
}