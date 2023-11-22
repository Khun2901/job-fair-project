'use server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function putCompany(cid: string|null, name: string|undefined, business: string|undefined, address: string|undefined, province: string|undefined, postalcode: string|undefined, tel: string|undefined, picture: string|undefined) {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) {
        return (
            <div className="mt-[100px]">Please login first.</div>
        )
    }

    const response = await fetch(`http://localhost:5000/api/v1/companies/${cid}`, {

        method: "PUT",
        headers: {
            "accept": "application/json",
            "authorization": `Bearer ${session.user.token}`,
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            "name": name,
            "business": business,
            "address": address,
            "province": province,
            "postalcode": postalcode,
            "tel": tel,
            "picture": picture
        })
    })

    if(!response.ok){
        throw new Error("Failed to update company data.")
    }

    return await response.json()

}