import Image from "next/image"
import getCompany from "@/libs/getCompany"
import Link from "next/link"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import DeleteCompanyButton from "@/components/DeleteCompanyButton"

export default async function CompanyDetailPage({params}: {params: {cid: string}}) {
    
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) {
        return (
            <div className="mt-[100px]">Please login first.</div>
        )
    }
    
    const profile = await getUserProfile(session.user.token)

    const companyDetail = await getCompany(params.cid)

    return (
        <main>
            <div className="flex flex-row mx-20 mt-32">
                <Image src={companyDetail.data.picture}
                alt="Company Picture"
                width={0} height={0} sizes="35vw"
                className="rounded-lg responsive w-[35%] shadow-2xl"
                />
                <div>
                    <h1 className="text-2xl font-bold mx-20 my-4">{companyDetail.data.name}</h1>
                    <div className="text-xl text-left font-normal mx-20">
                        <div className="my-4">Business: {companyDetail.data.business}</div>
                        <div className="my-4">Address: {companyDetail.data.address}</div>
                        <div className="my-4">Province: {companyDetail.data.province}</div>
                        <div className="my-4">Postal Code: {companyDetail.data.postalcode}</div>
                        <div className="my-4">Tel: {companyDetail.data.tel}</div>
                        <div className="flex flex-row">
                            <Link href={`/interview?cid=${params.cid}&company=${companyDetail.data.name}`}>
                                <button className="block rounded-md bg-indigo-600 hover:bg-indigo-800 px-3 py-2 text-white shadow-sm">
                                    Booking your Interview
                                </button>
                            </Link>
                            {profile.data.role == 'admin' ? 
                            <Link href={`/admin/company-managing?cid=${params.cid}`}>
                                <button className='rounded-md bg-neutral-300 my-1 mx-4 p-2 text-sm border-2 border-neutral-300 
                                    font-semibold text-white shadow-sm hover:bg-neutral-100 focus-visible:outline
                                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100'
                                    >
                                    <Image src={'/edit.png'} alt="edit" width={20} height={20}/>
                                </button>
                            </Link> :null}
                            {profile.data.role == 'admin' ? 
                            <DeleteCompanyButton cid={params.cid} /> :null}
                        </div>
                        
                    </div>
                    
                </div>           
            </div>   
        </main>
    )
}