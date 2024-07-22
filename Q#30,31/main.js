"use strict";
// Question no:30
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'.
 Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin,
 would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again*/
let username = ["aqeel", "ali", "raza", "Admin", "bilal"];
//USING FOREACH LOOP ON ARRY
username.forEach(oneuser => {
    if (oneuser === "Admin") {
        console.log(`HELLO ${oneuser},would you like to see a status report?`);
    }
    else {
        console.log(`HELLO ${oneuser},thankyou for logging again`);
    }
});
//Question no:31
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is print*/
let userName = ["aqeel", "ali", "raza", "Admin", "bilal"];
userName = [];
if (userName.length === 0) {
    console.log("your arryb is empty we need to find some users!");
}
else {
    username.forEach(oneuser => {
        if (oneuser === "Admin") {
            console.log(`HELLO ${oneuser},would you like to see a status report?`);
        }
        else {
            console.log(`HELLO ${oneuser},thankyou for logging again`);
        }
    });
}
