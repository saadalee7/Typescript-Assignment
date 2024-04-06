"use strict";
let usernames = ['admin', 'Ali', 'Umair', 'Nabeel'];
for (let username of usernames) {
    if (username.toLowerCase() === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// for(let i = 0; i < usernames.length; i++){
//     let username = usernames[i];
//     if(username.toLowerCase() === 'admin'){
//         console.log('Hello admin, would you like to see a status report?');
//     } else{
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }
