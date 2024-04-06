"use strict";
let guestLists = ['Imran khan', 'Nawaz Sharif', 'Asif Zardari'];
let i = 0;
// for (let i = 0; i < guestLists.length; i++) {
// console.log('Dear Mr.' + guestLists[i] + ',\n\nIt is our plasure to invite you in our party.\n\nThank You!');
// }
let absentGuest = 'Imran Khan';
let newGuest = 'Kamran Tassori';
guestLists[0] = newGuest;
// for (let i = 0; i < guestLists.length; i++) {
//     console.log('Dear Mr.' + guestLists[i] + ',\n\nIt is our plasure to invite you in our party.\n\nThank You!');
// }
console.log(`Mr. ${absentGuest} is not comming to the party.`);
console.log('Good News! We find Big Table so we are inviting 3 more Guests.');
guestLists.unshift('Zia Khan');
guestLists.splice(2, 0, 'Shehbaz Sharif');
guestLists.push('Bilawal Zardari');
// [Zia Khan, Kamran Tassori, Shebaz Sharif, Nawaz Sharif, Asif Zardari, Biwalal Zardari] 3 more guests added.
for (let i = 0; i < guestLists.length; i++) {
    console.log('Dear Mr.' + guestLists[i] + ',\n\nIt is our plasure to invite you in our party.\n\nThank You!');
}
console.log('\nSorry! We cannot arange big table, Only Two Peoples will be invited.');
while (guestLists.length > 2) {
    let removeGuest = guestLists.pop();
    console.log(`Sorry Mr.${removeGuest} You are not invited for Dinner.`);
}
for (let i = 0; i < guestLists.length; i++) {
    console.log('Dear Mr.' + guestLists[i] + ',\n\nYou are still invited.\n\nThank You!\n');
}
guestLists.splice(0, 2);
console.log(guestLists);
