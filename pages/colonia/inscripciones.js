import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function CampingForm() {
  return (
    <>
      <Header />
      <div className="h-screen mt-24 flex justify-center items-start">
        <form className="bg-white rounded-lg shadow-lg p-8 w-4/5 lg:w-1/2">
          <div className="mb-4">
            <label className="block text-gray-700 font-normal mb-1">
              Nombre
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              type="text"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-normal mb-1">
              Apellido
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              type="text"
              placeholder="Ingrese su apellido"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-normal mb-1">
              N° Documento
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              type="text"
              placeholder="Ingrese su N° de documento"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-normal mb-1">
              Edad
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              type="text"
              placeholder="Ingrese su edad"
            />
          </div>
          <button className="w-full bg-moreblue text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Enviar
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default CampingForm;
