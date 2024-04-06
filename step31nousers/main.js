"use strict";
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Creating a empty arrey
let usernames = ['admin', 'Ali', 'Umair', 'Nabeel'];
usernames = [];
// creating in if for-of loop
if (usernames.length > 0) {
    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log(`Hello ${username}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
else {
    console.log("We need to find some users!"); // output
}
// if(usernames.length > 0){
//     for(let i = 0; i < usernames.length; i++){
//         let username = usernames[i];
//         if(username.toLowerCase() === 'admin'){
//             console.log(`Hello ${username}, would you like to see a status report?`);
//         } else{
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// } else{
//     console.log("We need to find some users!");
// }
