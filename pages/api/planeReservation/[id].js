import { mongooseConnect } from "@/lib/mongoose";
import updateStatusReservations from "@/lib/updateStatusReservations";
import { PlaneReservation } from "@/model/PlaneReservation";

export default async function handle(req, res) {
  if (req.method == "GET") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "Se se encontro el documento." });
    }

    try {
      await mongooseConnect();

      await updateStatusReservations();
      const activeReservation = await PlaneReservation.find({
        document: id,
        active: true,
      });
      const inactiveReservations = await PlaneReservation.find({
        document: id,
        active: false,
      })
        .sort({ createdAt: -1 })
        .limit(5);
      console.log(activeReservation, inactiveReservations);
      if (activeReservation || inactiveReservations) {
        return res
          .status(200)
          .json({ activeReservation, inactiveReservations });
      } else {
        return res.status(400).json({
          message: "No se ha encontrado una reserva con este documento.",
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Ha ocurrido un error al buscar la reserva." });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      await mongooseConnect();

      await PlaneReservation.findByIdAndDelete(id);
      return res
        .status(200)
        .json({ message: "Se eliminó la resrrva correctamente." });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "No se pudo encontrar la reserva." });
    }
  } else {
    return res.status(405).json({ message: "Método no permitido." });
  }
}
