import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import Company from "@/db/models/Company"
import { dbConnect } from "@/db/dbConnect"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function AddCompanyForm() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return (
        <div className="mt-[100px]">Please login as Admin.</div>
    )

    const profile = await getUserProfile(session.user.token)
    if(profile.data.role !== "admin") return (
        <div className="mt-[100px]">Please login as Admin.</div>
    )
    var createdAt = new Date(profile.data.createdAt)

    const addCompany = async (addCompanyForm: FormData) => {
        "use server"
        const name = addCompanyForm.get("name")
        const business = addCompanyForm.get("business")
        const address = addCompanyForm.get("address")
        const province = addCompanyForm.get("province")
        const postalcode = addCompanyForm.get("postalcode")
        const tel = addCompanyForm.get("tel")
        const picture = addCompanyForm.get("picture")

        try {
            await dbConnect()
            const company = await Company.create({
                "name": name,
                "business": business,
                "address": address,
                "province": province,
                "postalcode": postalcode,
                "tel": tel,
                "picture": picture
            })
        } catch(error) {
            console.log(error)
        }
        revalidateTag("companies")
        redirect("/company")
    }

    return(
        <div className="flex flex-col w-[50%] mt-[100px] items-center">
            <h1 className="text-xl text-center my-4 font-bold">Add New Company</h1>
            <form action={addCompany} className="bg-slate-100 rounded-md w-[100%]">
                <div className="flex items-center w-auto my-2 mx-4">
                    <label className="block text-gray-700 pr-4 font-medium" htmlFor="name">Name:</label>
                    <input type="text" required id="name" name="name" placeholder="Company Name"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
                    focus:outline-none focus:border-indigo-600" />
                </div>
                <div className="flex items-center w-auto my-2 mx-4">
                    <label className="block text-gray-700 pr-4 font-medium" htmlFor="district">Business:</label>
                    <input type="text" required id="business" name="business" placeholder="Business"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
                    focus:outline-none focus:border-indigo-600" />
                </div>
                <div className="flex items-center w-auto my-2 mx-4">
                    <label className="block text-gray-700 pr-4 font-medium" htmlFor="address">Address:</label>
                    <input type="text" required id="address" name="address" placeholder="Address"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
                    focus:outline-none focus:border-indigo-600" />
                </div>
                <div className="flex items-center w-auto my-2 mx-4">
                    <label className="block text-gray-700 pr-4 font-medium" htmlFor="province">Province:</label>
                    <input type="text" required id="province" name="province" placeholder="Province"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
                    focus:outline-none focus:border-indigo-600" />
                </div>
                <div className="flex items-center w-auto my-2 mx-4">
                    <label className="block text-gray-700 pr-4 font-medium" htmlFor="postalcode">Postal Code:</label>
                    <input type="text" required id="postalcode" name="postalcode" placeholder="Postal Code"
                    className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700
                    focus:outline-none focus:border-indigo-600" />
                </div>
                <div className="flex items-center w-auto my-2 mx-4">            
                    <label className="block text-gray-700 pr-4 font-medium" htmlFor="tel">Tel:</label>
                    <input type="text" required id="tel" name="tel" placeholder="Tel"
                    className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700
                    focus:outline-none focus:border-indigo-600" />
                </div>
                <div className="flex items-center w-auto my-2 mx-4">
                    <label className="block text-gray-700 pr-4 font-medium" htmlFor="picture">URL:</label>
                    <input type="text" required id="picture" name="picture" placeholder="Picture URL"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
                    focus:outline-none focus:border-indigo-600" />
                </div>
                <div className="text-center my-2">
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold p-2 rounded my-4">
                    Add New Company</button>
                </div>
                

            </form>
        </div>
    )
}