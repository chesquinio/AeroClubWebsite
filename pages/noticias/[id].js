"use client"
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { News } from "@/model/News";
import { Carousel } from "react-responsive-carousel";

function OneNew({ oneNew }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIndicators, setShowIndicators] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener('resize', updateShowIndicators);

    return () => {
      window.removeEventListener('resize', updateShowIndicators);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % oneNew.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + oneNew.images.length) % oneNew.images.length
    );
  };

  const updateShowIndicators = () => {
    setShowIndicators(window.innerWidth <= 768);
  };

  const date = new Date(oneNew.createdAt).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <>
      <Header />
      <div className="min-h-screen mx-5 lazy-load">
        <div className="flex flex-col gap-1 rounded-md shadow-md bg-white mt-28 mb-6 mx-auto container relative">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={showIndicators}
            selectedItem={currentIndex}
          >
            {oneNew.images.map((image, index) => (
              <div key={index} className="p-3 h-full w-full">
                <img
                  className="object-cover w-full h-full rounded-md"
                  src={image}
                  alt={oneNew.title}
                />
                {currentIndex > 0 && (
                  <button
                    className=" hidden md:inline absolute left-8 top-1/2 transform -translate-y-1/2 text-3xl text-white bg-moreblue hover:bg-cyan-700 transition-all rounded-full  px-2 py-1"
                    onClick={prevSlide}
                  >
                    <p className="pr-0.5 pt-1">
                      <i className="bx bx-chevrons-left"></i>
                    </p>
                  </button>
                )}
                {currentIndex < oneNew.images.length - 1 && (
                  <button
                    className="hidden md:inline absolute right-8 top-1/2 transform -translate-y-1/2 text-3xl text-white bg-moreblue hover:bg-cyan-700 transition-all rounded-full px-2 py-1"
                    onClick={nextSlide}
                  >
                    <p className="pl-0.5 pt-1">
                      <i className="bx bx-chevrons-right"></i>
                    </p>
                  </button>
                )}
              </div>
            ))}
          </Carousel>

          <h3 className="title font-medium mx-5 mt-3">{oneNew.title}</h3>
          <p className="mx-5 my-3">{oneNew.description}</p>
          <div className="flex justify-end m-5">
            <p className="text-gray-500 text-md font-light">{date}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OneNew;

export async function getServerSideProps(context) {
  const id = context.params.id;
  await mongooseConnect();

  const oneNew = await News.findOne({ _id: id });
  const serializedOneNew = JSON.parse(JSON.stringify(oneNew));

  return {
    props: {
      oneNew: serializedOneNew,
    },
  };
}
