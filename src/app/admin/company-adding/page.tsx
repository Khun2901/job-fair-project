import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import AddCompanyForm from "@/components/AddCompanyForm"

export default async function companyAddingPage() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return (
        <div className="mt-32 flex flex-col items-center font-semibold text-xl">Please login.</div>
    )

    const profile = await getUserProfile(session.user.token)

    return (
        <div className="mt-32 flex flex-col items-center">
            {profile.data.role === 'admin' ? <AddCompanyForm />
                : <div className="font-semibold text-xl">Please login as Admin.</div>
                }
        </div>
    )
    
}