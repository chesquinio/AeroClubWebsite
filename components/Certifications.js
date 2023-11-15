import { useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";

function Certifications({
  certificadoMedico,
  bucoDental,
  setCertificadoMedico,
  setBucoDental,
  setMessage,
}) {
  const [loadingPdf1, setLoadingPdf1] = useState(false);
  const [loadingPdf2, setLoadingPdf2] = useState(false);

  async function uploadPdf1(ev) {
    setLoadingPdf1(true);
    const files = ev.target?.files;

    if (files?.length > 0 && files[0].type === "application/pdf") {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setCertificadoMedico(res.data.links);
      setLoadingPdf1(false);
    } else {
      setMessage(
        "Verifique el tipo de archivo cargado, solo cargue archivos de formato PDF"
      );
      setLoadingPdf1(false);
    }
  }

  async function uploadPdf2(ev) {
    setLoadingPdf2(true);
    const files = ev.target?.files;

    if (files?.length > 0 && files[0].type === "application/pdf") {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setBucoDental(res.data.links);
      setLoadingPdf2(false);
    } else {
      setMessage(
        "Verifique el tipo de archivo cargado, solo cargue archivos de formato PDF"
      );
      setLoadingPdf2(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 mb-4">
      <div className="md:w-1/2">
        <label className="block text-gray-700 font-normal mb-1">
          Certificado médico (APTO NATATORIO)
        </label>
        <div className="relative">
          <label className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-300">
            {!loadingPdf1 ? (
              <>
                <span
                  className={`${
                    certificadoMedico ? "text-gray-500" : "text-blue-500"
                  }`}
                >
                  Seleccionar PDF
                </span>
                <input
                  onChange={uploadPdf1}
                  className="hidden absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  type="file"
                  accept="application/pdf"
                />
              </>
            ) : (
              <div className="flex justify-center items-center h-6">
                <Spinner />
              </div>
            )}
          </label>
          <span className="pl-2 text-gray-500">
            {certificadoMedico
              ? "PDF Seleccionado"
              : "Ningún archivo seleccionado"}
          </span>
        </div>
      </div>
      <div className="md:w-1/2">
        <label className="block text-gray-700 font-normal mb-1">
          Bucodental estampillado
        </label>
        <div className="relative">
          <label className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-300">
            {!loadingPdf2 ? (
              <>
                <span
                  className={`${
                    bucoDental ? "text-gray-500" : "text-blue-500"
                  }`}
                >
                  Seleccionar PDF
                </span>
                <input
                  onChange={uploadPdf2}
                  className="hidden absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  type="file"
                  accept="application/pdf"
                />
              </>
            ) : (
              <div className="flex justify-center items-center h-6">
                <Spinner />
              </div>
            )}
          </label>
          <span className="pl-2 text-gray-500">
            {bucoDental ? "PDF Seleccionado" : "Ningún archivo seleccionado"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
