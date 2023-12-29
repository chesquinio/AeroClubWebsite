import { parse, isBefore, isAfter } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const filterReservations = (reservations) => {
  const currentDate = new Date();
  const argentinaTimeZone = "America/Argentina/Buenos_Aires";
  const currentDateInArgentina = utcToZonedTime(currentDate, argentinaTimeZone);

  const previousReservations = reservations.filter((res) => {
    const reservationDateTime = utcToZonedTime(
      parse(`${res.day} ${res.time}`, "dd/MM/yyyy HH:mm:ss", new Date()),
      argentinaTimeZone
    );
    return isBefore(reservationDateTime, currentDateInArgentina);
  });

  const pendingReservations = reservations.filter((res) => {
    const reservationDateTime = utcToZonedTime(
      parse(`${res.day} ${res.time}`, "dd/MM/yyyy HH:mm:ss", new Date()),
      argentinaTimeZone
    );
    return isAfter(reservationDateTime, currentDateInArgentina);
  });

  return {
    previousReservations,
    pendingReservations,
  };
};
