import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function sortByDate(dateStrings) {
  // Convert date strings to Date objects
  const dateObjects = dateStrings.map((dateString) => new Date(dateString));

  // Sort Date objects
  dateObjects.sort((a, b) => a - b);

  // Convert sorted Date objects back to date strings
  const sortedDateStrings = dateObjects.map((dateObject) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return dateObject.toLocaleDateString(undefined, options);
  });

  return sortedDateStrings;
}
