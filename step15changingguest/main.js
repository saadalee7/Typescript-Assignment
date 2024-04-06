"use strict";
let guestLists = ['Imran khan', 'Nawaz Sharif', 'Asif Zardari'];
let i = 0;
for (let i = 0; i < guestLists.length; i++) {
    console.log('Dear Mr.' + guestLists[i] + ',\n\nIt is our plasure to invite you in our party.\n\nThank You!');
}
let absentGuest = 'Imran Khan';
let newGuest = 'Kamran Tasori';
guestLists[0] = newGuest;
for (let i = 0; i < guestLists.length; i++) {
    console.log('Dear Mr.' + guestLists[i] + ',\n\nIt is our plasure to invite you in our party.\n\nThank You!');
}
console.log(`Mr. ${absentGuest} is not comming to the party.`);
