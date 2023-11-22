'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function InteractCard({children}: { children: React.ReactNode}) {

    const router = useRouter()

    function OnHover(event: React.SyntheticEvent) {
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('shadow-2xl');
            event.currentTarget.classList.remove('bg-white');
            event.currentTarget.classList.add('bg-neutral-200');
        }
        else{
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.add('shadow-lg');
            event.currentTarget.classList.remove('bg-neutral-200');
            event.currentTarget.classList.add('bg-white');
        }
    }

    return (
        <div className='w-[230px] h-[300px] rounded-lg shadow-lg bg-white'        
            onMouseOver={(event) => OnHover(event)}
            onMouseOut={(event) => OnHover(event)}
        >
            {children}
        </div>
    );
}