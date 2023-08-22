import React from 'react'


function Footer() {
  return (
    <>
       <div className='bg-moredark text-gray-300 py-5 flex flex-col text-center items-center justify-center'>
        <p>© Copyright 2023 - AeroClub Rafaela - Todos los derechos reservados</p>
        <div className='flex flex-row gap-3 mt-2'>
          <a href='https://www.instagram.com/aeroclubrafaela_/'>
            <box-icon type='logo' name='instagram' color='#fff'></box-icon>
          </a>
          <a href="https://www.facebook.com/search/top?q=aero%20club%20rafaela">
            <box-icon name='facebook-square' type='logo' color='#ffffff' ></box-icon>
          </a>
          <a href="#">
            <box-icon name='envelope' color='#ffffff' ></box-icon>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer