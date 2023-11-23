export default async function getCompany(id: string) {

    const response = await fetch(`http://localhost:5000/api/v1/companies/${id}`, {

        method: "GET",
        headers: {
            "accept": "*/*"
        }
    })
    if(!response.ok) {
        throw new Error("Failed to fetch Company")
    }
    return await response.json()
}