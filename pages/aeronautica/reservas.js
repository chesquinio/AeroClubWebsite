import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

export default function FlyReservationPage() {
  return (
    <>
      <Header />
      <main className="h-screen w-full grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-6 md:gap-10 p-8 pt-28 md:p-14 md:pt-28">
        <section className="transition-all group flex flex-col rounded-3xl h-full">
          <Link
            href="/aeronautica/reservas/nueva_reserva"
            className="block relative w-full h-full rounded-3xl overflow-hidden transition-all group shadow-md shadow-gray-500"
          >
            <img
              src="/avion-reservas-1.webp"
              alt="TECNAM P2002 MKII"
              className="w-full h-full object-cover object-center transition-transform transform scale-100 lg:group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col px-4 items-center justify-center z-5 opacity-100 lg:group-hover:bg-opacity-60 transition-all bg-black bg-opacity-60 lg:bg-opacity-30 text-white text-center">
              <h3
                className="my-2 text-4xl sm:text-6xl"
                style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }}
              >
                Nueva Reserva
              </h3>
              <p
                className="text-sm md:text-xl"
                style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }}
              >
                ¿Quiéres hacer una reserva?
              </p>
              <p
                className="text-sm md:text-lg"
                style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }}
              >
                Aquí puedes ingresar al formulario para realizarla
              </p>
            </div>
          </Link>
        </section>
        <section className="transition-all group flex flex-col rounded-3xl h-full">
          <Link
            href="/aeronautica/reservas/cronograma"
            className="block relative w-full h-full rounded-3xl overflow-hidden transition-all group shadow-md shadow-gray-500"
          >
            <img
              src="/avion-reservas-2.webp"
              alt="CESSNA R172K HAWK XP II"
              className="w-full h-full object-cover object-center transition-transform transform scale-100 lg:group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col px-4 items-center justify-center z-5 opacity-100 lg:group-hover:bg-opacity-60 transition-all bg-black bg-opacity-60 lg:bg-opacity-30 text-white text-center">
              <h3
                className="my-2 text-4xl sm:text-6xl"
                style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }}
              >
                Consultár una Reserva
              </h3>
              <p
                className="text-sm md:text-xl"
                style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }}
              >
                ¿Ya tienes una reserva?
              </p>
              <p
                className="text-sm md:text-lg text-center"
                style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }}
              >
                Ingresa aquí para consultar el horario
              </p>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
