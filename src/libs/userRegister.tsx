export default async function userRegister(  
    username: string,
    userEmail: string,
    userTel: string,
    userRole: string,
    userPassword: string,
    ) {
    
    const response = await fetch("http://localhost:5000/api/v1/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: userEmail,
            tel: userTel,
            role: userRole,
            password: userPassword
        })
    })

    if(!response.ok){
        throw new Error("Failed to fetch data.")
    }
    
    return await response.json()

}