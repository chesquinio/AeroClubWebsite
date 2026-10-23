import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="bg-moredark text-gray-300 py-5">
        <div className="w-4/5 m-auto">
          <div className="flex flex-col lg:flex-row lg:justify-center">
            <div className="flex flex-col lg:grid lg:grid-cols-2 items-start gap-8 ml-3 mt-5 text-white">
              <a href="#" className="text-lg font-ligh cursor-default">
                <i className="bx bxs-map"></i>
                <p className="text-gray-300 ml-2 inline text-sm">
                  RN34 220, Rafaela, Santa Fe
                </p>
              </a>
              <a
                className="text-xl font-light"
                href="https://www.instagram.com/aeroclubrafaela_/"
                target="_BLANCK"
              >
                <i className="bx bxl-instagram"></i>
                <p className="text-gray-300 ml-2 inline text-sm hover:text-ligthblue transition-all">
                  /aeroclubrafaela_
                </p>
              </a>
              <a
                className="text-xl font-light lg:col-span-2 text-center"
                href="https://www.facebook.com/search/top?q=aero%20club%20rafaela"
                target="_BLANCK"
              >
                <i className="bx bxl-facebook-square"></i>
                <p className="text-gray-300 ml-2 inline text-sm hover:text-ligthblue transition-all">
                  /AeroRafaela
                </p>
              </a>
            </div>
            <div className="lg:hidden h-px bg-gray-400 my-8"></div>
            <div className="hidden lg:block w-px bg-gray-400 mx-8"></div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-sm mx-auto w-4/5 text-center">
                © Copyright 2023 - AeroClub Rafaela - Todos los derechos
                reservados
              </p>
              <Link
                href="/privacidad"
                className="text-xs text-gray-400 hover:text-ligthblue transition-all underline decoration-gray-500 hover:decoration-ligthblue"
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
