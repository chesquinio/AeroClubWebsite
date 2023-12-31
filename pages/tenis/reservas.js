import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import { add, format, isEqual } from "date-fns";
import axios from "axios";
import jwtDecode from "jwt-decode";
import NoSsr from "@/components/NoSsr";
import Modal from "@/components/Modal";
import { useRouter } from "next/router";
import Link from "next/link";

function TennisReservations() {
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [availableCourts, setAvailableCourts] = useState([]);
  const [reservationMessage, setReservationMessage] = useState("");
  const [reservationModal, setReservationModal] = useState(false);
  const [existingReservation, setExistingReservation] = useState(null);
  const [reservationDetails, setReservationDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!date.dateTime) return;

    const formattedDate = format(date.justDate, "yyyy-MM-dd");
    const formattedTime = format(date.dateTime, "kk:mm");

    axios
      .get(`/api/reservation?date=${formattedDate}&time=${formattedTime}`)
      .then((response) => {
        const availableCourtsArray = response.data.availableCourts;
        setAvailableCourts(availableCourtsArray);
      })
      .catch((error) => {
        console.error("Error al obtener las canchas disponibles:", error);
      });
  }, [date.dateTime]);

  const handleCourtSelect = (courtId) => {
    setSelectedCourt(courtId);
  };

  const handleReserve = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/iniciar");
      return;
    }

    if (!selectedCourt || !date.justDate || !date.dateTime) {
      setReservationMessage("Selecciona una cancha, hora y fecha.");
      return;
    }

    const decodedToken = await jwtDecode(token);
    const userId = decodedToken.userId;

    const formattedDate = format(date.justDate, "yyyy-MM-dd");
    const formattedTime = format(date.dateTime, "kk:mm");

    await axios
      .get(`/api/reservation?userId=${userId}`)
      .then((response) => {
        const existingReservation = response.data.existingReservation;
        if (existingReservation) {
          setExistingReservation(existingReservation);
          setReservationModal(false);
        } else {
          setReservationModal(true);
        }
      })
      .catch((error) => {
        console.error("Error al obtener el turno disponible:", error);
      });

    const details = {
      selectedCourt,
      formattedDate,
      formattedTime,
      userId,
    };
    setReservationDetails(details);
  };

  const confirmReservation = () => {
    const { selectedCourt, formattedDate, formattedTime, userId } =
      reservationDetails;

    axios
      .post("/api/reservation", {
        court: selectedCourt,
        reservationDate: formattedDate,
        reservationTime: formattedTime,
        userId: userId,
      })
      .then((response) => {
        setReservationMessage("Reserva exitosa.");
        router.push("/tenis");
      })
      .catch((error) => {
        setReservationMessage("No se pudo realizar la reserva.");
      });
    setReservationModal(false);
  };

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const morningBeginning = add(justDate, { hours: 8 });
    const morningEnd = add(justDate, { hours: 11 });
    const afternoonBeginning = add(justDate, { hours: 15 });
    const afternoonEnd = add(justDate, { hours: 19 });
    const interval = 60;

    const times = [];

    for (
      let i = morningBeginning;
      i <= morningEnd;
      i = add(i, { minutes: interval })
    ) {
      times.push(i);
    }

    for (
      let i = afternoonBeginning;
      i <= afternoonEnd;
      i = add(i, { minutes: interval })
    ) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();

  return (
    <NoSsr>
      <div className="flex h-full flex-col items-center justify-center m-4">
        <h1 className="text-white font-light text-2xl mb-4">Elije tu Turno:</h1>
        <Calendar
          minDate={new Date()}
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />

        {date.justDate && (
          <>
            <h3 className="text-white text-lg text-center font-normal mb-4 mt-6">
              Horarios:
            </h3>
            <div className="flex flex-wrap justify-center gap-4 w-4/5 mx-auto">
              {times?.map((time, i) => (
                <div key={`time-${i}`}>
                  <button
                    type="button"
                    onClick={() =>
                      setDate((prev) => ({ ...prev, dateTime: time }))
                    }
                    className={`py-2 px-4 rounded ${
                      isEqual(date.dateTime, time)
                        ? "bg-blue-400 text-white"
                        : "bg-whiteblue text-gray-800 hover:bg-blue-400 hover:text-white"
                    } transition duration-300 ease-in-out`}
                  >
                    {format(time, "kk:mm")}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {date.dateTime && (
          <div className="mt-6 mx-6">
            <h4 className="text-white text-lg text-center font-normal mb-4">
              Canchas disponibles:
            </h4>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {availableCourts.map((courtNumber) => (
                <button
                  key={courtNumber}
                  type="button"
                  onClick={() => handleCourtSelect(courtNumber)}
                  className={`py-2 px-4 rounded ${
                    selectedCourt === courtNumber
                      ? "bg-blue-400 text-white"
                      : "bg-primary text-gray-800 hover:bg-blue-400 hover:text-white"
                  } transition duration-300 ease-in-out`}
                >
                  Cancha {courtNumber}
                </button>
              ))}
            </div>
            <button
              className="mt-2 py-2 px-4 w-full rounded bg-green-600 text-white hover:bg-green-600 transition duration-300 ease-in-out"
              onClick={handleReserve}
            >
              Reservar
            </button>

            {existingReservation && (
              <Modal>
                <div className="p-4 bg-white rounded shadow-md">
                  <h2 className="text-lg font-semibold mb-2">
                    Reserva Invalida
                  </h2>
                  <p>Ya tienes una reserva:</p>
                  <p>Cancha: {existingReservation.court}</p>
                  <p>Fecha: {existingReservation.reservationDate}</p>
                  <p>Hora: {existingReservation.reservationTime}</p>
                  <div className="mt-4">
                    <div className="bg-blue-400 hover:bg-blue-500 py-2 mx-6 text-white text-center rounded transition">
                      <Link href={"/tenis"}>Volver</Link>
                    </div>
                  </div>
                </div>
              </Modal>
            )}

            {reservationModal && (
              <Modal>
                <div className="p-4 bg-white rounded shadow-md">
                  <h2 className="text-lg font-semibold mb-2">
                    Confirmar Reserva
                  </h2>
                  <p>Detalles de la reserva:</p>
                  <p>Cancha: {reservationDetails.selectedCourt}</p>
                  <p>Fecha: {reservationDetails.formattedDate}</p>
                  <p>Hora: {reservationDetails.formattedTime}</p>
                  <div className="mt-4">
                    <div>
                      <button
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                        onClick={confirmReservation}
                      >
                        Confirmar
                      </button>
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2 transition"
                        onClick={() => setReservationModal(false)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>
            )}

            <p className="mt-2 text-md text-gray-500">{reservationMessage}</p>
          </div>
        )}
      </div>
    </NoSsr>
  );
}

export default TennisReservations;
