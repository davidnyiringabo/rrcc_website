import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full px-14">
      <Hero/>
      <div className='w-full md:px-2'>
        <h5 className='text-[180%] font-extrabold'>Blog & News</h5>
        <p>Latest activites</p>
      </div>
    </main>
  )
}
