import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    
    <main>
      <title>Hello World</title>
      <NavBar />
      <div className='h-[1000px] p-[100px]'>
        Hello
      </div>
      <Footer />
    </main>
  )
}
