import InterviewForm from "@/components/InterviewForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from 'next-auth'
import getUserProfile from "@/libs/getUserProfile";
import Image from "next/image";

export default async function InterviewPage() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return (
        <div className="mt-[85px] my-4 text-xl font-bold w-screen">Please Log-in first</div>
    )

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return(
        <main className="flex flex-col mt-[90px] max-w-screen">
            <Image src={'/interviewform.png'}
                alt="form" fill={true} objectFit='cover' priority/>
            
            <table className="z-20 bg-mycolor rounded-xl border-2 border-gray-700 mx-6 w-[40%] table-auto border-separate border-spacing-2 text-sm font-bold"><tbody>
                <tr><td>Name</td><td className="text-[#000080]">{profile.data.name}</td></tr>
                <tr><td>Email</td><td className="text-[#000080]">{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td className="text-[#000080]">{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td className="text-[#000080]">{createdAt.toString()}</td></tr>
            </tbody></table>

            <InterviewForm/>
        </main>
    )
}