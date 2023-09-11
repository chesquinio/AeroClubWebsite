import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NewsList from '@/components/NewsList'
import Head from 'next/head'
import React from 'react'

function NewPage() {
  return (
    <>
        <Head>
          <title>Noticias | Aero Club Rafaela</title>
          <meta
            name="description"
            content="Las últimas novedades que ha presentado el club para sus socios y afiliados en pos de un progreso de las instalaciones y los servicios ofrecidos."
          />
        </Head>
        <Header />
        <div className='min-h-screen mt-24 mb-6'>
          <h2 className='text-black text-center mt-12 md:text-4xl md:mt-16 mb-3 font-normal text-3xl' style={{ background: 'linear-gradient(to right, #4EACF2, #004691)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Noticias del Club</h2>
          <NewsList />
        </div>
        <Footer />
    </>
  )
}

export default NewPage