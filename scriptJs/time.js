// const day = new Date();
// const newDay = day.toDateString("bn-BD", {timeZone: "Asia/Dhaka"})
// console.log(newDay);

// const day= new Date();
// const newDay = day.getDay()
// console.log(newDay)


const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];


const newDay = new Date();
const currentDay = days[newDay.getDay()];
const currentMonth = months[newDay.getMonth()];
const date = newDay.getDate();
const year = newDay.getFullYear();


console.log(currentDay,currentMonth,date,year)