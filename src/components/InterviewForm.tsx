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
import postBooking from '@/libs/postBooking'


export default function InterviewForm(){

    const router = useRouter()
    const { data: session } = useSession()

    const urlParams = useSearchParams()
    const nameParam = urlParams.get('name')
    const companyParam = urlParams.get('company')
    const cid = urlParams.get('cid')
    const interviewDateParam = urlParams.get('interviewDate')
    const dateArr = interviewDateParam?.split('-') // YYYY-DD-MM
    const interviewDateDayjs = dateArr ? dayjs(`${dateArr[0]}-${dateArr[2]}-${dateArr[1]}`) : null
    const statusParam = urlParams.get('status')

    const [name, setName] = useState(nameParam || '')
    const [company, setCompany] = useState(companyParam || 'Agoda')
    const [interviewDate, setInterviewDate] = useState<Date|null>(interviewDateDayjs)

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if(name && company && interviewDate){
        const item: BookingItem = {
            name: name,
            company: company,
            interviewdate: dayjs(interviewDate).format("YYYY-DD-MM")
        }
        dispatch(addBookingItem(item))
        }
    }

    const removeOldBooking = () => {
        if(nameParam && companyParam && interviewDateParam){
        const item: BookingItem = {
            name: nameParam,
            company: companyParam,
            interviewdate: interviewDateParam
        }
        dispatch(removeBookingItem(item))
        }
    }

    return(
        <div className='w-auto'>
        
            <form className='relative p-6 z-20'>
                <div className='text-center text-3xl font-bold mb-5'>
                    Book Your Interview
                </div>               

                <div className='grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2'>

                    <div className='sm:col-span-1'>
                        <label className='block text-lg font-semibold leading-6 text-gray-900 ml-2 mb-2'>
                            Name
                        </label>
                        <input
                            required
                            minLength={4}
                            type='text'
                            name='name' 
                            id='name'
                            className='block w-full px-2 rounded-md border-[1px] border-neutral-400 py-1.5 
                            text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                            hover:border-black'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />        
                    </div>

                    <div className='sm:col-span-1'>
                        <label className='block text-lg font-semibold leading-6 text-gray-900 ml-2 mb-2'>
                            Select Company
                        </label>
                        <div className='bg-white rounded-md'>
                            <Select
                                name='company'
                                id='company'
                                variant='outlined'
                                className='h-[2.5em] w-full'
                                value={company}
                                onChange={(e)=>setCompany(e.target.value)}
                            >
                                <MenuItem value='Agoda' id="6544d52216ce3493911112fd">Agoda</MenuItem>
                                <MenuItem value='booking.com'>booking.com</MenuItem>
                                <MenuItem value='CLEVERSE'>CLEVERSE</MenuItem>
                                <MenuItem value='Dell'>Dell</MenuItem>
                            </Select>
                        </div>
                    </div>

                    <div className='sm:col-span-1' id='date'>
                        <label className='block text-lg font-semibold leading-6 text-gray-900 ml-2 mb-2'>
                            Interview Date
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                className='bg-white' 
                                defaultValue={interviewDate}
                                onChange={(value)=>{setInterviewDate(value);
                                console.log(interviewDateDayjs)}}
                            />
                        </LocalizationProvider>
                    </div>
                    
                    <div className='sm:col-span-1' id='user'>
                        {session?.user?.name}
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
                            onClick={async (e) => {
                                e.preventDefault();
                                if(statusParam === 'edit') {
                                    removeOldBooking();
                                }
                                makeBooking();
                                console.log(dayjs(interviewDate).format("YYYY-MM-DD"));
                                postBooking("6544d52216ce3493911112fd", dayjs(interviewDate).format("YYYY-MM-DD"));
                                router.push('/interviewcart');
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