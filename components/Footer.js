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
                target="_BLANCK"
              >
                <i className="bx bxl-instagram"></i><p className="text-gray-300 ml-2 inline text-sm hover:text-ligthblue transition-all">/aeroclubrafaela_</p>
              </a>
              <a
                className="text-xl font-light"
                href="https://www.facebook.com/search/top?q=aero%20club%20rafaela"
                target="_BLANCK"
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
          <div className="mx-auto h-px w-full xl:w-10/12 bg-gray-400 my-8"></div>
          <div className="mb-4">
            <p className="text-sm mx-auto w-4/5 text-center">Diseñador Web: Francis Willener</p>
            <div className="flex justify-center items-center gap-3 mt-3">
              <a href="mailto:willenerfrancis0@gmail.com" className="bg-gray-300 py-1 px-2 rounded-full text-moredark hover:text-red-400 transition-all">
                <i className="bx bxl-gmail"></i>
              </a>
              <a href="https://github.com/chesquinio" target="_BLANCK" className="bg-gray-300 py-1 px-2 rounded-full text-moredark hover:text-black transition-all">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/francis-willener-38369320b/" target="_BLANCK" className="bg-gray-300 py-1 px-2 rounded-full text-moredark hover:text-blue-400 transition-all">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
