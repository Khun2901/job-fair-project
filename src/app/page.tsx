'use client'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Information from '@/components/Information'
import { useRef } from 'react'

export default function Home() {

  const resultRef = useRef(null)

  return (  
    <main>
      <Hero resultRef={resultRef}/>
      <Information resultRef={resultRef}/>
      <Footer />
    </main>
  )
}
