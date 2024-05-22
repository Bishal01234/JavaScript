const accountId = 12345
let accountEmail = "bishal@123@gmail.com"
var accountPassword = "123321",
accountCity = "Jaipur"
let accountState;

// accountId = 2       // not allowed

accountEmail = "new@gmail.com"
accountPassword = "321321"
accountCity = "Matabari"

console.log(accountId);

/*
Prefer not to use var because
in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
