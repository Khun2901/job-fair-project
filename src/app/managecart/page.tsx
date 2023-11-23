import getBookings from "@/libs/getBookings";
import BookingCatalog from "@/components/BookingCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"

export default async function ManageCartPage() {

    const bookings = getBookings()
    const session = await getServerSession( authOptions )
    const profile = session? await getUserProfile(session.user.token) : null

    return (
        <main className="p-5 bg-[#d5e3f0] min-h-screen">

            <div className="text-center">
                <h1 className="text-xl font-medium">Select Your Hospital</h1>
                <Suspense fallback={<p> Loading ... <LinearProgress/></p>}>
                    <BookingCatalog bookingJson={bookings}/>
                </Suspense>
            </div>
        </main>
    );
}