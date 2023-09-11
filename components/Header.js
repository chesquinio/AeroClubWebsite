import React, { useEffect, useState } from "react";
import Link from "next/link";
import { isAuthenticated } from "@/lib/auth";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const headerStyle = `fixed z-10 top-0 left-0 w-full flex justify-between items-center transition-all duration-400 px-4 bg-white
  ${isScrolled ? 'h-16' : 'h-24'}`;

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
        <div className="hidden md:flex justify-center items-center space-x-10">
          <div className="flex items-center">
            <Link href={"/"} className={linkStyle}>
              Inicio
            </Link>
            <div className={`${isScrolled ? 'h-9' : 'h-12'} w-0.5 bg-gray-400 ml-12 transition-all duration-400`}></div>
          </div>
          <Link href={"/noticias"} className={linkStyle}>
            Noticias
          </Link>
          <Link href={"/aeronautica"} className={linkStyle}>
            Aeronáutica
          </Link>
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
            className="w-8 h-8 text-gray-500"
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
                <i class='bx bx-plus'></i>
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
                <i class='bx bx-plus'></i>
              </div>
            </div>
            <div className="flex justify-between rounded hover:bg-gray-100 transition">
              <Link
                href={"/aeronautica"}
                className="block py-2 w-full text-xl text-gray-600 ml-5"
                onClick={closeMenu}
              >
                Aeronáutica
              </Link>
              <div className="flex justify-center items-center mr-2 text-lg text-gray-600">
                <i class='bx bx-plus'></i>
              </div>
            </div>
            <div className="flex justify-between rounded hover:bg-gray-100 transition">
              <Link
                href={"/tenis"}
                className="block py-2 w-full text-xl text-gray-600 ml-5"
                onClick={closeMenu}
              >
                Tenis
              </Link>
              <div className="flex justify-center items-center mr-2 text-lg text-gray-600">
                <i class='bx bx-plus'></i>
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
                <i class='bx bx-plus'></i>
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
