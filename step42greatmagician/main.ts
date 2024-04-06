// Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let magician: string[] = ['David Copperfield','Harry Houdini','David Blaine','Criss Angel'];

function make_great(magiciansArray:string[]){
    for (let index = 0; index < magiciansArray.length; index++) {
        magician[index] = 'The Great ' + magiciansArray[index];
    }

}

function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element)
    });
}

make_great(magician);
show_magicians(magician);

// Unchanged Magicians: Start with your work from Exercise 42.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

