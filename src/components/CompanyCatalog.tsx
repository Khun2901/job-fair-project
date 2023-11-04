import Link from "next/link"
import CompanyCard from "./CompanyCard"

export default async function CompanyCatalog({companyJson}: {companyJson: Object}) {
    const companyJsonReady = await companyJson
    return (
        <>
            <div className='grid grid-cols-6 gap-5 mx-4 my-2'>
                {
                    companyJsonReady.data.map((companyItem: Object)=>(
                        <Link href={`/company/${companyItem.id}`}>
                        <CompanyCard companyName={companyItem.name} imgSrc={companyItem.picture}
                        /> 
                        </Link>  
                        ) 
                    )
                }
            </div>
        </>
    )
}