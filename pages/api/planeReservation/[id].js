import { mongooseConnect } from "@/lib/mongoose";
import { PlaneReservation } from "@/model/PlaneReservation";

export default async function handle(req, res) {
  if (req.method == "GET") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "Se se encontro el documento." });
    }

    try {
      await mongooseConnect();
      const reservation = await PlaneReservation.find({ document: id });

      return res.status(200).json({ reservation });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "No se pudo encontrar la reserva." });
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
