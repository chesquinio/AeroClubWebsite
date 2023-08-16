import { mongooseConnect } from "@/lib/mongoose";
import { TennisReservation } from "@/model/TennisReservation";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { court, reservationDate, reservationTime, userId } = req.body;

    try {
      await mongooseConnect();

      const existingReservation = await TennisReservation.findOne({
        court,
        reservationDate,
        reservationTime,
      });

      if (existingReservation) {
        return res.status(400).json({ message: "El turno ya está reservado." });
      }

      const newReservation = new TennisReservation({
        user: userId,
        court,
        reservationDate,
        reservationTime,
      });

      await newReservation.save();

      return res.status(200).json({ message: "Reserva exitosa." });
    } catch (error) {
      return res.status(500).json({ message: "Error al realizar la reserva." });
    }
  } else if (req.method === "GET") {
    const { date, time, userId } = req.query;

    try {
      await mongooseConnect();

      const existingReservation = await TennisReservation.findOne({
        user: userId,
      });
 
      const reservations = await TennisReservation.find({
        reservationDate: date,
        reservationTime: time,
      });
      const allCourts = [1, 2, 3, 4, 5, 6];

      const reservedCourts = reservations.map((r) => r.court);

      const availableCourts = allCourts.filter(
        (court) => !reservedCourts.includes(court)
      );
   

      return res
        .status(200)
        .json({ availableCourts, hasReservation: !!existingReservation, existingReservation });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al obtener la información." });
    }
  } else {
    return res.status(405).json({ message: "Método no permitido." });
  }
}
