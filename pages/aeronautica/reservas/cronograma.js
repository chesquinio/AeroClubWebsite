import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

export default function ListFlyReservationPage() {
  const [document, setDocument] = useState(null);
  const [reservation, setReservation] = useState();
  const [inactiveReservation, setInactiveReservation] = useState(null);
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
    setInactiveReservation(null);

    await axios
      .get(`/api/planeReservation/${document}`)
      .then((res) => {
        setReservation(res.data.activeReservation[0]);
        setInactiveReservation(res.data.inactiveReservations);
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

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 px-5">
        <section className="flex flex-col justify-center items-center md:max-w-3xl w-full mx-auto">
          <h2 className="text-3xl text-gray-700 font-light text-center mb-5">
            Consulte su reserva:
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:max-w-xl"
          >
            <label id="documento" className="text-gray-500">
              Documento:
            </label>
            <div className="shadow-sm shadow-gray-500  px-4 text-lg mt-4">
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
        {reservation ? (
          <section className="w-full md:max-w-xl mx-auto my-10 gap-4">
            <div className="flex flex-col justify-center items-center rounded bg-gray-200 shadow-sm shadow-gray-500 py-5 mb-4">
              <h4 className="text-2xl mb-3">{reservation.name}</h4>
              <p className="text-lg md:text-xl text-center text-gray-600">
                Avión: <b>{reservation.plane}</b>
              </p>
              <p className="text-lg text-gray-600">
                Día: <b>{reservation.day}</b>
              </p>
              <p className="text-lg text-gray-600">
                De <b>{format(new Date(reservation.start), "HH:mm")}</b> hasta{" "}
                <b>{format(new Date(reservation.end), "HH:mm")}</b>
              </p>
            </div>

            <button
              type="button"
              onClick={() => deleteReservation(reservation._id)}
              className="bg-red-500 hover:bg-red-600 transition-all rounded text-white w-full py-2 px-4"
            >
              Eliminar reserva
            </button>
          </section>
        ) : (
          <section className="w-full md:max-w-xl mx-auto my-10">
            <div className=" bg-gray-200 rounded">
              <h4 className="px-4 py-4 text-lg text-center">
                No se encuentran reservas activas
              </h4>
            </div>
          </section>
        )}
        {inactiveReservation && (
          <section className="flex flex-col gap-4 mx-auto w-full md:max-w-3xl py-10">
            <h4 className="text-xl text-gray-800">Reservas pasadas</h4>
            {inactiveReservation.map((res) => (
              <>
                <div className="flex flex-col md:flex-row justify-between gap-5 items-center py-3 px-4 rounded-lg bg-gray-100 ">
                  <p className="text-md text-gray-600">
                    Día: <span className="text-gray-800">{res.day}</span>
                  </p>
                  <p className="text-md text-gray-600">
                    Avión: <span className="text-gray-800">{res.plane}</span>
                  </p>
                  <p className="text-md text-gray-600">
                    De{" "}
                    <span className="text-gray-800">
                      {format(new Date(res.start), "HH:mm")}
                    </span>{" "}
                    hasta{" "}
                    <span className="text-gray-800">
                      {format(new Date(res.end), "HH:mm")}
                    </span>
                  </p>
                </div>
              </>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
