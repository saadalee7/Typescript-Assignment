let personName :string = "";

personName = prompt('What is your name?') || '';

let lowerCase :string = personName.toLowerCase();
let upperCase :string = personName.toUpperCase();
let tittleCase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

if(personName !== null && personName !== '') {
    alert(`Hello ${personName}, here are you name in:
    lowerCase ${lowerCase}
    upperCase ${upperCase}
    tittleCase ${tittleCase}`)
}
else {
    alert('Please fill your name !');
}