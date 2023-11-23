export default async function getCompanies() {

    await new Promise((resolve) => setTimeout(resolve, 3000))

    const response = await fetch("http://localhost:5000/api/v1/companies", {next: {tags: ['companies']}})
    if(!response.ok) {
        throw new Error("Failed to fetch Companies")
    }
    
    return await response.json()
}