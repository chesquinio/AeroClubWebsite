import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

function CampingPage() {
  return (
    <>
        <Header />
        <div className='mt-24 h-screen'>
            <div className='flex justify-center my-5'>
              <Link href={'/colonia/inscripciones'} className='bg-moreblue py-2 px-3 rounded text-white'>Incripciones Colonia</Link>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default CampingPage