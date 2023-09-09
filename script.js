const currentDayElement = document.querySelector(".current_day");

const currentUTCTimeElement = document.querySelector(".utc-time");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();

const currentDay = daysOfWeek[currentDate.getDay()];

currentDayElement.textContent = currentDay;

const currentUTCTimeMillis = Date.now();

currentUTCTimeElement.textContent = currentUTCTimeMillis;