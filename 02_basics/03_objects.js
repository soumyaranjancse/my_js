// singleton


// object literals

const mysym = Symbol("Key1")

const jsuser = {
    name: "Soumya",
    "full name":"Soumya Ranjan Behera",
    [mysym] : "mykey1",
    age : 56,
    loation : "Bhubaneswar",
    email : "lowkey@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(jsuser.email) // lowkey@gmail.com
console.log(jsuser["email"]) // lowkey@gmail.com

console.log(jsuser["full name"]) // Soumya Ranjan Behera

// console.log(jsuser.full name) -> we can't access the userdefined key using dot(.) 

console.log(jsuser[mysym]) //mykey1

// to overwrite a key 
jsuser.email = "soumyareet767@gmail.com"
console.log(jsuser.email) //soumyareet767@gmail.com

// to stop the overwritting
// Object.freeze(jsuser)
// jsuser.email = "rishiRetarded@gmail.com"
// console.log(jsuser); // it will be same and not being overwritten 

// if we want to add functions to our objects 
jsuser.greeting = function(){
    console.log("Hello, jay jagganath");
}
// console.log(jsuser.greeting); // undefined
console.log(jsuser.greeting());