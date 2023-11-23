import putCompany from "@/libs/putCompany"
import { redirect, useSearchParams } from "next/navigation"
import Link from "next/link"
import { revalidateTag } from "next/cache"

export default async function ManageCompanyForm({cid}: {cid:string|null}) {

    const urlParams = useSearchParams()

    const updateCompany = async (updateCompanyForm: FormData) => {
        const name = updateCompanyForm.get("name")?.toString()
        const business = updateCompanyForm.get("business")?.toString()
        const address = updateCompanyForm.get("address")?.toString()
        const province = updateCompanyForm.get("province")?.toString()
        const postalcode = updateCompanyForm.get("postalcode")?.toString()
        const tel = updateCompanyForm.get("tel")?.toString()
        const picture = updateCompanyForm.get("picture")?.toString()

        putCompany(cid, name, business, address, province, postalcode, tel, picture)

        redirect('/company')
    }

    return(
        <div className="flex flex-col w-[50%] mt-[100px] items-center">
            <h1 className="text-xl text-center my-4 font-bold">Update Company</h1>
            <form action={updateCompany} className="bg-slate-100 rounded-md w-[100%]">
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
                    Update Company</button>
                </div>

            </form>
        </div>
    )
}