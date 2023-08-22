import Footer from '@/components/Footer'
import Header from '@/components/Header'
import News from '@/components/News'
import React from 'react'

function NewPage() {
  return (
    <>
        <Header />
        <div className='mt-24 mb-6'>
        <h2 className='text-black text-center mt-12 md:text-3xl md:mt-16 mb-3 font-light text-2xl'>Noticias del Club</h2>
          <News />
        </div>
        <Footer />
    </>
  )
}

export default NewPage