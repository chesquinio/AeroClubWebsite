import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function AeroclubPage() {
  return (
    <>
        <Header />
        <div
        className="mt-24 h-40 relative"
        style={{
          backgroundImage:
            "url('https://aeroclub-website.s3.amazonaws.com/1692384863108.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="flex justify-center items-center h-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        >
          <h2 className="text-white text-4xl md:text-5xl">AeroClub</h2>
        </div>
      </div>
      <div className='h-screen'>

      </div>
      <Footer />
    </>
  )
}

export default AeroclubPage