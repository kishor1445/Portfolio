import React from 'react'
import Link from 'next/link';
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

const Comp: React.FC = () => {
  return <></>
}

const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full mx-auto h-screen"> 
      <EvervaultCard>
        <div className='text-center'>
        <h1 className="text-9xl font-black text-gray-700">404</h1>
        <p className="text-2xl font-bold tracking-tight sm:text-4xl text-white">
          Uh-oh!
        </p>
        <p className="mt-4 text-gray-400">We can't find that page.</p>
        <Link href={'/'} className='mt-6 inline-block rounded bg-sky-400 px-5 py-3 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring'>Go Back Home</Link>
        </div>
      </EvervaultCard>
    </div>
  )
}

export default NotFoundPage