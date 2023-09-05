import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { AeroClubData } from "@/model/AeroClubData";
import Link from "next/link";
import React from "react";

function AeroclubPage({ aeroclubData }) {
  return (
    <>
      <Header />
      <div className="lazy-load">
        <div
          className="mt-24 h-40 relative"
          style={{
            backgroundImage: "url('/aeronautica.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="flex justify-center items-center h-full"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            <h2 className="text-white text-4xl md:text-5xl">Aeronáutica</h2>
          </div>
        </div>
        <div>
          <div>
            <div className="flex flex-col lg:flex-row my-8 mx-4 lg:mx-auto max-w-7xl ">
              <div className="bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 md:w-2/3 lg:w-1/3 md:h-72 lg:mx-12 lg:mt-10 rounded-md mx-auto flex justify-center items-center">
                <img
                  src={aeroclubData[0].primaryImage}
                  className="object-cover rounded-md h-full w-full"
                  alt={aeroclubData[0].primaryTitle}
                />
              </div>
              <div className="text-center lg:text-left mt-8 lg:w-2/3">
                <h3 className="font-light text-3xl mb-4">
                  {aeroclubData[0].primaryTitle}
                </h3>
                <p className="text-gray-600">{aeroclubData[0].primaryInfo}</p>
              </div>
            </div>
          </div>
          {aeroclubData[0].activeBotton && (
            <div className="flex justify-center mt-3">
              <Link
                href={"/aeroclub/reservas"}
                className="bg-moreblue py-2 px-3 rounded text-white"
              >
                {aeroclubData[0].textBotton}
              </Link>
            </div>
          )}
          <div className="flex flex-col gap-6 max-w-7xl mx-5 mt-10 md:mt-24 md:mx-auto md:px-5 mb-4">
            <h4 className="font-light text-3xl my-2">Historia</h4>
            <div className="flex flex-col md:flex-row mb-8">
              <p className="md:w-2/3 md:pr-8">
                La escuela de vuelo del Aero Club Rafaela nació casi
                paralelamente a la fundación del mismo, dándole un aporte
                importante de pilotos al estado desde su creación. Hoy en día la
                escuela cuenta con las instalaciones y con el personal necesario
                para dictar las carreras de Piloto Privado de Avión, VFR
                Controlado, Vuelo Nocturno, Piloto Comercial de Avión con HVI e
                ILS, Piloto Aeroaplicador e Instructor de Vuelo. Es una
                institución con rica historia, con hondo arraigo en la ciudad y
                la zona, en virtud de los importantes servicios que brinda y la
                exitosa trayectoria en la difusión de la actividad aeronáutica a
                través de festivales de verdadera relevancia, como así en la
                formación de pilotos, renovación de material de vuelo, y en
                particular por la permanente y creciente concurrencia de
                asociados y público a sus modernas instalaciones.
              </p>
              <div className="md:w-1/3 bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 rounded mx-auto mt-5 md:my-0 flex justify-center items-center">
                <img
                  className="object-cover h-full w-full rounded"
                  src="https://aeroclub-website.s3.amazonaws.com/1693851896547.jpg"
                  alt="Escuela de Vuelo"
                />
              </div>
            </div>
            <div className="h-px bg-gray-600 md:hidden"></div>
            <div className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/3 bg-transparent h-52 w-11/12 sm:w-4/5 sm:h-60 rounded mx-auto my-7 md:my-0 flex justify-center items-center">
                <img
                  className="object-fill h-full w-72 rounded"
                  src="https://aeroclub-website.s3.amazonaws.com/1693852164522.png"
                  alt="Escudo Escuela de Vuelo"
                />
              </div>
              <p className="md:w-2/3 md:pl-8">
                La actividad principal es el vuelo con motor y cuenta con cinco
                aviones: un Cessna 150L, un Cessna 152N, un Piper PA-38-112
                Tomahawk, un Cessna 172N Skyhawk II y un Cessna R172K Hawk XP
                II, los cuales son utilizados tanto por la escuela de pilotos
                del Aero Club como para vuelos de traslado en general. Con
                respecto a sus instalaciones, cuenta con dos
                pistas de tierra de 1100 metros cada una, una de ellas con
                servicio de balizamiento para vuelo nocturno y una pista de
                hormigón de 1375 metros también habilitada para vuelo nocturno y
                con un sistema indicador de trayectoria de aproximación de
                precisión, con calles de rodaje y plataformas balizadas e
                iluminadas, taller de mantenimiento aeronáutico, una sala de
                pilotos, tres hangares, secretaría, torre de control, maquinaria
                y personal de conservación de campo y abastecimiento de
                combustible, distante cuatro kilómetros al sur de la ciudad.
              </p>
            </div>
          </div>
        </div>
        <div
          className="my-10 h-60 relative"
          style={{
            backgroundImage: "url('/avion.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="flex justify-center items-center h-full"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            <h2 className="text-white text-2xl md:text-3xl">Planes de Enseñansa</h2>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AeroclubPage;

export async function getServerSideProps(context) {
  try {
    await mongooseConnect();

    const data = await AeroClubData.find({});
    const serializedData = JSON.parse(JSON.stringify(data));

    return {
      props: {
        aeroclubData: serializedData,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        aeroclubData: [],
      },
    };
  }
}
