'use client'

import ManageCompanyForm from "@/components/ManageCompanyForm"
import { useSearchParams } from "next/navigation"

export default function ManagingCompanyPage() {
    // const router = useRouter()
    // const { data: session } = useSession()

    const urlParams = useSearchParams()
    const cid = urlParams.get('cid')

    return (
        <div>
            <ManageCompanyForm cid={cid}/>
        </div>
    )
}