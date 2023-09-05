import Footer from '@/components/Footer'
import Header from '@/components/Header'
import News from '@/components/News'
import React from 'react'

function NewPage() {
  return (
    <>
        <Header />
        <div className='min-h-screen mt-24 mb-6'>
          <h2 className='text-black text-center mt-12 md:text-4xl md:mt-16 mb-3 font-normal text-2xl' style={{ background: 'linear-gradient(to right, #4EACF2, #004691)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Noticias del Club</h2>
          <News />
        </div>
        <Footer />
    </>
  )
}

export default NewPage