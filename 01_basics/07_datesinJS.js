// Dates

let myDate = new Date()
console.log(myDate); //2025-10-05T02:00:51.296Z
console.log(myDate.toString()); //Sun Oct 05 2025 02:00:51 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Sun Oct 05 2025
console.log(myDate.toLocaleString()); // 10/5/2025, 2:03:36 AM
console.log(typeof myDate) //object

let myCreatedDate = new Date(2025,0,3)
console.log(myCreatedDate.toDateString()) // Fri Jan 03 2025

let myCreatedDate1 = new Date(2025,0,3,5,4)
console.log(myCreatedDate1.toLocaleString()) // 1/3/2025, 5:04:00 AM

let myCreatedDate2 = new Date("2025-01-06")
console.log(myCreatedDate2.toLocaleDateString()) // 1/6/2025

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1759630495519 ( it is in milisecond)
console.log(Math.floor(myTimeStamp/1000)) // 1759630680(seconds)

let nowDate = new Date()
console.log(nowDate)
console.log(nowDate.getDay());
console.log(nowDate.getMonth());
console.log(nowDate.getYear());
