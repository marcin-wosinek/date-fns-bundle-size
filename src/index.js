import { sub, startOfQuarter, formatISO9075, differenceInDays } from "date-fns";

const today = new Date(),
  quarterStart = startOfQuarter(today),
  diffDays = differenceInDays(today, quarterStart);

console.log("Yesterday was", sub(today, { days: 1 }));

console.log(
  "The quarter started on",
  formatISO9075(quarterStart, { representation: "date" }),
  "and today, it is",
  diffDays,
  "days since then"
);
