"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 5 Places to visit
let placesToVisit = ["South Korea", "Thailand", "China", "Japan", "London"];
console.log("Oraginal Order:", placesToVisit);
// alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());
// still in its original order 
console.log("Oraginal Order:", placesToVisit);
// array in reverse alphabetical order without changing the order
console.log("Alphabetical order without changing:", [...placesToVisit].sort().reverse());
// array is still in its original order
console.log("Oraginal Order:", placesToVisit);
// Reverse the order of your list
console.log("Reverse order:", placesToVisit.reverse());
// Reverse the order of your list again
console.log("Reverse order again:", placesToVisit.reverse());
// Sort your array so it’s stored in alphabetical order
console.log("Sort in alphabetical order:", placesToVisit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order
console.log("Sorted in reverse alphabetical order:", placesToVisit.sort().reverse());
