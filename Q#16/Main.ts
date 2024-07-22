//Question#16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found
// a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

   
let GuestList  = ["HINA", "BUSHRA", "ASFA", "NAZ" ];

let dontcome = GuestList[0];

console.log(dontcome, "not coming");

GuestList.splice(0, 1, "HUMA");

console.log("Good news! we have found a bigger table for dinner.");

GuestList.unshift("MAHA");

GuestList.push("MAHA");

let middleindex: number = Math.floor(GuestList.length/2);

GuestList.splice(middleindex, 0, "MOON");

console.log("up dated list of our guests");

GuestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));



