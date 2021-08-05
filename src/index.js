import { sub, startOfQuarter, format, differenceInDays } from "date-fns";

const today = new Date(),
  quarterStart = startOfQuarter(today),
  diffDays = differenceInDays(today, quarterStart);

console.log("Yesterday was", sub(today, { days: 1 }));

console.log(
  "The quarter started on",
  format(monthStart, "yyyy-mm-dd"),
  "and today, it is",
  diffDays,
  "days since then"
);
