import NoSsr from "@/components/NoSsr";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import { format, isEqual } from "date-fns";
import { getTimes } from "@/lib/getTime";
import axios from "axios";
import Modal from "@/components/Modal";
import { useRouter } from "next/router";
import { getPlaneReservations } from "@/lib/getReservations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewFlyReservationPage() {
  const [date, setDate] = useState({});
  const [reservations, setReservations] = useState([]);
  const [name, setName] = useState("");
  const [document, setDocument] = useState(null);
  const [currentForm, setCurrentForm] = useState(1);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const times = getTimes({ justDate: date.justDate, reservations });

  const goBack = () => {
    if (currentForm === 2) {
      setDate({});
    }
    if (currentForm > 1) {
      setCurrentForm(currentForm - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentForm(currentForm - 1);

    const day = date.dateTime.toLocaleString().split(", ")[0];
    const time = date.dateTime.toLocaleString().split(", ")[1];

    await axios
      .post("/api/planeReservation", { name, document, day, time })
      .then((res) => {
        setMessage("Se ha realizado la reserva corrrectamente.");
        router.push("/aeronautica/reservas");
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  const handleDocument = (event) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, "");
    setDocument(Number(inputValue));
  };

  const handleName = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
  };

  return (
    <NoSsr>
      <Header />
      <motion.div
        className="flex justify-center items-center bg-white rounded-lg pt-20 sm:mb-10 min-h-screen w-full sm:w-3/5 xl:w-2/5 2xl:w-1/3 mx-auto text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <form onSubmit={handleSubmit} className="w-full sm:shadow-xl px-8 py-2">
          {currentForm > 1 && (
            <button
              type="button"
              onClick={goBack}
              className="backButton w-10 h-10 text-gray-700 text-4xl rounded"
            >
              <i className="bx bx-left-arrow-alt"></i>
            </button>
          )}

          {currentForm === 1 && (
            <section>
              <h1 className="font-light text-center text-3xl mb-6">
                Elije una fecha:
              </h1>
              <div className="w-full justify-center items-center">
                <Calendar
                  minDate={new Date()}
                  view="month"
                  onClickDay={async (date) => {
                    setDate((prev) => ({ ...prev, justDate: date }));
                    const day = format(date, "dd/MM/yyyy");
                    const reservationsByDay = await getPlaneReservations({
                      day,
                    });
                    setReservations(reservationsByDay);
                  }}
                />
              </div>
            </section>
          )}

          {currentForm === 2 && (
            <>
              {times.length === 0 ? (
                <section className="flex flex-col items-center">
                  <h3 className="text-3xl text-center font-light mb-6">
                    No se ha encontrado ningún horario disponible
                  </h3>
                  <button
                    type="button"
                    onClick={goBack}
                    className={`text-white w-1/2 text-center text-xl py-3 rounded my-4 bg-gray-400 hover:bg-gray-500`}
                  >
                    Volver
                  </button>
                </section>
              ) : (
                <section>
                  <h3 className="text-3xl text-center font-light mb-6">
                    Horarios disponibles:
                  </h3>
                  <div className="grid grid-cols-1 text-center gap-3">
                    {times?.map((time, i) => (
                      <button
                        key={`time-${i}`}
                        type="button"
                        onClick={() =>
                          setDate((prev) => ({
                            ...prev,
                            dateTime: time,
                          }))
                        }
                        className={`py-2 px-4 rounded text-xl ${
                          isEqual(date.dateTime, time)
                            ? "bg-blue-400 text-white"
                            : "bg-whiteblue text-gray-800 hover:bg-blue-200 hover:text-white"
                        } transition duration-300 ease-in-out`}
                      >
                        {format(time, "kk:mm")}
                      </button>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}

          {currentForm >= 3 && (
            <section>
              <h3 className="text-3xl text-center font-light mb-6">
                Datos Personales:
              </h3>
              <div className="grid grid-col-1 gap-5 mb-2">
                <div>
                  <label className="block text-lg text-gray-700 mb-3">
                    Nombre y apellido:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => handleName(e)}
                    value={name || ""}
                    className="p-2 border-b w-full outline-none text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg text-gray-700 mb-3">
                    Documento:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => handleDocument(e)}
                    value={document || ""}
                    className="p-2 border-b w-full outline-none text-lg"
                  />
                </div>
              </div>
            </section>
          )}
          {message && <p className="text-gray-600 my-2">{message}</p>}
          {currentForm === 1 && (
            <button
              type="button"
              onClick={() => setCurrentForm(currentForm + 1)}
              disabled={!date.justDate}
              className={`text-white w-full text-center text-xl py-3 rounded my-4 ${
                !date.justDate ? "bg-blue-200" : "bg-blue-400"
              }`}
            >
              Siguiente
            </button>
          )}
          {currentForm === 2 && times.length !== 0 && (
            <button
              type="button"
              onClick={() => setCurrentForm(currentForm + 1)}
              disabled={!date.dateTime}
              className={`text-white w-full text-center text-xl py-3 rounded my-4 ${
                !date.dateTime ? "bg-blue-200" : "bg-blue-400"
              }`}
            >
              Siguiente
            </button>
          )}
          {currentForm > 2 && (
            <button
              type="button"
              onClick={() => setCurrentForm(currentForm + 1)}
              disabled={name === "" || document === null || document === 0}
              className={`text-white w-full text-center text-xl py-3 rounded my-4 ${
                name === "" || document === null || document === 0
                  ? "bg-blue-200"
                  : "bg-blue-400"
              }`}
            >
              Enviar
            </button>
          )}
          {currentForm === 4 && (
            <Modal>
              <h4 className="mb-4 text-xl">¿Quiéres confirmár la reserva?</h4>
              <div className="grid grid-cols-2 text-center">
                <span className="text-lg font-light">
                  Día: <b>{date.dateTime.toLocaleString().split(", ")[0]}</b>
                </span>
                <span className="text-lg font-light">
                  Hora: <b>{date.dateTime.toLocaleString().split(", ")[1]}</b>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setCurrentForm(currentForm - 1)}
                  className="bg-gray-200 rounded px-4 py-2 text-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-500 text-lg"
                >
                  Confirmar
                </button>
              </div>
            </Modal>
          )}
        </form>
      </motion.div>
      <Footer />
    </NoSsr>
  );
}
