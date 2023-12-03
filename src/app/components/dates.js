let dates = [];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let i = 0; i < 120; i++) {
  dates.push({
    id: 1,
    days: 0,
    month: "",
    year: 2018,
  });

  if (i > 0) {
    dates[i].id = dates[i - 1].id + 1;
  }

  dates[i].month = months[i % 12];
  dates[i].year = dates[i].year + Math.floor(i / 12);

  if (
    dates[i].month == "February" &&
    (dates[i].year % 4 == 0 || dates[i].year % 400 == 0)
  ) {
    dates[i].days = 29;
  } else {
    dates[i].days = 28;
  }

  if (
    dates[i].month == "January" ||
    dates[i].month == "March" ||
    dates[i].month == "May" ||
    dates[i].month == "July" ||
    dates[i].month == "August" ||
    dates[i].month == "October" ||
    dates[i].month == "December"
  ) {
    dates[i].days = 31;
  }

  if (
    dates[i].month == "April" ||
    dates[i].month == "June" ||
    dates[i].month == "September" ||
    dates[i].month == "November"
  ) {
    dates[i].days = 30;
  }
}
export default dates;
