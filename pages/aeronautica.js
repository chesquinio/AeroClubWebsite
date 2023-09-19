import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { AeroClubData } from "@/model/AeroClubData";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

function AeroclubPage({ aeroclubData }) {
  const [showInfo, setShowInfo] = useState(true);
  const [showReq, setShowReq] = useState(false);
  const [showContTeo, setShowContTeo] = useState(false);
  const [showContPra, setShowContPra] = useState(false);
  const [showDur, setShowDur] = useState(false);

  const toggleSection = (section) => {
    setShowInfo(false);
    setShowReq(false);
    setShowContTeo(false);
    setShowContPra(false);
    setShowDur(false);

    switch (section) {
      case "info":
        setShowInfo(true);
        break;
      case "req":
        setShowReq(true);
        break;
      case "contTeo":
        setShowContTeo(true);
        break;
      case "contPra":
        setShowContPra(true);
        break;
      case "dur":
        setShowDur(true);
        break;
      default:
        setShowInfo(true);
    }
  };

  return (
    <>
      <Head>
        <title>Aeronáutica | Aero Club Rafaela</title>
        <meta
          name="description"
          content="La actividad más importante del Aero Club es la aeronáutica, atrayendo a muchos socios."
        />
      </Head>
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
            <h2
              className="text-white text-4xl md:text-5xl"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Aeronáutica
            </h2>
          </div>
        </div>
        <div>
          <div>
            <div className="flex flex-col lg:flex-row my-8 mx-4 lg:mx-auto max-w-7xl">
              <div className="bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 md:w-2/3 lg:w-1/3 md:h-72 lg:mx-12 lg:mt-10 rounded-md mx-auto flex justify-center items-center">
                <img
                  src={aeroclubData[0].primaryImage}
                  className="object-cover rounded-md h-full w-full"
                  alt={aeroclubData[0].primaryTitle}
                />
              </div>
              <div className="text-center lg:text-left mt-8 md:mt-16 lg:w-2/3">
                <h3 className="font-light text-3xl mb-4">
                  {aeroclubData[0].primaryTitle}
                </h3>
                <p className="text-gray-600">{aeroclubData[0].primaryInfo}</p>
              </div>
            </div>
          </div>
          {/*aeroclubData[0].activeBotton && (
            <div
              className="h-64 mt-20"
              style={{
                backgroundImage: "url('/avion2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="flex justify-center items-center h-full backdrop-blur-sm"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
              >
                <Link
                  href={"/aeronautica/reservas"}
                  className="text-white md:text-gray-200 text-2xl md:text-3xl py-2 px-4 border-2 border-opacity-100 md:border-opacity-0 hover:text-white hover:border-opacity-100 border-white transition-all duration-500"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  {aeroclubData[0].textBotton}
                </Link>
              </div>
            </div>
          )*/}
          <div className="flex flex-col gap-6 max-w-7xl mx-5 mt-16 md:mt-20 md:mx-auto md:px-5 mb-4">
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
                respecto a sus instalaciones, cuenta con dos pistas de tierra de
                1100 metros cada una, una de ellas con servicio de balizamiento
                para vuelo nocturno y una pista de hormigón de 1375 metros
                también habilitada para vuelo nocturno y con un sistema
                indicador de trayectoria de aproximación de precisión, con
                calles de rodaje y plataformas balizadas e iluminadas, taller de
                mantenimiento aeronáutico, una sala de pilotos, tres hangares,
                secretaría, torre de control, maquinaria y personal de
                conservación de campo y abastecimiento de combustible, distante
                cuatro kilómetros al sur de la ciudad.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-10 md:pb-12">
          <div>
            <h4
              className="text-black text-center mt-5 md:text-5xl mb-3 font-normal text-4xl py-2"
              style={{
                background: "linear-gradient(to right, #4EACF2, #004691)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ESCUELA DE VUELO
            </h4>
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-5 mt-12 md:my-20 md:mx-auto md:px-5 mb-4">
              <div className="md:w-1/2 text-center md:text-left">
                <h5 className="text-2xl md:text-3xl font-light mb-1">
                  PILOTO PRIVADO DE AVIÓN
                </h5>
                <h6 className="text-xl md:text-2xl font-light mb-4">
                  (Con VFR Controlado)
                </h6>
                <p className="text-gray-600 text-md md:text-lg">
                  Si aspiras a desempeñarte como piloto, o a su vez, copiloto en
                  vuelos privados sin compensación, el programa de formación de
                  Piloto Privado de Avión (PPA) ha sido creado especialmente
                  para personas con tus objetivos.
                </p>
              </div>
            </div>
            <div className="max-w-7xl md:mx-auto">
              <div className="flex flex-col justify-between items-center pt-14 md:py-4 gap-6 md:gap-1 text-lg text-gray-400 md:flex-row w-full">
                <div
                  onClick={() => toggleSection("info")}
                  className={`${
                    showInfo
                      ? "text-black border-b-2 border-black"
                      : "hover:text-black cursor-pointer"
                  } transition-all pb-2`}
                >
                  Sobre el Programa
                </div>
                <div
                  onClick={() => toggleSection("req")}
                  className={`${
                    showReq
                      ? "text-black border-b-2 border-black"
                      : "hover:text-black cursor-pointer"
                  } transition-all pb-2`}
                >
                  Requisitos Prévios
                </div>
                <div
                  onClick={() => toggleSection("contTeo")}
                  className={`${
                    showContTeo
                      ? "text-black border-b-2 border-black"
                      : "hover:text-black cursor-pointer"
                  } transition-all pb-2`}
                >
                  Contenido Teórico
                </div>
                <div
                  onClick={() => toggleSection("contPra")}
                  className={`${
                    showContPra
                      ? "text-black border-b-2 border-black"
                      : "hover:text-black cursor-pointer"
                  } transition-all pb-2`}
                >
                  Contenido Práctico
                </div>
                <div
                  onClick={() => toggleSection("dur")}
                  className={`${
                    showDur
                      ? "text-black border-b-2 border-black"
                      : "hover:text-black cursor-pointer"
                  } transition-all pb-2`}
                >
                  Duración
                </div>
              </div>
              <div className="my-12">
                {showInfo && (
                  <div className="animate-fade-up md:w-5/6 mx-5 md:mx-auto flex justify-center items-center">
                    <p className="text-center text-xl font-light">
                      La obtención de la presente licencia implica la
                      habilitación en categoría y clase de avión monomotor
                      terrestre de hasta 5.700 Kg. de peso máximo de despegue y
                      faculta a su titular para actuar como piloto al mando en
                      aviones monomotores terrestres, cuando haya sido
                      debidamente adaptado en vuelo por un Instructor de Vuelo,
                      quien dejará tal constancia en el Libro de Vuelo del
                      interesado
                    </p>
                  </div>
                )}
                {showReq && (
                  <div className="animate-fade-up">
                    <p className="text-center text-xl font-light mb-12 mx-4">
                      Para obtener una autorización para Alumno Piloto Privado
                      de Avión (APPA), toda persona deberá cumplir con los
                      siguientes requisitos:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-5/6 mx-5 md:mx-auto">
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>Mayor de 16 años y 9 meses de edad</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>Haber aprobado la Educación General Básica</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>
                          Leer, hablar, escribir y entender correctamente el
                          idioma español
                        </p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>
                          Documento Nacional de Identidad o equivalente para
                          paises limítrofes
                        </p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>
                          {" "}
                          Pasaporte con permiso de permanencia para extranjeros
                          no residentes
                        </p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>
                          Certificado de Habilitación Psicofisiológico Clase II
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
                {showContTeo && (
                  <div className="animate-fade-up">
                    <p className="text-center text-xl font-light mb-12 mx-4">
                      El curso de instrucción teórica, contendrá entre otras
                      áreas, como mínimo lo siguiente:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:w-5/6 mx-5 md:mx-auto">
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>Aerodinámica Básica</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>Navegación Aérea</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>Grupo Motopropulso</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p> Instrumentos de Vuelo</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p> Equipos Radioeléctricos</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p> Código Aeronáutico</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p> Maniobras de Vuelo del Avión</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p> Performance y Planificación de Vuelo</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p> Conocimientos de la Aeronave</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p> Procedimientos Operacionales</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p> Seguridad y Prevención de Accidentes de Aviación</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>
                          Reglamento de Vuelos y Servicios de Tránsito Aéreo
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
                {showContPra && (
                  <div className="animate-fade-up">
                    <p className="text-center text-xl font-light mb-12 mx-4">
                      Para la obtención de la licencia de Piloto Privado de
                      Avión todo solicitante deberá haber completado por lo
                      menos <b className="font-medium">40 horas</b> de vuelo en
                      instrucción, que deberán incluir:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-5/6 mx-5 md:mx-auto mb-16">
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>
                          30 horas de vuelo, como mínimo, de doble comando; de
                          las cuales 6 horas de vuelo de travesía, incluyendo
                          una de no menos de 185 Km. / (100 NM) con 2
                          aterrizajes completos en 2 aeródromos diferentes. Uno
                          de estos aterrizajes deberá ser realizado en un
                          aeródromo controlado debiendo dejar registrado tal
                          aterrizaje
                        </p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>
                          10 horas de vuelo solo local, bajo supervisión y
                          control del Instructor de Vuelo
                        </p>
                      </li>
                    </ul>
                    <p className="text-center text-xl font-light mb-12 mx-4">
                      Si el alumno posee licencia de piloto de helicóptero,
                      giroplano, planeador o certificado de competencia de
                      piloto aeronave ULM, con una experiencia mínima de 10
                      horas como piloto al mando, el tiempo mínimo se podrá
                      reducir a 20 días, y la experiencia de vuelo en
                      instrucción se reducirá a <b>20 horas</b>, de las cuales:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 md:w-5/6 mx-5 md:mx-auto mb-16">
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>9 horas de vuelo en doble comando local</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>6 horas de vuelo doble comando en travesía</p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>5 horas de vuelo solo local</p>
                      </li>
                    </ul>
                    <p className="text-center text-xl font-light mb-12 mx-4">
                      La persona que requiera obtener esta licencia con un avión
                      multimotor terrestre deberá cumplir con todos los
                      requisitos que para el curso en avión monomotor terrestre
                      es requerido y completar, como mínimo, <b>50 horas</b> de
                      vuelo en instrucción, de las cuales
                    </p>
                    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:w-5/6 mx-5 md:mx-auto">
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>
                          40 horas de doble comando, que incluirán 6 horas de
                          vuelo de travesía, con una de no menos de 270 Km. /
                          (150 NM) con la realización de 2 aterrizajes completos
                          en 2 aeródromos diferentes. Uno de estos aterrizajes
                          deberá ser realizado en un aeródromo controlado
                          debiendo dejar registrado tal aterrizaje
                        </p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>
                          10 horas de vuelo solo local, bajo supervisión y
                          control del instructor de vuelo
                        </p>
                      </li>
                      <li className="flex items-center">
                        <span className="flex justify-center items-center mr-2 text-xxs">
                          <i class="bx bxs-circle"></i>
                        </span>
                        <p>
                          El piloto privado de avión que obtuvo su licencia con
                          un avión multimotor, carecerá de las atribuciones para
                          volar aviones monomotores
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
                {showDur && (
                  <div className="animate-fade-up md:w-5/6 mx-5 md:mx-auto flex justify-center items-center">
                    <p className="text-center text-xl font-light">
                      La duración mínima para la instrucción del curso de piloto
                      privado de avión será de{" "}
                      <b className="font-medium">30 días</b>, contados a partir
                      de la fecha en que realizo el primer vuelo de instrucción.
                      El tiempo máximo para completar el curso está fijado en 2
                      años, contados a partir de la fecha en que realizó el
                      primer vuelo de instrucción. Si por alguna razón el alumno
                      excediera los <b className="font-medium">2 años</b> sin
                      haber finalizado el curso se le reconocerá el 50% de sus
                      horas voladas por un período extra no mayor a 2 años, para
                      que obtenga su licencia. Pasado dicho período perderá el
                      total de las horas
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 h-60 bg-black relative">
          <div
            className="h-full"
            style={{
              backgroundImage: "url('/avion.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div
              className="flex justify-center items-center h-full backdrop-blur-sm"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
            >
              <Link
                href={"/aeronautica/aviones"}
                className="text-white md:text-gray-200 text-2xl md:text-3xl py-2 px-4 border-2 border-opacity-100 md:border-opacity-0 hover:text-white hover:border-opacity-100 border-white transition-all duration-500"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Aviones
              </Link>
            </div>
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
