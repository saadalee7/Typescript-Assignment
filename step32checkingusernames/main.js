"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username.
//  If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// creating 5 names in array
let current_users = ['Ali', 'Nabeel', 'Salman', 'Danish', 'Faisal'];
// creating 5 names which is included 2 same name
let new_users = ['Ali', 'Nabeel', 'Saad', 'Sameer', 'Farhan'];
// creating a for-of loop
for (let userName of new_users) {
    let usernameTaken = current_users.some(current_user => current_user.toLowerCase() === userName.toLowerCase()); // checking comparison
    if (usernameTaken) {
        console.log(`Sorry, ${userName} is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! ${userName} is available.`);
    }
}
