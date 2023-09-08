import { Carousel } from "react-responsive-carousel";
import { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MainPage() {
  const carouselRef = useRef(null);

  const images = [
    {
      image: "/imagenPrincipal1.png",
      title: "AERO CLUB DE RAFAELA",
      description: "Un Club Social",
    },
    {
      image: "/imagenPrincipal2.png",
      title: "DIVERSIDAD DE ACTIVIDADES",
      description: "Siempre en Movimiento",
    },
  ];

  const handleScroll = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-white">
      <div className="w-full mx-auto">
        <div className="w-full h-screen relative lazy-load">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            interval={10000}
            infiniteLoop
            swipeable={false}
            ref={carouselRef}
          >
            {images.map((img, index) => (
              <div key={index} className="relative overflow-hidden">
                <img
                  className="w-full h-screen object-cover"
                  src={img.image}
                  alt={`Imagen ${index}`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-75 backdrop-blur-md p-8 text-white">
                  <h4
                    className="text-4xl md:text-5xl font-light mb-2"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                  >
                    {img.title}
                  </h4>
                  <p
                    className="text-4xl font-light italic"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                  >
                    {img.description}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
          <div
            className={`absolute text-white text-4xl bottom-16 left-1/2 transform -translate-x-1/2 hover:translate-y-1/2 cursor-pointer transition-transform duration-500`}
            onClick={handleScroll}
          >
            <div className="border-2 border-white rounded-full px-2 pt-2 pb-1">
              <i className="bx bx-chevrons-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;