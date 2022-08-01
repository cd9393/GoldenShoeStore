const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDateToText = (timestamp) => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = MONTHS[date.getMonth()];
  const day = date.getDate();

  return `${day} ${month} ${year}`;
};
