import { sub } from "date-fns";

const today = new Date();

console.log("Yesterday was", sub(today, { days: 1 }));
