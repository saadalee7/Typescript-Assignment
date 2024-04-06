"use strict";
let alien_color = 'green';
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color === 'green') {
    console.log('Congratulations! You just earned 5 points.');
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alien_color !== 'red') {
    console.log('Congratulations! You just earned 10 points.');
}
alien_color = 'red';
// Write one version of this program that runs the if block and another that runs the else block.
if (alien_color === 'green') {
    console.log('Congratulations! You just earned 5 points.');
}
else {
    console.log('Congratulations! You just earned 10 points.');
}
