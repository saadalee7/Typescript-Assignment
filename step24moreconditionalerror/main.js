"use strict";
// Tests for equality and inequality with strings
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
console.log("Is car == 'subaru'? I predict False.");
console.log(car != "subaru");
// Tests using the lower case function
console.log("Is car == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
console.log("Is car == 'subaru'? I predict False.");
console.log(car.toUpperCase() == 'subaru');
// Numerical tests involving equality and inequality
let x = 10;
let y = 5;
console.log("Is x == x? I predict True.");
console.log(x == x);
console.log("Is y == x? I predict False.");
console.log(y == x);
// greater than and less than
console.log("Is x > 1? I predict True.");
console.log(x > y);
console.log("Is x < 1? I predict False.");
console.log(x < y);
// greater than or equal to, and less than or equal to
console.log("Is x >= 1? I predict True.");
console.log(x >= y);
console.log("Is x <= 1? I predict True.");
console.log(x <= y);
// Tests using "and" and "or" operators
console.log("Is x > 0 && y > 0? I predict True.");
console.log(x > 0 && y > 0);
console.log("Is x > 0 && y < 0? I predict False.");
console.log(x > 0 && y < 0);
console.log("Is x > 0 || y > 0? I predict True.");
console.log(x > 0 || y > 0);
console.log("Is x < 0 || y < 0? I predict False.");
console.log(x < 0 || y < 0);
// Test whether an item is in a array
let newArray = [10, 8, 6, 4];
let item1 = 10;
let item2 = 9;
console.log("Is newArray in item1? I predict True.");
console.log(newArray.includes(item1));
console.log("Is newArray in item2? I predict False.");
console.log(newArray.includes(item2));
// Test whether an item is not in a array
console.log("Is not newArray in item2? I predict True.");
console.log(!newArray.includes(item2));
console.log("Is not newArray in item1? I predict False.");
console.log(!newArray.includes(item1));
