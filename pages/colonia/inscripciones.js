import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import {useState} from "react";

function CampingForm() {
  const [archivoPdf1, setArchivoPdf1] = useState(null);
  const [archivoPdf2, setArchivoPdf2] = useState(null);
  const router = useRouter()

  const handleArchivoPdf1Change = (event) => {
    const file = event.target.files[0];
    setArchivoPdf1(file);
  };

  const handleArchivoPdf2Change = (event) => {
    const file = event.target.files[0];
    setArchivoPdf2(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    router.push('/colonia')
    // setArchivoPdf1(null);
    // setArchivoPdf2(null);
  };

  return (
    <>
      <Header />
      <div className="h-screen mt-24 flex justify-center items-start">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 w-4/5 lg:w-1/2">
          <h2 className="font-medium text-2xl pb-2 text-center">
            Inscripcion a la Colonia
          </h2>
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
            <label className="block text-gray-700 font-normal mb-1">Edad</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              type="text"
              placeholder="Ingrese su edad"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-normal mb-1">
              Archivo PDF 1
            </label>
            <div className="relative">
              <label className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-300">
                <span className="text-blue-500">Seleccionar archivo</span>
                <input
                  onChange={handleArchivoPdf1Change}
                  className="hidden absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  type="file"
                  accept=".pdf"
                />
              </label>
              <span className="pl-2 text-gray-500">
                {archivoPdf1 ? archivoPdf1.name : "Ningún archivo seleccionado"}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-normal mb-1">
              Archivo PDF 2
            </label>
            <div className="relative">
              <label className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-300">
                <span className="text-blue-500">Seleccionar archivo</span>
                <input
                  onChange={handleArchivoPdf2Change}
                  className="hidden absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  type="file"
                  accept=".pdf"
                />
              </label>
              <span className="pl-2 text-gray-500">
                {archivoPdf2 ? archivoPdf2.name : "Ningún archivo seleccionado"}
              </span>
            </div>
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
