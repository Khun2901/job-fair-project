import User from '@/db/models/User'
import { dbConnect } from '@/db/dbConnect'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import userRegister from '@/libs/userRegister'

export default async function RegisterForm(){

    const registerUser = async (registerUserForm: FormData) => {
        'use server'
        userRegister(
            registerUserForm.get('userName') as string,
            registerUserForm.get('userEmail') as string,
            registerUserForm.get('userTel') as string,
            registerUserForm.get('userRole') as string,
            registerUserForm.get('userPassword') as string
        )
        revalidateTag('user')
        redirect('/api/auth/signin')
    }

    return (
        <form className='border-neutral-400 border-2 bg-neutral-100 m-4 rounded-lg p-4' action={registerUser}>
            <div className="text-xl text-blue-700 font-semibold m-5 text-center"> Register New User </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-4 flex justify-start">
            
                <div className="sm:col-span-full">
                    <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        Username
                    </label>
                    <input 
                        required
                        type="text" 
                        name='userName' 
                        id='userName'
                        placeholder="Username"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-full">
                    <label htmlFor="userEmail" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        Email
                    </label>
                    <input 
                        required
                        type="text" 
                        name='userEmail' 
                        id='userEmail'
                        placeholder="exampleuser@intanuay.com"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="userTel" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        Tel
                    </label>
                    <input 
                        required
                        type="text" 
                        name='userTel' 
                        id='userTel'
                        placeholder="0XX-XXX-XXXX"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="userRole" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        Role
                    </label>
                    <input 
                        readOnly
                        type="text" 
                        name='userRole' 
                        id='userRole'
                        value='user'
                        placeholder="Role"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-full">
                    <label htmlFor="userPassword" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        Password
                    </label>
                    <input 
                        required
                        type="text" 
                        name='userPassword' 
                        id='userPassword'
                        placeholder="Password"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <button type="submit"
                    className="sm:col-span-full place-self-center rounded-md bg-indigo-600 mt-5 px-3 py-2 text-sm 
                    font-semibold text-white shadow-sm hover:bg-indigo-500"
                    >
                    Register
                </button>
                
            </div>
        
        </form>
    )
}