import { add } from "date-fns";

export const getTimes = ({ justDate }) => {
  if (!justDate) return;

  const morningBeginning = add(justDate, { hours: 8 });
  const morningEnd = add(justDate, { hours: 11 });
  const afternoonBeginning = add(justDate, { hours: 15 });
  const afternoonEnd = add(justDate, { hours: 19 });
  const interval = 60;

  const times = [];

  for (
    let i = morningBeginning;
    i <= morningEnd;
    i = add(i, { minutes: interval })
  ) {
    times.push(i);
  }

  for (
    let i = afternoonBeginning;
    i <= afternoonEnd;
    i = add(i, { minutes: interval })
  ) {
    times.push(i);
  }

  return times;
};
