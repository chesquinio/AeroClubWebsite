import { mongooseConnect } from "@/lib/mongoose";
import { TennisReservation } from "@/model/TennisReservation";
import { format } from "date-fns";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      await mongooseConnect();

      const currentDate = format(new Date(), "yyyy-MM-dd");

      await TennisReservation.deleteMany({
        reservationDate: { $lt: currentDate },
      });

      return res
        .status(200)
        .json({ message: "Turnos vencidos eliminados exitosamente." });
    } catch (error) {
      console.error("Error al eliminar los turnos vencidos:", error);
      return res
        .status(500)
        .json({ message: "Error al eliminar los turnos vencidos." });
    }
  } else {
    return res.status(405).json({ message: "Método no permitido." });
  }
}