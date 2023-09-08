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
        <title>Colonia | Aero Club Rafaela</title>
        <meta
          name="description"
          content="Las piletas son una de las principales actividades junto al gran espacio verde que dispone el club."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <Header />
      <div className="lazy-load">
        <div
          className="mt-24 h-40 relative"
          style={{
            backgroundImage:
              "url('/colonia.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="flex justify-center items-center h-full"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            <h2 className="text-white text-4xl md:text-5xl" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Colonia</h2>
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
              <div className="text-center lg:text-left mt-8 lg:w-2/3">
                <h3 className="font-light text-3xl mb-4">
                  {campingData[0].primaryTitle}
                </h3>
                <p className="text-gray-600">{campingData[0].primaryInfo}</p>
              </div>
            </div>
          </div>
          {campingData[0].activeBotton && (
            <div
              className="h-64 mt-20"
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
                  href={"/colonia/inscripciones"}
                  className="text-white md:text-gray-200 text-2xl md:text-3xl py-2 px-4 border-2 border-opacity-100 md:border-opacity-0 hover:text-white hover:border-opacity-100 border-white transition-all duration-500"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  {campingData[0].textBotton}
                </Link>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-6 max-w-7xl mx-5 mt-10 md:mx-auto md:px-5 mb-4">
            <h4 className="font-light text-3xl my-2">Historia</h4>
            <div className="flex flex-col md:flex-row mb-8">
              <p className="md:w-2/3 md:pr-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium eius libero cum rem! Eos corrupti commodi
                repudiandae, rem vel quidem debitis cupiditate optio? Voluptatum
                ex nesciunt repellat magnam nihil perspiciatis, repellendus
                minus inventore asperiores sapiente nobis qui neque dolore
                voluptas illo porro debitis quo doloribus commodi soluta
                molestiae ea dolorum sed? Adipisci, minima praesentium quisquam,
                dolores, asperiores facere aperiam magnam laudantium similique
                voluptate natus odit commodi suscipit! Eaque ad consequatur
                minus consequuntur architecto delectus. Quas, corrupti officia a
                repellendus, esse ab obcaecati, cupiditate minus laboriosam
                dicta laborum repudiandae soluta rerum dolores iure explicabo
                quos veniam perferendis illum sint. Quo, atque?
              </p>
              <div className="md:w-1/3 bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 rounded mx-auto mt-5 md:my-0 flex justify-center items-center">
                Imagen
              </div>
            </div>
            <div className="h-px bg-gray-600 md:hidden"></div>
            <div className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/3 bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 rounded mx-auto my-7 md:my-0 flex justify-center items-center">
                Imagen
              </div>
              <p className="md:w-2/3 md:pl-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                eligendi minima laborum! Sequi, ratione. Dignissimos voluptatem
                totam ipsa qui veniam nisi adipisci, obcaecati laborum
                consectetur repellat autem nulla, vero assumenda et amet
                accusantium. Nam est delectus facilis nisi repellendus
                recusandae voluptatum? Eligendi fugiat error nobis impedit
                veritatis laboriosam repudiandae, magni similique minus eum
                omnis perferendis, ut eveniet dolorem nisi labore voluptates
                fugit quod. Sed eligendi ut labore, numquam maiores fugit culpa
                nemo, aspernatur velit saepe rerum distinctio voluptatem
                dignissimos mollitia! Facere eius, ullam quam reiciendis
                aperiam, itaque odit laudantium sequi at molestiae quia eligendi
                nemo recusandae saepe quae tempore. Pariatur.
              </p>
            </div>
          </div>
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
