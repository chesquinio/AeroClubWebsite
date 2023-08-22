import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function AeroclubPage() {
  return (
    <>
      <Header />
      <div
        className="mt-24 h-40 relative"
        style={{
          backgroundImage:
            "url('https://aeroclub-website.s3.amazonaws.com/1692384863108.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="flex justify-center items-center h-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        >
          <h2 className="text-white text-4xl md:text-5xl">AeroClub</h2>
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-col lg:flex-row my-8 mx-4 lg:mx-auto max-w-7xl ">
            <div className="bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 md:w-2/3 lg:w-full md:h-72 lg:mx-12 lg:mt-10 rounded mx-auto flex justify-center items-center">
              Imagen
            </div>
            <div className="text-center lg:text-left mt-8">
              <h3 className="font-light text-3xl mb-4">Titulo Secundario</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam illo eius vitae quas impedit repellat voluptas enim
                magnam saepe repellendus, atque quasi itaque ab, optio
                accusantium veritatis dignissimos? Aliquid facere quia aperiam
                hic tenetur unde sit, ea provident quidem saepe?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-7xl mx-5 mt-10 md:mt-24 md:mx-auto md:px-5 mb-4">
          <h4 className="font-light text-3xl my-2">Historia</h4>
          <div className="flex flex-col md:flex-row mb-8">
            <p className="md:w-2/3 md:pr-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium eius libero cum rem! Eos corrupti commodi repudiandae,
              rem vel quidem debitis cupiditate optio? Voluptatum ex nesciunt
              repellat magnam nihil perspiciatis, repellendus minus inventore
              asperiores sapiente nobis qui neque dolore voluptas illo porro
              debitis quo doloribus commodi soluta molestiae ea dolorum sed?
              Adipisci, minima praesentium quisquam, dolores, asperiores facere
              aperiam magnam laudantium similique voluptate natus odit commodi
              suscipit! Eaque ad consequatur minus consequuntur architecto
              delectus. Quas, corrupti officia a repellendus, esse ab obcaecati,
              cupiditate minus laboriosam dicta laborum repudiandae soluta rerum
              dolores iure explicabo quos veniam perferendis illum sint. Quo,
              atque?
            </p>
            <div className="md:w-1/3 bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 rounded mx-auto my-5 md:my-0 flex justify-center items-center">
              Imagen
            </div>
          </div>
          <div className="h-px bg-gray-600 md:hidden"></div>
          <div className="flex flex-col md:flex-row mb-8">
            <div className="md:w-1/3 bg-gray-300 h-52 w-11/12 sm:w-4/5 sm:h-60 rounded mx-auto my-5 md:my-0 flex justify-center items-center">
              Imagen
            </div>
            <p className="md:w-2/3 md:pl-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              eligendi minima laborum! Sequi, ratione. Dignissimos voluptatem
              totam ipsa qui veniam nisi adipisci, obcaecati laborum consectetur
              repellat autem nulla, vero assumenda et amet accusantium. Nam est
              delectus facilis nisi repellendus recusandae voluptatum? Eligendi
              fugiat error nobis impedit veritatis laboriosam repudiandae, magni
              similique minus eum omnis perferendis, ut eveniet dolorem nisi
              labore voluptates fugit quod. Sed eligendi ut labore, numquam
              maiores fugit culpa nemo, aspernatur velit saepe rerum distinctio
              voluptatem dignissimos mollitia! Facere eius, ullam quam
              reiciendis aperiam, itaque odit laudantium sequi at molestiae quia
              eligendi nemo recusandae saepe quae tempore. Pariatur.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AeroclubPage;
