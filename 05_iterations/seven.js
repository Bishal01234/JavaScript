// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10 )
// const newNums = myNums.map( (num) => { return num + 10 })

// const newNums = myNums
//                 .map( (num) => num * 10 )   
//                 .map( (num) => num + 1 )
//                 .filter( (num) => num >= 40)

// console.log(newNums);



const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, curval) {
//     console.log(`acc: ${acc} and curval : ${curval}`)
//     return acc + curval
// }, 6)

const myTotal = myNums.reduce( (acc, curval) => acc+curval, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "JS Course",
        price : 1999
    },
    {
        itemName : "Python Course",
        price : 1499
    },
    {
        itemName : "Mobile Course",
        price : 2999
    },
    {
        itemName : "Data Science Course",
        price : 3399
    },

]


const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)

console.log(priceToPay);