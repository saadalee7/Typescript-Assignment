"use strict";
// Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
// creating string for example
let car = 'subaru';
// test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //true
// test 2
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //true
// test 3
console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'honda'); //true
// test 4
console.log("Is car !== 'Honda'? I predict True.");
console.log(car !== 'honda'); //true
//test 5
console.log("Is car,Upper Case == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU'); //true
//test 6
console.log("Is car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU'); //false
//test 7
console.log("Is car === 'SUBARU'? I predict False.");
console.log(car === 'SUBARU'); //false
//test 8
console.log("Is car.Lower Case == 'SUBARU'? I predict False.");
console.log(car.toLowerCase() == 'SUBARU'); //false
//test 9
console.log("Is car.Upper Case == 'subaru'? I predict False.");
console.log(car.toUpperCase() == 'subaru'); //false
//test 10
console.log("Is car == 'Honda'? I predict False.");
console.log(car == 'honda'); //false
