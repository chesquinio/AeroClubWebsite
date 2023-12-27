import { add, format, isBefore } from "date-fns";

export const getTimes = ({ justDate, reservations }) => {
  if (!justDate) return;

  const morningBeginning = add(justDate, { hours: 8 });
  const morningEnd = add(justDate, { hours: 11 });
  const afternoonBeginning = add(justDate, { hours: 15 });
  const afternoonEnd = add(justDate, { hours: 19 });
  const interval = 60;

  const times = [];
  const currentTime = new Date();
  const reservationsArray = reservations.reservations || [];

  const reservationsTimes = [];
  reservationsArray.map((reservation) => {
    reservationsTimes.push(reservation.time);
  });

  if (isBefore(justDate, currentTime)) {
    for (
      let i = morningBeginning;
      isBefore(i, currentTime);
      i = add(i, { minutes: interval })
    ) {
      reservationsTimes.push(format(i, "HH:mm:ss"));
    }
  }

  for (
    let i = morningBeginning;
    i <= morningEnd;
    i = add(i, { minutes: interval })
  ) {
    const formattedTime = format(i, "HH:mm:ss");
    if (!reservationsTimes.includes(formattedTime)) {
      times.push(i);
    }
  }

  for (
    let i = afternoonBeginning;
    i <= afternoonEnd;
    i = add(i, { minutes: interval })
  ) {
    const formattedTime = format(i, "HH:mm:ss");
    if (!reservationsTimes.includes(formattedTime)) {
      times.push(i);
    }
  }

  return times;
};
