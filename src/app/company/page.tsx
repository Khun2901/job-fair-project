import CardPanel from "@/components/CardPanel"
import CompanyCatalog from "@/components/CompanyCatalog"
import getCompanies from "@/libs/getCompanies"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default function CompanyPage() {
    const companies = getCompanies()
    return(
        <main className="bg-neutral-200 pb-4">
            {/* <CardPanel/> */}
            <Suspense fallback={<p className="my-6 text-lg">Now Loading...<LinearProgress/></p>}>
                <CompanyCatalog companyJson={companies}/>
            </Suspense>
            
        </main>
    )
}