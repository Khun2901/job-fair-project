'use client'

import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem } from '@mui/material'
import { useState } from 'react'
import Link from 'next/link'
import dayjs, { Dayjs } from 'dayjs'
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { BookingItem } from "../../interfaces"
import { addBookingItem, removeBookingItem } from "@/redux/features/bookSlice"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import mongoose from 'mongoose'
import { dbConnect } from '@/db/dbConnect'
import Booking from '@/db/models/Booking'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'


export default function InterviewForm(){

    const router = useRouter()
    const { data: session } = useSession()
    
    const urlParams = useSearchParams()
    const cid = urlParams.get('cid')
    const chosenCompany = urlParams.get('company') 
    const interviewDateParam = urlParams.get('interviewDate')
    const dateArr = interviewDateParam?.split('/')
    const interviewDateDayjs = dateArr ? dayjs(`${dateArr[0]}-${dateArr[1]}-${dateArr[2]}`) : null

    const [interviewDate, setInterviewDate] = useState<Date|null>(interviewDateDayjs)

    return(
        <div className='w-full flex flex-col items-center'>
        
            <form className='relative p-6 z-20'>
                <div className='text-center text-3xl font-bold mb-5'>
                    Book Your Interview
                </div>

                <div className='grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2'>

                    <div>Name: {session?.user.name}</div>
                    <div>Company: {chosenCompany}</div>

                    <div className='sm:col-span-1' id='date'>
                        <label className='block text-lg font-semibold leading-6 text-gray-900 ml-2 mb-2'>
                            Interview Date
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                className='bg-white' 
                                defaultValue={interviewDate}
                                onChange={(value)=>{setInterviewDate(value)}}
                            />
                        </LocalizationProvider>
                    </div>
                
                    <div className='sm:col-span-full flex justify-end gap-5 mr-5'>

                        <div>
                            <button
                            type='button'
                            className='rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white 
                            shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 
                            focus-visible:outline-offset-2 focus-visible:outline-red-500'
                            onClick={() => {
                                router.push('/interviewcart')
                            }}
                            >
                                CANCEL
                            </button>
                        </div>

                        <Link href='/interviewcart'>
                            <button 
                            type='submit'
                            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white 
                            shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 
                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            onClick={(e) => {
                                e.preventDefault();
                                router.push(`/interview/confirm-booking?uid=${session?.user._id}&cid=${cid}&bookingDate=${interviewDate}`)
                            }}
                            >
                                SAVE
                            </button>
                        </Link>

                    </div>

                </div>

            </form>

        </div>
    )
}