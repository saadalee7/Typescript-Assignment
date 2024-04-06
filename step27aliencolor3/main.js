"use strict";
// Version 1 : Using if-else chain
let alien_color = 'yellow';
if (alien_color === 'green') {
    console.log('Congratulations! You just earned 5 points.');
}
else if (alien_color === 'red') {
    console.log('Congratulations! You just earned 10 points.');
}
else if (alien_color === 'yellow') {
    console.log('Congratulations! You just earned 15 points.');
}
else {
    console.log('Invalid alien color!');
}
// Version 2 : Using if-else chain with function
function calculatePoint(alien_color) {
    if (alien_color === 'green') {
        console.log('Congratulations! You just earned 5 points.');
    }
    else if (alien_color === 'yellow') {
        console.log('Congratulations! You just earned 10 points.');
    }
    else if (alien_color === 'red') {
        console.log('Congratulations! You just earned 15 points.');
    }
    else {
        console.log('Invalid alien color!');
    }
}
calculatePoint('yellow');
// Version 3 : Using a ternary operator
alien_color = 'yellow';
const messagePoint = alien_color === 'yellow' ? 'Congratulations! You just earned 5 points.' :
    alien_color === 'red' ? 'Congratulations! You just earned 10 points.' :
        alien_color === 'green' ? 'Congratulations! You just earned 15 points.' :
            'Invalid alien color';
console.log(messagePoint);
