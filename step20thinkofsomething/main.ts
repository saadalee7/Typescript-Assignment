// Think of something you could store in a array.
let countries :string[] = ['USA', 'Canada', 'Australia', 'Barzil', 'UK'];

console.log('Lists of Countries:');

for(let country of countries){ // using for.of loop for make a list
    console.log(country);
}

console.log('Lists of Countries:');

for (let country = 0; country < countries.length; country++) { // using simple 'for' loop for make a list
    console.log(countries[country]);
}