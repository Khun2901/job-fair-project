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
import { useAppSelector } from '@/redux/store'

export default function InterviewForm(){

    const router = useRouter()

    const urlParams = useSearchParams()
    const firstNameParam = urlParams.get('firstName')
    const lastNameParam = urlParams.get('lastName')
    const companyParam = urlParams.get('company')
    const positionParam = urlParams.get('position')
    const interviewDateParam = urlParams.get('interviewDate')
    const statusParam = urlParams.get('status')

    const [firstName, setFirstName] = useState(firstNameParam || '')
    const [lastName, setLastName] = useState(lastNameParam || '')
    const [company, setCompany] = useState(companyParam || 'Agoda')
    const [position, setPosition] = useState(positionParam || 'Full-stack Developer')
    const [interviewDate, setInterviewDate] = useState<Date | null>(null)

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if(firstName && lastName && company && position && interviewDate){
        const item: BookingItem = {
            firstname: firstName,
            lastname: lastName,
            company: company,
            position: position,
            interviewdate: dayjs(interviewDate).format("YYYY/MM/DD")
        }
        dispatch(addBookingItem(item))
        }
    }

    const changeBooking = () => {
        if(firstNameParam && lastNameParam && companyParam && positionParam && interviewDateParam){
        const item: BookingItem = {
            firstname: firstNameParam,
            lastname: lastNameParam,
            company: companyParam,
            position: positionParam,
            interviewdate: interviewDateParam
        }
        dispatch(addBookingItem(item))
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
                            First Name
                        </label>
                        <input
                            required
                            minLength={4}
                            type='text'
                            name='first-name' 
                            id='first-name'
                            className='block w-full px-2 rounded-md border-[1px] border-neutral-400 py-1.5 
                            text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                            hover:border-black'
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                        />        
                    </div>

                    <div className='sm:col-span-1'>
                        <label className='block text-lg font-semibold leading-6 text-gray-900 ml-2 mb-2'>
                            Last Name
                        </label>
                        <input
                            required
                            type='text' 
                            name='last-name' 
                            id='last-name'
                            className='block w-full px-2 rounded-md border-[1px] border-neutral-400 py-1.5 
                            text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                            hover:border-black'
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
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
                                <MenuItem value='Agoda'>Agoda</MenuItem>
                                <MenuItem value='booking.com'>booking.com</MenuItem>
                                <MenuItem value='CLEVERSE'>CLEVERSE</MenuItem>
                                <MenuItem value='Dell'>Dell</MenuItem>
                            </Select>
                        </div>
                    </div>

                    <div className='sm:col-span-1'>
                        <label className='block text-lg font-semibold leading-6 text-gray-900 ml-2 mb-2'>
                            Desired Position
                        </label>
                        <div className='bg-white rounded-md'>
                            <Select
                                name='position'
                                id='position'
                                variant='outlined'
                                className='h-[2.5em] w-full'
                                value={position}
                                onChange={(e)=>setPosition(e.target.value)} 
                            >
                                <MenuItem value='Full-stack Developer'>Full-stack Developer</MenuItem>
                                <MenuItem value='Front-end Developer'>Front-end Developer</MenuItem>
                                <MenuItem value='Back-end Developer'>Back-end Developer</MenuItem>
                                <MenuItem value='Security'>Security</MenuItem>
                                <MenuItem value='UX/UI Designer'>UX/UI Designer</MenuItem>
                                <MenuItem value="Project Manager">Project Manager</MenuItem>
                            </Select>
                        </div>
                    </div>

                    <div className='sm:col-span-full'>
                        <label className='block text-lg font-semibold leading-6 text-gray-900 ml-2 mb-2'>
                            Interview Date
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker 
                                className='bg-white' 
                                value={interviewDate}
                                onChange={(value)=>setInterviewDate(value)}
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
                                if(statusParam === 'edit'){
                                    changeBooking();
                                }
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
                                makeBooking();
                                router.push('/interviewcart')
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