let score = "34"
console.log(typeof score);

let valueInNumber = Number(score)//it converts any datatype into number
console.log(typeof valueInNumber)

// "33" -> 33
// "ab345" -> NaN
// true -> 1
// false -> 0

let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanLoggedIn)) //boolean
console.log(booleanLoggedIn)     // true

// 1 -> true
// 2-> false
// "" -> false
// "soumya" -> true

let numberId = 123445
let stringNumberId = String(numberId)
console.log(stringNumberId)
console.log(typeof stringNumberId)

// Operations starts from here 

str1 ="Soumya "
str2 ="Ranjan"
str3 = str1+str2
console.log(str3) // Soumya Ranjan
console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+2+2) // 122
console.log(1+2+"2") //32