import React from 'react'


function Footer() {
  return (
    <>
       <div className='bg-moredark text-gray-300 py-5 flex flex-col text-center items-center justify-center'>
        <p>© Copyright 2023 - AeroClub Rafaela - Todos los derechos reservados</p>
        <div className='flex flex-row gap-3 mt-2'>
          <a className='text-2xl' href='https://www.instagram.com/aeroclubrafaela_/'>
            <i class='bx bxl-instagram'></i>
          </a>
          <a className='text-2xl' href="https://www.facebook.com/search/top?q=aero%20club%20rafaela">
            <i class='bx bxl-facebook-square'></i>
          </a>
          <a className='text-2xl' href="#">
            <i class='bx bx-envelope'></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer