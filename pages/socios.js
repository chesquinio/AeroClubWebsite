import Header from "@/components/Header";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

function PartnerPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("default");
  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/register", {
        name,
        age,
        documentNumber,
        email,
        password,
        role,
        validated,
      });
      setMessage(response.data.message);

      router.push("/iniciar");
    } catch (error) {
      setMessage("Error al registrarse.");
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-24">
        <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96 mx-4">
          <h3 className="text-2xl font-semibold mb-4">Ser Socio</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Nombre:</label>
              <input
                type="text"
                className="mt-1 px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Edad:</label>
              <input
                type="text"
                className="mt-1 px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">N° de Documento:</label>
              <input
                type="text"
                className="mt-1 px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
                value={documentNumber}
                onChange={(e) => setDocumentNumber(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                className="mt-1 px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Contraseña:</label>
              <input
                type="password"
                className="mt-1 px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {message && (
              <div className="mb-4">
                <p className="block text-gray-700">{message}</p>
              </div>
            )}
            <div className="flex justify-center">
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 transition-all"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
          <div className="mt-4 text-moreblue hover:text-blue-500 transition-all">
            <Link href={'/iniciar'}>Ya eres socio? Ingresa aqui!</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerPage;
