import { mongooseConnect } from "@/lib/mongoose";
import updateStatusReservations from "@/lib/updateStatusReservations";
import { PlaneReservation } from "@/model/PlaneReservation";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { name, document, day, start, end, selectedPlane } = req.body;

    try {
      await mongooseConnect();

      const existingReservation = await PlaneReservation.find({
        document,
        active: true,
      });

      if (existingReservation.length > 0) {
        return res
          .status(400)
          .json({ message: "Ya tienes una reserva realizada." });
      }

      const newReservation = new PlaneReservation({
        name,
        document,
        day,
        start,
        end,
        plane: selectedPlane,
      });

      await newReservation.save();

      return res.status(200).json({ message: "Reserva exitosa." });
    } catch (error) {
      return res.status(500).json({ message: "Error al realizar la reserva." });
    }
  } else if (req.method === "GET") {
    const { day } = req.query;

    try {
      await mongooseConnect();

      await updateStatusReservations();
      const reservations = await PlaneReservation.find({ day });

      return res.status(200).json(reservations);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al obtener la información." });
    }
  } else {
    return res.status(405).json({ message: "Método no permitido." });
  }
}
