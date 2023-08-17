import React, { useEffect, useState } from "react";
import Link from "next/link";
import { isAuthenticated } from "@/lib/auth";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLogged(isAuthenticated());
  }, []);

  const clearAuthToken = () => {
    localStorage.removeItem("token");
  };

  const handleLogout = () => {
    clearAuthToken();

    window.location.href = "/";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const headerStyle = `fixed z-10 top-0 left-0 w-full h-20 flex justify-between items-center px-4 bg-ligthblue`;

  const linkStyle =
    "text-white text-xl font-ligth hover:text-blue-100 transition-colors duration-300";

  return (
    <header className={headerStyle}>
      <div className="grid grid-cols-3 w-full max-w-screen-xl mx-auto">
        <Link href={"/"} className="flex items-center ml-1">
          <img
            src="https://aeroclub-website.s3.amazonaws.com/1691463050161.jpg"
            alt="Logo"
            className="rounded-md w-10"
          />
        </Link>
        <div className="hidden md:flex justify-center items-center space-x-10">
          <div className="flex items-center">
            <Link href={"/"} className={linkStyle}>
              Home
            </Link>
            <div className="h-12 w-0.5 bg-white ml-12"></div>
          </div>
          <Link href={"/tenis"} className={linkStyle}>
            Tenis
          </Link>
          <Link href={"/aeroclub"} className={linkStyle}>
            AeroClub
          </Link>
          <Link href={"/colonia"} className={linkStyle}>
            Colonia
          </Link>
        </div>
        <div className="hidden md:flex justify-end items-center space-x-6 mr-7">
          {!isLogged && (
            <Link href={"/iniciar"} className="text-white text-xl font-ligth">
              Iniciar Sesión
            </Link>
          )}
          {isLogged && (
            <button
              className="text-white text-lg font-ligth"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
      {/* Icono de menú en dispositivos móviles */}
      <div className="md:hidden z-10 cursor-pointer flex items-center">
        {isMenuOpen ? (
          <svg
            onClick={closeMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
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
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-ligthblue p-4 shadow-md overflow-y-auto">
          <div className="flex flex-row">
            <Link href={"/"} className="flex items-center ml-1 mt-1">
              <img
                src="https://aeroclub-website.s3.amazonaws.com/1691463050161.jpg"
                alt="Logo"
                className="rounded-md w-10"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-4">
            <Link
              href={"/"}
              className="block py-2 w-full rounded text-center text-xl text-white hover:bg-moreligthblue transition"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href={"/tenis"}
              className="block py-2 w-full rounded text-center text-xl text-white hover:bg-moreligthblue transition"
              onClick={closeMenu}
            >
              Tenis
            </Link>
            <Link
              href={"/aeroclub"}
              className="block py-2 w-full rounded text-center text-xl text-white hover:bg-moreligthblue transition"
              onClick={closeMenu}
            >
              AeroClub
            </Link>
            <Link
              href={"/colonia"}
              className="block py-2 w-full rounded text-center text-xl text-white hover:bg-moreligthblue transition"
              onClick={closeMenu}
            >
              Colonia
            </Link>
            {!isLogged && (
              <Link
                href={"/iniciar"}
                className="block py-5 w-full rounded text-center text-gray-300 text-xl"
                onClick={closeMenu}
              >
                Iniciar Sesión
              </Link>
            )}
            {isLogged && (
              <button
                className="block py-5 w-full rounded text-center text-xl text-gray-300"
                onClick={() => {
                  closeMenu();
                  handleLogout();
                }}
              >
                Cerrar Sesión
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
