const currentDayElement = document.querySelector(".current_day");
const currentUTCTimeElement = document.querySelector(".utc-time");

// JavaScript code to get the current day of the week
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

// Update the element with the current day
currentDayElement.textContent = currentDay;

const currentUTCTimeMillis = Date.now();

// Update the element with the current UTC time in milliseconds
currentUTCTimeElement.textContent = currentUTCTimeMillis;