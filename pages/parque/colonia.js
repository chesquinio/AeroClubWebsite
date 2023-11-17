import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { CampingData } from "@/model/CampingData";
import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import YouTube from "react-youtube";
import { useRouter } from "next/navigation";

function CampingPage({ campingData }) {
  const router = useRouter();
  useEffect(() => {
    if (!campingData[0].activeBotton) {
      router.push("/parque");
    }
  }, []);

  const videoId = "jR733uv4XD0";

  const opts = {
    maxHeight: 450,
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <Head>
        <title>Inscripciones Colonia | Aero Club Rafaela</title>
      </Head>
      <Header />
      <section className="mt-24 mb-10 flex justify-center items-start min-h-screen">
        <div className="bg-white rounded-lg shadow-lg px-4 sm:px-8 pb-6 mx-4 w-full sm:w-4/5 lg:w-1/2">
          <div className="h-96 my-6">
            <img
              className="object-cover w-full h-full rounded-md"
              src="/parque1.png"
              alt="Pileta Colonia"
            />
          </div>
          <h2
            className="font-medium text-3xl mb-8 text-center"
            style={{
              background: "linear-gradient(to right, #4EACF2, #004691)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Inscripción a la Colonia
          </h2>
          <div className="flex flex-col gap-5">
            <p>
              Arranca la temporada de verano y con ello la colonia de vacaciones
              del Aero Club, un lugar donde chicos y chicas pueden disfrutar de
              la pileta, el sol y muchísimos juegos.
            </p>
            <p>
              Para realizar la inscripción a la colonia, será necesario
              dirigirse al link que se encuentra debajo y rellenar los datos
              para completar el pago del abono. Una vez finalizado el pago, se
              le enviara un correo donde podrán encontrar nuevamente un link
              para terminar de rellenar los datos referidos a la ficha médica y
              autorizaciones de cada chico/a.
            </p>
            <p>
              La colonia arranca desde los 3 años y los horarios son los
              siguientes (estos horarios pueden estar sujetos a leves
              modificaciones):
            </p>
            <div className="flex flex-row justify-between md:mr-14 lg:mr-0 xl:mr-20">
              <ul>
                <li>Horarios de colonia:</li>
                <li>• Guarderia: 8h</li>
              </ul>
              <ul>
                <span>• Turno mañana:</span>
                <li>3 a 7 años: 9 a 12hs</li>
                <li>8 a 14 años: 9:15 a 12:15hs</li>
              </ul>
              <ul>
                <span>• Turno tarde:</span>
                <li>16 a 19hs</li>
              </ul>
            </div>
            <ul>
              <span>Certificados a presentar:</span>
              <li>- Certificado médico apto natatorio</li>
              <li>- Bucodental estampillado</li>
            </ul>
            <span>
              Toda la <b>información</b> detallada y <b>precios</b> de la
              colonia se encuentran{" "}
              <a
                href="https://aeroclub-website.s3.sa-east-1.amazonaws.com/1700087731558.pdf"
                target="_blanck"
                className="text-blue-500 underline"
              >
                aquí
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-8 mt-10">
            <div>
              <h4 className="text-center text-xl font-medium mb-4 text-gray-700">
                Cómo inscribirte siendo Socio
              </h4>
              <YouTube videoId={videoId} opts={opts} />
            </div>
            <div>
              <h4 className="text-center text-xl font-medium mb-4 text-gray-700">
                Cómo inscribirte <b>sin</b> ser Socio
              </h4>
              <div className="flex justify-center items-center h-full backdrop-blur-sm mt-2">
                <a
                  href="https://aeroclub-website.s3.sa-east-1.amazonaws.com/1700249638823.pdf"
                  target="_blanck"
                  className="text-gray-600 text-xl py-2 px-4 text-center border-2 border-opacity-100 border-gray-500 md:border-opacity-0 hover:text-gray-900 hover:border-opacity-100 transition-all duration-500"
                >
                  Instructivo de Inscripción
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-px bg-gray-600 my-5"></div>
            <p>
              Una vez realizado el pago, deberá acceder a la siguiente planilla
              y completar los datos requeridos, es importante que esto se haga y
              se envíe.
            </p>
            <div className="flex justify-center items-center h-full backdrop-blur-sm mt-4">
              <Link
                href="/parque/colonia/planilla"
                className="text-gray-600 text-xl py-2 px-4 text-center border-2 border-opacity-100 border-gray-500 md:border-opacity-0 hover:text-gray-900 hover:border-opacity-100 transition-all duration-500"
              >
                Planilla de Inscripción
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
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
