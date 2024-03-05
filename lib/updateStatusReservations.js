import { PlaneReservation } from "@/model/PlaneReservation";
import { mongooseConnect } from "./mongoose";
import { isAfter } from "date-fns";

export default async function updateStatusReservations() {
  await mongooseConnect();

  const allActiveReservations = await PlaneReservation.find({
    active: true,
  });

  for (const res of allActiveReservations) {
    const currentDate = new Date();
    const resDay = new Date(res.day);
    if (isAfter(currentDate, resDay)) {
      await PlaneReservation.findOneAndUpdate(
        {
          document: res.document,
        },
        {
          active: false,
        }
      );
    }
  }
}
