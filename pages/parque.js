import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { CampingData } from "@/model/CampingData";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function CampingPage({ campingData }) {
  return (
    <>
      <Head>
        <title>Parque | Aero Club Rafaela</title>
        <meta
          name="description"
          content="Las piletas son una de las principales actividades junto al gran espacio verde que dispone el club."
        />
      </Head>
      <Header />
      <div className="lazy-load">
        <div
          className="mt-24 h-40 relative"
          style={{
            backgroundImage: "url('/parque.png')",
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
              Parque
            </h2>
          </div>
        </div>
        <div>
          <div>
            <div className="flex flex-col lg:flex-row my-8 mx-4 lg:mx-auto max-w-7xl ">
              <div className="bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 md:w-2/3 lg:w-1/3 md:h-72 lg:mx-12 lg:mt-10 rounded-md mx-auto flex justify-center items-center">
                <img
                  src={campingData[0].primaryImage}
                  className="object-cover rounded-md h-full w-full"
                  alt={campingData[0].primaryTitle}
                />
              </div>
              <div className="text-center lg:text-left mt-8 md:mt-16 lg:w-2/3">
                <h3 className="font-light text-3xl mb-4">
                  {campingData[0].primaryTitle}
                </h3>
                <p className="text-gray-600">{campingData[0].primaryInfo}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 max-w-7xl mx-5 mt-16 md:mt-20 md:mx-auto md:px-5 mb-4">
            <h4 className="font-light text-3xl my-2">Actividades</h4>
            <div className="flex flex-col md:flex-row mb-8">
              <p className="md:w-2/3 md:pr-8">
                El parque del Aero Club cuenta con la posibilidad de realizar
                diferentes actividades, una de las más importantes es la colonia
                de vacaciones, la cual todos los años acuden cientos de chicos y
                chicas de todas las edades, permitiendo que jueguen y pasen un
                buen rato. Además, el parque ofrece una amplia gama de opciones
                recreativas para todas las edades. Los socios pueden disfrutar
                de áreas de picnic y asadores, o también zonas de juegos
                temáticas para los niños. Asimismo, el Aero Club organiza
                eventos especiales durante todo el año, desde show de acrobacias
                de aviones hasta competencias deportivas. Esto convierte al
                parque en un espacio dinámico y alegre que atrae a personas en
                busca de entretenimiento al aire libre.
              </p>
              <div className="md:w-1/3 bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 rounded mx-auto mt-5 md:my-0 flex justify-center items-center">
                <img
                  className="object-cover h-full w-full rounded"
                  src="https://aeroclub-website.s3.amazonaws.com/1694440472835.png"
                  alt="Entrada al parque"
                />
              </div>
            </div>
            <div className="h-px bg-gray-600 md:hidden"></div>
            <div className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/3 bg-transparent h-52 w-11/12 sm:w-4/5 sm:h-60 rounded mx-auto my-7 md:my-0 flex justify-center items-center">
                <img
                  className="object-cover h-full w-full rounded"
                  src="https://aeroclub-website.s3.amazonaws.com/1694440480773.png"
                  alt="Vista aerea del club"
                />
              </div>
              <p className="md:w-2/3 md:pl-8">
                Dentro de las opciones de entretenimiento que ofrece el parque
                del Aero Club, se encuentran actividades que van más allá del
                camping. El club amplía sus horizontes brindando clases de
                natación que abarcan un amplio espectro de edades y niveles de
                habilidad. Desde los más pequeños hasta adultos que buscan
                perfeccionar su técnica, el equipo de instructores se dedica a
                impartir lecciones personalizadas y seguras. Además de todo
                esto, el Aero Club también se enorgullece en ofrecer cursos de
                buceo, una experiencia que se lleva a cabo con regularidad.
                Estos cursos, guiados por expertos certificados, proporcionan a
                los entusiastas del buceo las habilidades y el conocimiento
                necesario para explorar las profundidades acuáticas con
                confianza y seguridad. Desde el aprendizaje de las técnicas
                básicas hasta la inmersión en entornos más desafiantes.
              </p>
            </div>
          </div>
          {campingData[0].activeBotton && (
            <div
              className="h-64 my-16"
              style={{
                backgroundImage: "url('/imagenPrincipal2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="flex justify-center items-center h-full backdrop-blur-sm"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
              >
                <Link
                  href={"/parque/colonia"}
                  className="text-white md:text-gray-200 text-2xl md:text-3xl py-2 px-4 border-2 border-opacity-100 md:border-opacity-0 hover:text-white hover:border-opacity-100 border-white transition-all duration-500"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  {campingData[0].textBotton}
                </Link>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CampingPage;

export async function getServerSideProps(context) {
  try {
    await mongooseConnect();

    const data = await CampingData.find({});
    const serializedData = JSON.parse(JSON.stringify(data));

    return {
      props: {
        campingData: serializedData,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        campingData: [],
      },
    };
  }
}
