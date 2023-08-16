import { useState } from "react";
import axios from "axios";
import Header from "@/components/Header";

function LoginPage() {
  const [documentNumber, setDocumentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", {
        documentNumber,
        password,
      });
      setMessage(response.data.message);

      const token = response.data.token;
      localStorage.setItem("token", token);

      window.location.href = "/tenis";
    } catch (error) {
      setMessage("Error al iniciar.");
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96 mx-4">
          <h3 className="text-2xl font-semibold mb-4">Inicia Sesion</h3>
          <form onSubmit={handleSubmit}>
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
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
