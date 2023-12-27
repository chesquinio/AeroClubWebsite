import axios from "axios";

export async function getPlaneReservations({ day }) {
  try {
    const res = await axios.get(`/api/planeReservation?day=${day}`);
    const reservations = res.data;
    return reservations;
  } catch (error) {
    console.error("Ocurrió un error:", error);
    throw error;
  }
}
