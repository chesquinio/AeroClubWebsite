import axios from "axios";

export async function getPlaneReservations({ day, plane }) {
  try {
    const res = await axios.get(`/api/planeReservation?day=${day}`);
    const reservations = res.data;

    const filteredReservations = reservations.filter(
      (reservation) => reservation.plane === plane
    );

    return filteredReservations;
  } catch (error) {
    console.error("Ocurrió un error:", error);
    throw error;
  }
}
