import React, { useEffect, useState } from "react";
import Link from "next/link";
import { isAuthenticated } from "@/lib/auth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [options, setOptions] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const showOptions = () => {
    setOptions(!options);
  };

  const headerStyle = `fixed z-10 top-0 left-0 w-full flex justify-between items-center transition-all duration-400 px-4 bg-white
  ${isScrolled ? "h-16" : "h-24"}`;

  const linkStyle =
    "text-gray-500 text-lg font-ligth hover:text-gray-900 transition-all duration-400";

  return (
    <header className={headerStyle}>
      <div className="grid grid-cols-3 w-full max-w-screen-2xl mx-auto">
        <Link href={"/"} className="flex items-center ml-1">
          <img
            src="https://aeroclub-website.s3.amazonaws.com/1693577423224.png"
            alt="Logo"
            className="rounded-md w-10"
          />
        </Link>
        <div className="hidden md:flex justify-center items-center gap-7">
          <div className="flex items-center">
            <Link href={"/"} className={linkStyle}>
              Inicio
            </Link>
            <div
              className={`${
                isScrolled ? "h-9" : "h-12"
              } w-0.5 bg-gray-400 md:ml-8 lg:ml-12 transition-all duration-400`}
            ></div>
          </div>
          <Link href={"/noticias"} className={linkStyle}>
            Noticias
          </Link>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                onClick={showOptions}
                className={`${linkStyle} inline-flex items-center gap-x-1.5`}
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Aeronáutica
              </button>
            </div>

            {options && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div role="none">
                  <Link
                    href="/aeronautica"
                    className="text-gray-700 hover:bg-gray-100 rounded-tl-md rounded-tr-md block px-4 py-3 text-md"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Principal
                  </Link>
                  {/* <Link
                    href="/aeronautica/reservas"
                    className="text-gray-700 hover:bg-gray-100 rounded-bl-md rounded-br-md block px-4 py-3 text-md"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Reservas
                  </Link> */}
                </div>
              </div>
            )}
          </div>
          <Link href={"/tenis"} className={linkStyle}>
            Tenis
          </Link>
          <Link href={"/parque"} className={linkStyle}>
            Parque
          </Link>

          {/* !isLogged && (
             <Link href={"/socios"} className={linkStyle}>
            Socios
          </Link>   
          )}
          {isLogged && (
            <button
              className={linkStyle}
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          ) */}
        </div>
        <div className="hidden md:flex justify-end items-center">
          <a
            href="https://acr.brio.club/accounts/login/?next=/"
            target="_blanck"
            className={linkStyle}
          >
            Sede Virtual
          </a>
        </div>
      </div>

      {/* Icono de menú en dispositivos móviles */}
      <div className="md:hidden z-10 cursor-pointer flex items-center">
        {isMenuOpen ? (
          <div className="fixed top-8 right-4">
            <svg
              onClick={closeMenu}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        ) : (
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
      {/* Menú desplegable en dispositivos móviles */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white p-4 shadow-md overflow-y-auto">
          <div className="flex flex-row">
            <Link href={"/"} className="flex items-center ml-1 mt-3">
              <img
                src="https://aeroclub-website.s3.amazonaws.com/1693577423224.png"
                alt="Logo"
                className="rounded-md w-10"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex justify-between rounded hover:bg-gray-100 transition">
              <Link
                href={"/"}
                className="block py-2 w-full text-xl text-gray-600 ml-5"
                onClick={closeMenu}
              >
                Inicio
              </Link>
              <div className="flex justify-center items-center mr-2 text-lg text-gray-600">
                <i class="bx bx-plus"></i>
              </div>
            </div>
            <div className="flex justify-between rounded hover:bg-gray-100 transition">
              <Link
                href={"/noticias"}
                className="block py-2 w-full text-xl text-gray-600 ml-5"
                onClick={closeMenu}
              >
                Noticias
              </Link>
              <div className="flex justify-center items-center mr-2 text-lg text-gray-600">
                <i class="bx bx-plus"></i>
              </div>
            </div>
            <div className="flex justify-between rounded hover:bg-gray-100 transition">
              <button
                className="block py-2 text-left w-full text-xl text-gray-600 ml-5"
                onClick={showOptions}
              >
                Aeronáutica
              </button>
              <div className="flex justify-center items-center mr-2 text-lg text-gray-600">
                <i class="bx bx-plus"></i>
              </div>
            </div>
            {options && (
              <div role="none">
                <Link
                  href="/aeronautica"
                  onClick={closeMenu}
                  className="text-gray-700 hover:bg-gray-100 block py-2 pl-10 pr-4 text-left w-full text-md"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Principal
                </Link>
                {/* <Link
                  href="/aeronautica/reservas"
                  onClick={closeMenu}
                  className="text-gray-700 hover:bg-gray-100 block py-2 pl-10 pr-4 text-left w-full text-md"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Reservas
                </Link> */}
              </div>
            )}
            <div className="flex justify-between rounded hover:bg-gray-100 transition">
              <Link
                href={"/tenis"}
                className="block py-2 w-full text-xl text-gray-600 ml-5"
                onClick={closeMenu}
              >
                Tenis
              </Link>
              <div className="flex justify-center items-center mr-2 text-lg text-gray-600">
                <i class="bx bx-plus"></i>
              </div>
            </div>
            <div className="flex justify-between rounded hover:bg-gray-100 transition">
              <Link
                href={"/parque"}
                className="block py-2 w-full text-xl text-gray-600 ml-5"
                onClick={closeMenu}
              >
                Parque
              </Link>
              <div className="flex justify-center items-center mr-2 text-lg text-gray-600">
                <i class="bx bx-plus"></i>
              </div>
            </div>
            <div className="flex justify-between rounded hover:bg-gray-100 transition">
              <a
                href="https://acr.brio.club/accounts/login/?next=/"
                target="_blanck"
                className="block py-2 w-full text-xl text-gray-600 ml-5"
                onClick={closeMenu}
              >
                Sede Virtual
              </a>
              <div className="flex justify-center items-center mr-2 text-lg text-gray-600">
                <i class="bx bx-plus"></i>
              </div>
            </div>
            {/* !isLogged && (
              <Link
              href={"/socios"}
              className="block py-2 w-full rounded text-center text-xl text-gray-600 hover:bg-gray-100 transition"
              onClick={closeMenu}
            >
              Socios
            </Link>
            )}
            {isLogged && (
              <button
                className="block py-5 w-full rounded text-center text-xl text-gray-600"
                onClick={() => {
                  closeMenu();
                  handleLogout();
                }}
              >
                Cerrar Sesión
              </button>
              ) */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
