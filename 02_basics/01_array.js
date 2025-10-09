//array

const myarr = [1,2,3,4,5,6,"Soumya"]
console.log(myarr[3])

const myarr2 = new Array(1,2,3,4)
console.log(myarr2)

// array methods

myarr.push(7)
console.log(myarr);
myarr.pop()//removes the last element

myarr.unshift(10)//it inserts value at the very first index of the array
myarr.shift() // it removes the very first element of the array

console.log(myarr.includes(9)) // boolean type ans
console.log(myarr.indexOf(3)) //2

const newarr = myarr.join() // it wil give array values as string 

//slice ,splice

console.log(myarr)
const myn = myarr.slice(1,3)
console.log("After_slicing",myn)

const myn1 = myarr.splice(1,3)
console.log("After_splicing",myn1)

console.log(myarr) // main array changes after splice got executed . it 