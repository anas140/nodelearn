var modules = require('./module');

console.log(modules.counter([1,2,3,4,5]));
console.log(modules.adder(1,4));
console.log(`The Pi value = ${modules.pi}`);
console.log(modules.adder(modules.pi,4));
