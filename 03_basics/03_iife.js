// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);
})();

( function tea () {
    console.log(`DB CONNTECTED TWO`);
})();

( (name) => {
    console.log(`DB CONNTECTED ${name}`);
})('Bishal')





