import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-moredark text-gray-300 py-5">
        <div className="w-4/5 m-auto">
          <div className="flex flex-col lg:flex-row lg:justify-center">
            <div className="flex flex-col lg:grid lg:grid-cols-2 items-start gap-8 ml-3 mt-5 text-white">
              <a href="#" className="text-lg font-ligh cursor-default">
                <i className="bx bxs-map"></i><p className="text-gray-300 ml-2 inline text-sm">RN34 220, Rafaela, Santa Fe</p>
              </a>
              <a className="text-xl font-light" href="tel:+54 9 3492 42-2219">
                <i className="bx bxs-phone"></i><p className="text-gray-300 ml-2 inline text-sm hover:text-ligthblue transition-all">+54 9 3492 42-2219</p>
              </a>
              <a
                className="text-xl font-light"
                href="https://www.instagram.com/aeroclubrafaela_/"
              >
                <i className="bx bxl-instagram"></i><p className="text-gray-300 ml-2 inline text-sm hover:text-ligthblue transition-all">/aeroclubrafaela_</p>
              </a>
              <a
                className="text-xl font-light"
                href="https://www.facebook.com/search/top?q=aero%20club%20rafaela"
              >
                <i className="bx bxl-facebook-square"></i><p className="text-gray-300 ml-2 inline text-sm hover:text-ligthblue transition-all">/AeroRafaela</p>
              </a>
            </div>
            <div className="lg:hidden h-px bg-gray-400 my-8"></div>
            <div className="hidden lg:block w-px bg-gray-400 mx-8"></div>
            <div className="flex justify-center items-center">
              <p className="text-sm mx-auto w-4/5 text-center">
                © Copyright 2023 - AeroClub Rafaela - Todos los derechos
                reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
