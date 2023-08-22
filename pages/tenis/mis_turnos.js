import Header from "@/components/Header";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Link from "next/link";

function TurnosListPage() {
  const [userId, setUserId] = useState("");
  const [userReservation, setUserReservation] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [court, setCourt] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.userId);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (userId) {
      axios
        .get(`/api/reservation?userId=${userId}`)
        .then((res) => {
          const userReservation = res.data.existingReservation;
          setUserReservation(res.data.existingReservation);
          setDate(userReservation.reservationDate);
          setTime(userReservation.reservationTime);
          setCourt(userReservation.court);
        })
        .catch((error) => {
          console.error("Error al verificar la reserva:", error);
        });
    }
  }, [userId]);

  return (
    <>
      <Header />
      <div className="flex justify-center items-start h-full mt-32">
        {userReservation ? (
          <div className="flex justify-center items-start h-full">
            <div className="bg-white shadow-md p-8 rounded-md w-80">
              <h4 className="text-black font-medium text-xl mb-3 text-center">Mi Turno</h4>
              <p className="text-gray-500 text-lg text-md mb-2">
                Fecha: <b>{date}</b>
              </p>
              <p className="text-gray-500 text-lg text-md mb-2">
                Hora: <b>{time}</b>
              </p>
              <p className="text-gray-500 text-lg text-md">
                Cancha: <b>{court}</b>
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            {userId ? (
              <div>
                <h3 className="text-black font-medium text-xl mb-4">
                  No tienes ningún turno reservado
                </h3>
                <Link
                  className="bg-blue-500 rounded px-6 py-2 text-lg text-white hover:bg-blue-600 transition"
                  href={"/tenis/reservas"}
                >
                  Reservar
                </Link>
              </div>
            ) : (
              <div>
                <h3 className="text-black font-medium text-xl mb-4">
                  No tienes una sesión activa
                </h3>
                <Link
                  className="bg-blue-500 rounded px-6 py-2 text-lg text-white hover:bg-blue-600 transition"
                  href={"/iniciar"}
                >
                  Iniciar Sesión
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default TurnosListPage;
