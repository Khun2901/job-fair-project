import CardPanel from "@/components/CardPanel"
import CompanyCatalog from "@/components/CompanyCatalog"
import getCompanies from "@/libs/getCompanies"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "../api/auth/[...nextauth]/route"
import IndigoButton from "@/components/IndigoButton"

export default async function CompanyPage() {

    let isAdmin = true

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token){
        isAdmin = false
    } else  {
        const profile = await getUserProfile(session.user.token)
        if(profile.data.role != 'admin') isAdmin = false
    }
    
    const companies = getCompanies()

    return(
        <main className="mt-[110px] flex flex-col items-center">
            <h1 className="font-semibold text-xl mb-4">Visit Companies</h1>
            {/* <CardPanel/> */}
            <Suspense fallback={<p className="my-10 text-lg rounded">Now Loading...<LinearProgress/></p>}>
                <div className="bg-neutral-200 py-4 rounded-md">
                    <CompanyCatalog companyJson={companies}/>
                </div>
            </Suspense>
            {
                isAdmin ? <IndigoButton title="+ Add Company" pageLink="/admin/company-adding" />: null
            }
            
        </main>
    )
}