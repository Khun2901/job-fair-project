import Image from "next/image"
import getCompany from "@/libs/getCompany"

export default async function CompanyDetailPage({params}: {params: {cid: string}}) {

    const companyDetail = await getCompany(params.cid)

    return (
        <main>
            <div className="flex flex-row mx-20 mt-32">
                <Image src={companyDetail.data.picture}
                alt="Company Picture"
                width={0} height={0} sizes="50vw"
                className="rounded-lg w-auto shadow-2xl"
                />
                <div>
                    <h1 className="text-2xl font-bold mx-20 my-4">{companyDetail.data.name}</h1>
                    <div className="text-xl text-left font-normal mx-20">
                        <div className="my-4">Business: {companyDetail.data.address}</div>
                        <div className="my-4">Address: {companyDetail.data.address}</div>
                        <div className="my-4">Province: {companyDetail.data.province}</div>
                        <div className="my-4">Postal Code: {companyDetail.data.postalcode}</div>
                        <div className="my-4">Tel: {companyDetail.data.tel}</div>
                    </div>
                </div>           
            </div>   
        </main>
    )
}