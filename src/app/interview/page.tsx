import InterviewForm from "@/components/InterviewForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from 'next-auth'
import getUserProfile from "@/libs/getUserProfile";

export default async function InterviewPage() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return (
        <div className="mt-[85px] my-4 text-xl font-bold">Please Log-in first</div>
    )

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return(
        <main className="flex flex-col mt-[90px]">
            
            <table className="mx-2 table-auto border-separate border-spacing-3 text-sm font-bold"><tbody>
                <tr><td>Name</td><td>{profile.data.name}</td></tr>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>

            <InterviewForm/>
        </main>
    )
}