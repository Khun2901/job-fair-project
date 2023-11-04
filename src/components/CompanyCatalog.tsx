import Link from "next/link"
import CompanyCard from "./CompanyCard"

export default async function CompanyCatalog({companyJson}: {companyJson: Object}) {
    const companyJsonReady = await companyJson
    return (
        <>
            <div className='mt-[90px] grid grid-cols-6 gap-5 mx-4'>
                {
                    companyJsonReady.data.map((companyItem: Object)=>(
                        // <Link href={`/hospital/${companyItem.id}`} 
                        // className='w-[100%] sm:w-[50%] md:w-[30%] lg-w[25%] p-2 sm:p-4 md:p-4 lg:p-8'>
                        <CompanyCard companyName={companyItem.name} imgSrc={companyItem.picture}
                        /> 
                        // </Link>  
                        ) 
                    )
                }
            </div>
        </>
    )
}