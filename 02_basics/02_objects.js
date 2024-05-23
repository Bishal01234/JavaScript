// Object literals

const mySym = Symbol("key1")

const user = {
    name: "Bishal",
    "Full name": "Bishal Kar",
    [mySym]: "mykey1",
    age: 22,
    location: "Matabari",
    email: "bishal123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["Full name"]);
// console.log(user[mySym]);
// console.log(typeof user[mySym]);
// console.log(user.mySym);


user.email = "bishal321@gmail.com"
// Object.freeze(user)
user.email = "bishal0000@gmail.com"

// console.log(user);



user.greeting = function(){
    console.log("Hello Bishal")
}
user.greetingTwo = function(){
    console.log(`Hello , ${this.name}`)
}

// console.log(user.greeting());
// console.log(user.greetingTwo());



// ***************************************************


// const tnderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Jack"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "jack123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Bishal",
            lastname : "Kar"
        }
    }

}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj5 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2, obj5)

const objall = {...obj1, ...obj2, ...obj5}
// console.log(objall);


const users = [
    {
        id: 1,
        email: "hlo123@gmail.com"
    },
    {
        id: 2,
        email: "hlo213@gmail.com"
    },
    {
        id: 3,
        email: "hlo321@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('NAME'));


// *********************************************************

const course = {
    courselang: "Hindi",
    price: "free",
    courseteacher: "own"
}

// course.teacher

const {courseteacher: teach} = course

console.log(teach);

// {
//     "name": "jack",
//     "coursename": 'js in hindi',
//     "price": "free"
// }