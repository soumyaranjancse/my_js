//stack(primitive)
let id = 12345
let anotherID=id
anotherID= 45

console.log(id)
console.log(anotherID)
// *********************************************************************
// heap(non-primitive)
let myObj = {
    name :"Soumya",
    email : "soumya@gmail.com"
}

let anotherObj = myObj

anotherObj.email="cognizant@gmail.com"

console.log(myObj)
console.log(anotherObj.email)