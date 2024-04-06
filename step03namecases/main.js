"use strict";
let personName = "";
personName = prompt('What is your name?') || '';
let lowerCase = personName.toLowerCase();
let upperCase = personName.toUpperCase();
let tittleCase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, here are you name in:
    lowerCase ${lowerCase}
    upperCase ${upperCase}
    tittleCase ${tittleCase}`);
}
else {
    alert('Please fill your name !');
}
