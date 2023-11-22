export default async function getBookings() {

    const response = await fetch("http://localhost:5000/api/v1/bookings", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    
    if(!response.ok) {
        throw new Error("Failed to fetch Bookings")
    }
    
    return await response.json()
}