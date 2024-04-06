// Unchanged Magicians: Start with your work from Exercise 42.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician: string[] = ['David Copperfield','Harry Houdini','David Blaine','Criss Angel'];

function copy_array(arr:string[]){
    return [...arr];
}

function make_great(magiciansArray:string[]){
    for (let i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = 'The Great ' + magiciansArray[i];
    }

}

function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element)
    });
}

const copyArray = copy_array(magician);
make_great(copyArray);

console.log("\n\nThis is original array:");
show_magicians(magician);

console.log("\n\nThis is modified array:");
show_magicians(copyArray);



