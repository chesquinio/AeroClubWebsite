const { Schema, models, model } = require("mongoose");

const PlaneReservationSchema = new Schema({
  name: { type: String, required: true },
  document: { type: Number, required: true },
  day: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  plane: { type: String, required: true },
});

export const PlaneReservation =
  models?.PlaneReservation || model("PlaneReservation", PlaneReservationSchema);
