export default function findDates(str) {
  const regexp = /(0?[1-9]|[12]\d|3[01]|[1-9])(?<sep>[\.\/\-])([0][1-9]|1[0-2]|[1-9])\k<sep>(202[1-9])/g;
  const dates = str?.match(regexp);
  return dates;
}
