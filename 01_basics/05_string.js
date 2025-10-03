const name = "Soumya"
const count = 50

console.log(`Good Morning! My name is ${name} and my count is ${count}.`)

// another way to define string is :
let stringValue = String("Soumya-ranjan-behera")
console.log(stringValue)
// the above type is better because it can generate length of the string and each character has separate index values and it also has prototype
console.log(stringValue[3]) //m
console.log(stringValue.length) // 6
console.log(stringValue.toUpperCase()) // SOUMYA
console.log(stringValue.charAt(3)) //m
console.log(stringValue.indexOf('m')) // 3

const newStringValue = stringValue.substring(0,4)//Soum
console.log(newStringValue)

const newStringValue1 = stringValue.slice(0,4)//Soum
console.log(newStringValue1)

const url = "https://Soumya.com%20@gmail.com "

console.log(url.replace('%20','-')) //https://Souamya.com-@gmail.com 
console.log(url.includes("Soumya")) // true
console.log(stringValue.split('-'))
