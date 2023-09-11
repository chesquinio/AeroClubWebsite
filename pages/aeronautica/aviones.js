import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

function PlanesPage() {
  const planes = [
    {
      title: "CESSNA 150L",
      image: "https://aeroclub-website.s3.amazonaws.com/1694193835572.png",
      description:
        "El Cessna 150 es un avión biplaza de propósito general equipado con tren de aterrizaje fijo en triciclo y ala alta, diseñado originalmente para labores de entrenamiento, turismo y uso personal",
      href: "/aeronautica/aviones",
    },
    {
      title: "CESSNA 152N",
      image: "https://aeroclub-website.s3.amazonaws.com/1694194207703.png",
      description:
        "essna 152 es un avión biplaza de propósito general, de ala alta y tren de aterrizaje fijo en triciclo, utilizado principalmente en vuelos de entrenamiento, turismo y aviación privada",
      href: "/aeronautica/aviones",
    },
    {
      title: "PIPER PA-38-112 TOMAHAWK",
      image: "https://aeroclub-website.s3.amazonaws.com/1694194490478.png",
      description:
        "El Piper PA-38-112 Tomahawk es un avión biplaza de propósito general con tren de aterrizaje fijo en triciclo, diseñado originalmente para vuelos de entrenamiento, turismo y uso privado",
      href: "/aeronautica/aviones",
    },
    {
      title: "CESSNA 172N SKYHAWK II ",
      image: "https://aeroclub-website.s3.amazonaws.com/1694194595548.png",
      description:
        "El Cessna 172 es el avión más fabricado de la historia y probablemente el avión de entrenamiento más popular del mundo. ",
      href: "/aeronautica/aviones",
    },
    {
      title: "CESSNA R172K HAWK XP II",
      image: "https://aeroclub-website.s3.amazonaws.com/1694194716129.png",
      description:
        "El Cessna R172K Hawk XP fue producido entre 1977 y 1979. Este avión es capaz de volar a una velocidad de crucero de 131 nudos, dando un rendimiento similar al Cessna 182",
      href: "/aeronautica/aviones",
    },
    {
      title: "TECNAM P2002 MKII",
      image: "https://aeroclub-website.s3.amazonaws.com/1694202333440.png",
      description:
        "El Tecnam P2002 JF MkII IFR es un avión monomotor de ala baja, dos plazas, equipado con tren de aterrizaje triciclo y ahora con certificación IFR",
      href: "/aeronautica/aviones",
    },
  ];

  return (
    <>
      <Head>
        <title>Aviones | Aero Club Rafaela</title>
      </Head>
      <Header />
      <div className="flex flex-col mx-auto lg:grid lg:grid-cols-3 mt-20 mb-11 text-white gap-10 lg:gap-0 sm:w-2/3 lg:w-full xl:w-4/5 lg:mx-auto">
        {planes.map((plane, index) => (
          <div
            key={index}
            className="w-full md:w-5/6 h-96 rounded-3xl mx-auto mb-5 py-4 px-4 transition-all group flex flex-col"
          >
            <Link
              href={plane.href}
              className="block relative w-full h-full rounded-3xl overflow-hidden transition-all group"
            >
              <img
                src={plane.image}
                alt={plane.title}
                className="w-full h-full object-cover object-center transition-transform transform scale-100 lg:group-hover:scale-105"
              />
              <div className="absolute inset-0 pb-8 pl-5 pr-16 flex flex-col items-start justify-end z-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 text-white">
                <h3 className="my-2 text-2xl" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>{plane.title}</h3>
                <p className="text-sm md:text-md" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>{plane.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default PlanesPage;