// Array

const myArr = [11, 12, 13, 14, 15, 516, 66]
const myHero = ["SM", "IM", "BM", "F", "T", "BP"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[0])

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(1)
// myArr.shift(1)
// myArr.shift()
// myArr.shift(11)

// console.log(myArr.includes(66))
// console.log(myArr.indexOf(66))
// console.log(myArr.indexOf(6))

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice, Splice

// console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

// console.log(myn1)
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
// console.log("C", myArr)
// console.log(myn1)
// console.log(myn2)

// *******************************************************


const mar_hero = ["Thor", "Ironman", "Spiderman"]
const dc_hero = ["Superman", "Batman", "Flash"]

// mar_hero.push(dc_hero)

// console.log(mar_hero)
// console.log(mar_hero[3])
// console.log(mar_hero[3][1])

// const allHeros = mar_hero.concat(dc_hero)
// console.log(allHeros);


const allNewHeros = [...mar_hero, ...dc_hero]

// console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [6, 7, [4, 5]]]

// console.log(another_array);
// const real_another_arr = another_array.flat(Infinity)
// console.log(real_another_arr);


console.log(Array.isArray("Bishal"))
console.log(Array.from("Bishal"))
console.log(Array.from({name:"bishal"}))     // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


