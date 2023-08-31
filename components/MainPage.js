import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TextLimit from "./TextLimit";

function MainPage() {
  const [newImages, setNewImages] = useState([]);

  useEffect(() => {
    axios
      .get("/api/news")
      .then((response) => {
        setNewImages(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las imágenes:", error);
      });
  }, []);

  const visibleImages = newImages.slice(0, 5);

  return (
    <div className="mt-20 w-full flex items-center justify-center bg-gray-100">
      <div className="w-full mx-auto">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          autoPlay
          infiniteLoop
        >
          {visibleImages.map((newImag, index) => (
            <div key={index} className="overflow-hidden">
              <img
                className="w-full carouselHeigth object-cover"
                src={newImag.images[0]}
                alt={`Imagen ${index}`}
              />
              <div className="absolute bottom-0 right-0 left-0 px-4 pt-4 pb-8 bg-dark">
                <h4 className=" text-white  text-4xl font-light">
                  {newImag.title}
                </h4>
                <div className="text-white text-lg font-normal">
                  <TextLimit text={newImag.description} maxWords={15} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MainPage;
