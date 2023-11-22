'use client'

import ManageCompanyForm from "@/components/ManageCompanyForm"
import { useSearchParams } from "next/navigation"

export default function ManagingCompanyPage() {
    // const router = useRouter()
    // const { data: session } = useSession()

    const urlParams = useSearchParams()
    const cid = urlParams.get('cid')

    return (
        <div className="w-full flex flex-col items-center">
            <ManageCompanyForm cid={cid}/>
        </div>
    )
}