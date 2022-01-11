// normal way of doing this
const arithmetic = require('./arithmetic_function_module');

console.log(arithmetic.add(10,15));
console.log(arithmetic.mul(10,15));
console.log(arithmetic.PI);


// object destructuring way syntax
const {add,mul,PI} = require("./arithmetic_function_module")

console.log(add(25,35));
console.log(mul(25,35));
console.log(PI);