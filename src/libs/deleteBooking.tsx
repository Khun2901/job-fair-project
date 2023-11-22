export default async function deleteBooking(id: string|null) {

    const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {

        method: "DELETE",
        headers: {
            
        },
        body: JSON.stringify({
            id: id
        })
    })

    if(!response.ok){
        throw new Error("Failed to delete booking data.")
    }

    return await response.json()

}