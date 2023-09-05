import Link from "next/link";

function InfoClub() {
  const infoClub = [
    {
      title: "Aeronáutica",
      image: "/aeronautica.png",
      description:
        "La actividad más importante del Aero Club es la aeronáutica, atrayendo a muchos socios...",
    },
    {
      title: "Tenis",
      image: "/tenis.jpg",
      description:
        "Las instalaciones cuentan con seis canchas de tenis de polvo de ladrillo, tres de ellas iluminadas...",
    },
    {
      title: "Colonia",
      image: "/colonia.png",
      description:
        "Las piletas son una de las principales actividades junto al gran espacio verde que dispone el club...",
    },
  ];

  return (
    <div id="next-page" className="flex flex-col mx-auto lg:flex-row items-center justify-center text-white gap-10 lg:gap-0 sm:w-2/3 lg:w-3/4 my-16 lg:mx-auto">
      {infoClub.map((info, index) => (
        <div
          key={index}
          className="w-full md:w-5/6 lg:w-3/4 h-96 rounded-3xl mx-5 py-4 px-4 transition-all group flex flex-col"
        >
          <Link
            href={`/${info.title.toLowerCase()}`}
            className="block relative w-full h-full rounded-3xl overflow-hidden transition-all group"
          >
            <img
              src={info.image}
              alt={info.title}
              className="w-full h-full object-cover object-center transition-transform transform scale-100 lg:group-hover:scale-105"
            />
            <div className="absolute inset-0 pb-8 pl-5 pr-16 flex flex-col items-start justify-end z-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 text-white">
              <h3 className="my-2 text-2xl">{info.title}</h3>
              <p className="text-sm">{info.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default InfoClub;
