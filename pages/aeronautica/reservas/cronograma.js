import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import { filterReservations } from "@/lib/filterReservations";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ListFlyReservationPage() {
  const [document, setDocument] = useState(null);
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const handleDocument = (event) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, "");
    setDocument(Number(inputValue));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage(null);
    setReservation(null);

    await axios
      .get(`/api/planeReservation/${document}`)
      .then((res) => {
        if (!res.data.reservation) {
          setMessage("No se ha encontrado una reserva con este documento");
        } else {
          setReservation(res.data.reservation);
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteReservation = async (id) => {
    await axios
      .delete(`/api/planeReservation/${id}`)
      .then((res) => {
        setMessage("Se elimino la reserva correctamente.");
        router.push("/aeronautica/reservas");
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  const { previousReservations, pendingReservations } = reservation
    ? filterReservations(reservation)
    : { previousReservations: [], pendingReservations: [] };

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
                !document
                  ? "bg-blue-200"
                  : "bg-blue-400 hover:bg-blue-500 transition-all"
              }`}
            >
              {loading ? <Spinner /> : "Consultar"}
            </button>
          </form>
        </section>
        {pendingReservations.length > 0 ? (
          <section className="flex flex-col justify-center items-center mt-4 gap-4">
            <div className="flex flex-col justify-center items-center rounded bg-gray-200 shadow-sm shadow-gray-500 py-5 w-96">
              <h4 className="text-2xl mb-3">{pendingReservations[0].name}</h4>
              <span className="text-lg text-gray-600">
                {pendingReservations[0].time} | {pendingReservations[0].day}
              </span>
            </div>
            <div className="flex w-96">
              <button
                type="button"
                onClick={() => deleteReservation(pendingReservations[0]._id)}
                className="bg-red-500 hover:bg-red-600 transition-all rounded text-white w-full py-2 px-4"
              >
                Eliminar reserva
              </button>
            </div>
          </section>
        ) : (
          <section className="flex flex-col justify-center items-center mt-4">
            <div className="w-96 bg-gray-200 rounded">
              <h4 className="px-4 py-4 text-lg text-center">
                No se encuentran reservas actuales
              </h4>
            </div>
          </section>
        )}
        {previousReservations.length > 0 && (
          <section className="flex flex-col justify-center items-center mt-10 mb-6 gap-2">
            <div className="w-96">
              <h5 className="text-lg text-gray-600 text-left">
                Reservas Anteriores
              </h5>
            </div>
            {previousReservations.map((prevRes) => (
              <div
                key={prevRes._id}
                className="flex flex-col justify-center items-center rounded bg-gray-200 shadow-sm shadow-gray-500 py-2 w-96"
              >
                <span className="text-lg text-gray-600">
                  {prevRes.time} | {prevRes.day}
                </span>
              </div>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
