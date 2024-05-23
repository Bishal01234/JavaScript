// Date

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2024,1,23)
// let myCreatedDate = new Date(2024, 1, 23, 14, 2, 34)
// let myCreatedDate = new Date("2024-05-23")
let myCreatedDate = new Date("05-23-2024")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStam = Date.now()

// console.log(myTimeStam)
// console.log(myCreatedDate.getTime())
// console.log(Date.now())
// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

// console.log(`Today is ${newDate.getDate()} and the time is ${newDate.toLocaleTimeString()}`)

newDate.toLocaleString('default',{
    weekday:"long",
})
