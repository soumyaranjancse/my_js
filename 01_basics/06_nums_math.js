const myValue = 45
console.log(typeof(myValue)) //number

const myNum = new Number(56)
console.log(typeof(myNum)) // object

console.log(myNum) // [Number: 56]
console.log(myValue) // 45

console.log(myNum.toString()) // 56 (but it is string now)
console.log(myNum.toString().length) //2
console.log(myNum.toFixed(2)) // 56.00

const myOther = 123.879
console.log(myOther.toPrecision(3)) //124
console.log(myOther.toPrecision(4)) //123.9
console.log(myOther.toPrecision(2)) //1.2e+2

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000

//++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

console.log(Math.abs(-89)) // 89
console.log(Math.round(4.5)) //5
// There is another 2 function to take floor or ceiling values 
console.log(Math.ceil(4.5)) // 5
console.log(Math.floor(4.5)) //4
console.log(Math.min(2,3,4,5)) //2
console.log(Math.max(2,3,4,5,)) //5
console.log(Math.random()) // default:always between 0 to 1     
console.log((Math.random()*10) + 1) // we want value that is greater than 1 so we printed the value by adding 1 
console.log(Math.floor(Math.random()*10) + 1) // it will give floor value 

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)