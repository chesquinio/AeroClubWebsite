import { add, format, isBefore } from "date-fns";

export const getTimes = ({ date, reservations }) => {
  if (!date) return;

  const start = add(date, { hours: 5 });
  const end = add(date, { hours: 23 });
  const interval = 60;

  const times = [];
  const currentTime = new Date();
  const reservationsArray = reservations || [];

  const reservationsTimes = [];
  reservationsArray.map((reservation) => {
    console.log(reservation.time);
    reservationsTimes.push(reservation.time);
  });

  if (isBefore(date, currentTime)) {
    for (
      let i = start;
      isBefore(i, currentTime);
      i = add(i, { minutes: interval })
    ) {
      reservationsTimes.push(format(i, "HH:mm:ss"));
    }
  }

  for (let i = start; i <= end; i = add(i, { minutes: interval })) {
    const formattedTime = format(i, "HH:mm:ss");
    if (!reservationsTimes.includes(formattedTime)) {
      times.push(i);
    }
  }

  return times;
};
