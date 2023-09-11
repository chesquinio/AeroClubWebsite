import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TennisData } from "@/model/TennisData";
import { mongooseConnect } from "@/lib/mongoose";
import Link from "next/link";
import Head from "next/head";
//import axios from "axios";
//import jwtDecode from "jwt-decode";

function TennisPage({ tennisData }) {
  const router = useRouter();
  //const [userId, setUserId] = useState(null);

  /*
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.userId);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }

    const deleteExpiredReservations = async () => {
      try {
        await axios.delete("/api/expiredRes");
      } catch (error) {
        console.error("Error al eliminar los turnos vencidos:", error);
      }
    };

    deleteExpiredReservations();
  }, []);

  const handleReserveClick = () => {
    if (!userId) {
      router.push("/iniciar");
    } else {
      router.push("/tenis/reservas");
    }
  };
 */

  return (
    <>
      <Head>
        <title>Tenis | Aero Club Rafaela</title>
        <meta
          name="description"
          content="Las instalaciones cuentan con seis canchas de tenis de polvo de ladrillo, tres de ellas iluminadas."
        />
      </Head>
      <Header />
      <div className="lazy-load">
        <div
          className="mt-24 h-40 relative"
          style={{
            backgroundImage: "url('/tenis.jpg')",
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
              Tenis
            </h2>
          </div>
        </div>
        {/*
      <div className="mt-4 mx-5 flex justify-center">
        <button
          onClick={handleReserveClick}
          className="w-full max-w-sm bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Reservar un Turno
        </button>
      </div>
      <div className="mt-6 mx-5 flex justify-center">
        <Link
          href={"/tenis/mis_turnos"}
          className="text-center w-full max-w-sm bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Mis Turnos
        </Link>
      </div>
      */}

        <div>
          <div>
            <div className="flex flex-col lg:flex-row my-8 mx-4 lg:mx-auto max-w-7xl ">
              <div className="bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 md:w-2/3 lg:w-1/3 md:h-72 lg:mx-12 lg:mt-10 rounded-md mx-auto flex justify-center items-center">
                <img
                  src={tennisData[0].primaryImage}
                  className="object-cover rounded-md h-full w-full"
                  alt={tennisData[0].primaryTitle}
                />
              </div>
              <div className="text-center lg:text-left mt-8 md:mt-16 lg:w-2/3">
                <h3 className="font-light text-3xl mb-4">
                  {tennisData[0].primaryTitle}
                </h3>
                <p className="text-gray-600">{tennisData[0].primaryInfo}</p>
              </div>
            </div>
          </div>
          {/*tennisData[0].activeBotton && (
            <div
              className="h-64 mt-20"
              style={{
                backgroundImage: "url('/tenis2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="flex justify-center items-center h-full backdrop-blur-sm"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
              >
                <Link
                  href={"/tenis/inscripciones"}
                  className="text-white md:text-gray-200 text-2xl md:text-3xl py-2 px-4 border-2 border-opacity-100 md:border-opacity-0 hover:text-white hover:border-opacity-100 border-white transition-all duration-500"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  {tennisData[0].textBotton}
                </Link>
              </div>
            </div>
          )*/}
          <div className="flex flex-col gap-6 max-w-7xl mx-5 mt-16 md:mt-20 md:mx-auto md:px-5 mb-4">
            <h4 className="font-light text-3xl my-2">Clases de Tenis</h4>
            <div className="flex flex-col md:flex-row mb-8">
              <p className="md:w-2/3 md:pr-8">
                En el Aero Club, nos enorgullecemos de brindar diversas
                oportunidades para sumergirse en el mundo del tenis. Contamos
                con un equipo de profesores que imparten clases al público de
                todas las edades, desde los más jóvenes ansiosos por dar sus
                primeros pasos en la cancha hasta adultos que desean
                perfeccionar sus habilidades y disfrutar del juego. Nuestra
                escuelita de tenis, donde realizamos actividad constante y
                entusiasta, acoge a numerosos chicos y chicas con ganas de
                aprender a jugar mientras se divierten. Además, nuestras clases
                para adultos han demostrado ser una opción sumamente popular,
                atrayendo a aquellos que sienten una afinidad por este deporte
                dinámico. En definitiva, en el Aero Club, no solo promovemos la
                enseñanza del tenis, sino que también creamos un ambiente
                inclusivo y estimulante donde jugadores de todas las edades
                pueden desarrollar sus habilidades y compartir su pasión por
                este deporte.
              </p>
              <div className="md:w-1/3 bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 rounded mx-auto mt-5 md:my-0 flex justify-center items-center">
                <img
                  className="object-cover h-full w-full rounded"
                  src="https://aeroclub-website.s3.amazonaws.com/1694443231041.png"
                  alt="Pelota de tenis"
                />
              </div>
            </div>
            <div className="h-px bg-gray-600 md:hidden"></div>
            <div className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/3 bg-transparent h-52 w-11/12 sm:w-4/5 sm:h-60 rounded mx-auto my-7 md:my-0 flex justify-center items-center">
                <img
                  className="object-cover h-full w-full rounded"
                  src="https://aeroclub-website.s3.amazonaws.com/1694442845646.png"
                  alt="Canchas de tenis"
                />
              </div>
              <p className="md:w-2/3 md:pl-8">
                El club se enorgullece de fomentar un espíritu competitivo entre
                sus miembros al organizar regularmente torneos de dobles que
                cubren todas las categorías y niveles de habilidad en el tenis.
                Estos apasionantes encuentros no solo ofrecen una oportunidad
                invaluable para los jugadores de perfeccionar sus habilidades y
                estrategias, sino que también contribuyen significativamente a
                consolidar la reputación del club como un epicentro del tenis en
                la ciudad. La emoción y la intensidad que caracterizan estos
                torneos atraen a jugadores de diversos lugares, quienes no solo
                visitan el club para competir, sino también para experimentar el
                ambiente acogedor que lo distingue. Así, el Aero Club se erige
                como un lugar de encuentro para los amantes del tenis,
                fortaleciendo la comunidad deportiva y atrayendo a entusiastas
                de este apasionante deporte de todas partes.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default TennisPage;

export async function getServerSideProps(context) {
  try {
    await mongooseConnect();

    const data = await TennisData.find({});
    const serializedData = JSON.parse(JSON.stringify(data));

    return {
      props: {
        tennisData: serializedData,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        tennisData: [],
      },
    };
  }
}
