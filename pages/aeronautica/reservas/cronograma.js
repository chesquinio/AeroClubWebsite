import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import axios from "axios";
import React, { useState } from "react";

export default function ListFlyReservationPage() {
  const [document, setDocument] = useState(null);
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  console.log(reservation);

  const handleDocument = (event) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, "");
    setDocument(Number(inputValue));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage(null);

      const res = await axios.get(`/api/planeReservation/${document}`);
      const { reservation } = await res.data;
      setReservation(reservation);
    } catch (error) {
      setMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <main className="h-screen pt-28 px-5">
        <section className="flex flex-col justify-center items-center">
          <h2 className="text-3xl text-gray-700 font-light text-center mb-5">
            Consulte su reserva:
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label id="documento" className="text-gray-500">
              Documento:
            </label>
            <div className="shadow-sm shadow-gray-500 sm:w-96 px-4 text-lg mt-4">
              <i class="bx bx-search"></i>
              <input
                id="documento"
                type="text"
                onChange={(e) => handleDocument(e)}
                value={document}
                className="py-2 px-4 outline-none w-11/12"
              />
            </div>
            {message && <p className="text-gray-500 text-sm mt-2">{message}</p>}
            <button
              type="submit"
              disabled={!document}
              className={`text-white w-full text-center text-xl py-3 rounded my-4 ${
                !document ? "bg-blue-200" : "bg-blue-400"
              }`}
            >
              {loading ? <Spinner /> : "Consultar"}
            </button>
          </form>
        </section>
        {reservation ? (
          <section className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center rounded bg-gray-200 py-5 w-96">
              <h4 className="text-2xl mb-3">{reservation.name}</h4>
              <span className="text-lg text-gray-600">
                {reservation.time} | {reservation.day}
              </span>
            </div>
          </section>
        ) : (
          <section>No se encontro</section>
        )}
      </main>
      <Footer />
    </>
  );
}
