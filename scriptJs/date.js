const weeklyDay = document.getElementById("weeklyDay");
const fullDay = document.getElementById("fullDay");


const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];


const newDay = new Date();
const currentDay = days[newDay.getDay()];
const currentMonth = months[newDay.getMonth()];
const date = newDay.getDate();
const year = newDay.getFullYear();

weeklyDay.innerText = currentDay;
fullDay.innerText = `${currentMonth} : ${date} : ${year}`;
