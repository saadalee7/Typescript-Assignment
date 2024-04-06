"use strict";
// Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
let magician = ['David Copperfield', 'Harry Houdini', 'David Blaine', 'Criss Angel'];
function make_great(magiciansArray) {
    for (let index = 0; index < magiciansArray.length; index++) {
        magician[index] = 'The Great ' + magiciansArray[index];
    }
}
make_great(magician);
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
// make_great(magician);
show_magicians(magician);
