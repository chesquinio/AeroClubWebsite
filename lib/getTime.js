import { add, isBefore, eachMinuteOfInterval, format } from "date-fns";

export const getTimes = ({ date, reservations }) => {
  if (!date) return;

  const start = add(date, { hours: 5 });
  const end = add(date, { hours: 23 });
  const interval = 30;

  const times = [];
  const currentTime = new Date();
  const reservationsArray = reservations || [];

  const reservationsTimes = [];
  reservationsArray.map((reservation) => {
    const intervalTime = eachMinuteOfInterval({
      start: new Date(reservation.start),
      end: new Date(reservation.end),
    });
    for (const t of intervalTime) {
      const time = format(t, "HH:mm:ss");
      if (time.split(":")[1] === "30" || time.split(":")[1] === "00") {
        reservationsTimes.push(time);
      }
    }
  });

  if (isBefore(date, currentTime)) {
    for (
      let i = start;
      isBefore(i, currentTime);
      i = add(i, { minutes: interval })
    ) {
      const hour = format(i, "HH:mm:ss");
      reservationsTimes.push(hour);
    }
  }

  for (let i = start; i <= end; i = add(i, { minutes: interval })) {
    const hour = format(i, "HH:mm:ss");
    if (!reservationsTimes.includes(hour)) {
      times.push(i);
    }
  }

  return times;
};
