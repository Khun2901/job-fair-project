export default async function updateBooking(id: string|null, interviewDate: string|null) {

    const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {

        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id,
            bookingDate: interviewDate
        })
    })

    if(!response.ok){
        throw new Error("Failed to update booking data.")
    }

    return await response.json()
}