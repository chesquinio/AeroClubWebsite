import NoSsr from "@/components/NoSsr";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import { format, isAfter, isEqual } from "date-fns";
import { getTimes } from "@/lib/getTime";
import axios from "axios";
import Modal from "@/components/Modal";
import { useRouter } from "next/router";
import { getPlaneReservations } from "@/lib/getReservations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const planes = [
  { id: 1, name: "LV - OOH - Cessna 172" },
  { id: 2, name: "LV - OBI - Cessna 152" },
  { id: 3, name: "LV S 101 - Tecnam P 2002 Sierra" },
  { id: 4, name: "LV S 145 - Tecnam P 2002 MKII" },
];

const allTimes = ({ date, reservations }) => {
  const timesAvailable = getTimes({
    date: date.justDate,
    reservations,
  });
  return timesAvailable;
};

export default function NewFlyReservationPage() {
  const [selectedPlane, setSelectedPlane] = useState(planes[1].name);
  const [reservations, setReservations] = useState([]);
  const [date, setDate] = useState({
    startTime: null,
    endTime: null,
    justDate: null,
  });
  const times = allTimes({ date, reservations });
  const [endTimes, setEndTimes] = useState([]);
  const [name, setName] = useState("");
  const [document, setDocument] = useState(null);
  const [currentForm, setCurrentForm] = useState(1);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const finishTimes = [];
    let lastTime = [];
    times?.map((time) => {
      if (
        isEqual(time, new Date(date.startTime)) ||
        (isAfter(time, new Date(date.startTime)) &&
          time.getHours() - 1 === lastTime[0]) ||
        (time.getHours() === lastTime[0] && time.getMinutes() !== lastTime[1])
      ) {
        lastTime = [time.getHours(), time.getMinutes()];
        finishTimes.push(time);
      }
    });
    setEndTimes(finishTimes);
  }, [date.startTime]);

  const goBack = () => {
    if (currentForm <= 4) {
      setDate((prevState) => ({
        ...prevState,
        startTime: null,
        endTime: null,
      }));
    }
    if (currentForm <= 3) {
      setDate((prevState) => ({
        ...prevState,
        justDate: null,
      }));
    }
    if (currentForm > 1) {
      setMessage(null);
      setCurrentForm(currentForm - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentForm(currentForm - 1);

    const day = new Date(date.justDate).toLocaleDateString();
    const start = date.startTime;
    const end = new Date(date.endTime);
    end.setMinutes(end.getMinutes() - 30);

    await axios
      .post("/api/planeReservation", {
        name,
        document,
        day,
        start,
        end,
        selectedPlane,
      })
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
                Elija un avión:
              </h1>
              <div className="w-full flex flex-col gap-3 mb-6">
                {planes.map((plane) => (
                  <div
                    key={plane.id}
                    onClick={() => setSelectedPlane(plane.name)}
                    className={`py-2 px-4 rounded text-xl ${
                      plane.name === selectedPlane
                        ? "bg-blue-400 text-white"
                        : "bg-whiteblue text-gray-800 hover:bg-blue-200 hover:text-white"
                    } transition duration-300 ease-in-out`}
                  >
                    {plane.name}
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentForm === 2 && (
            <section>
              <h1 className="font-light text-center text-3xl mb-6">
                Elija una fecha:
              </h1>
              <div className="w-full justify-center items-center">
                <Calendar
                  minDate={new Date()}
                  view="month"
                  onClickDay={async (date) => {
                    const day = new Date(date).toLocaleDateString();

                    setDate((prev) => ({ ...prev, justDate: date }));

                    const reservationsByDayAndPlane =
                      await getPlaneReservations({
                        day,
                        plane: selectedPlane,
                      });
                    setReservations(reservationsByDayAndPlane);
                  }}
                />
              </div>
            </section>
          )}

          {currentForm === 3 && (
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
                <section className="mb-4">
                  <h3 className="text-2xl text-center font-light mb-6">
                    Selecciona un intérvalo de vuelo:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <h4 className="text-lg text-gray-800 mb-3">
                        Hora de comienzo:
                      </h4>
                      <select
                        onChange={(e) => {
                          setDate((prev) => ({
                            ...prev,
                            startTime: e.target.value,
                          }));
                        }}
                        className="bg-gray-100 w-full rounded-lg text-lg py-2 px-4 overflow-y-auto"
                      >
                        {times?.map((time, i) => (
                          <option
                            key={`time-${i}`}
                            value={time}
                            className={`py-2 px-4 rounded text-xl ${
                              isEqual(date.startTime, time)
                                ? "bg-blue-400 text-white"
                                : "bg-whiteblue text-gray-800 hover:bg-blue-200 hover:text-white"
                            } transition duration-300 ease-in-out`}
                          >
                            {format(time, "kk:mm")}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-800 mb-3">
                        Hora de finalización:
                      </h4>
                      <select
                        onChange={(e) => {
                          setDate((prev) => ({
                            ...prev,
                            endTime: e.target.value,
                          }));
                        }}
                        disabled={!date.startTime}
                        className="bg-gray-100 w-full rounded-lg text-lg py-2 px-4 overflow-y-auto"
                      >
                        {endTimes?.map((time, i) => (
                          <option
                            key={`time-${i}`}
                            value={time}
                            className={`py-2 px-4 rounded text-xl ${
                              isEqual(date.endTime, time)
                                ? "bg-blue-400 text-white"
                                : "bg-whiteblue text-gray-800 hover:bg-blue-200 hover:text-white"
                            } transition duration-300 ease-in-out`}
                          >
                            {format(time, "kk:mm")}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </section>
              )}
            </>
          )}

          {currentForm >= 4 && (
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
              <p className="text-sm text-gray-700 mt-3">
                Recuerde que si ya posee una reserva o ha tenido una reserva
                este día, no podrá realizar una nueva reserva.
              </p>
            </section>
          )}
          {message && <p className="text-gray-600 my-2">{message}</p>}
          {currentForm === 1 && (
            <button
              type="button"
              onClick={() => setCurrentForm(currentForm + 1)}
              disabled={!selectedPlane}
              className={`text-white w-full text-center text-xl py-3 rounded my-4 ${
                !selectedPlane ? "bg-blue-200" : "bg-blue-400"
              }`}
            >
              Siguiente
            </button>
          )}
          {currentForm === 2 && (
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
          {currentForm === 3 && times.length !== 0 && (
            <button
              type="button"
              onClick={() => setCurrentForm(currentForm + 1)}
              disabled={!date.endTime}
              className={`text-white w-full text-center text-xl py-3 rounded my-4 ${
                !date.endTime ? "bg-blue-200" : "bg-blue-400"
              }`}
            >
              Siguiente
            </button>
          )}
          {currentForm > 3 && (
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
          {currentForm === 5 && (
            <Modal>
              <h4 className="mb-4 text-xl">¿Quiéres confirmár la reserva?</h4>
              <div className="flex flex-col justify-center items-center">
                <span className="text-xl font-light mb-2">
                  Avión: <b>{selectedPlane}</b>
                </span>
                <div className="flex flex-col p-4 bg-gray-100 rounded-lg">
                  <span className="text-lg font-light">
                    Día: <b>{new Date(date.justDate).toLocaleDateString()}</b>
                  </span>
                  <span className="text-lg font-light">
                    Hora: De{" "}
                    <b>{new Date(date.startTime).toLocaleTimeString()}</b> hasta{" "}
                    <b>{new Date(date.endTime).toLocaleTimeString()}</b>
                  </span>
                </div>
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
