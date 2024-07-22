//Question#17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that
// you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list,
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.


let GuestList  = ["HINA", "BUSHRA", "ASFA", "NAZ" ];

let dontcome = GuestList[0];

console.log(dontcome, "are not coming");

GuestList.splice(0, 1, "HUMA");

console.log("Good news! we have found a bigger table for dinner.");

GuestList.unshift("MAHA");

GuestList.push("MAHA");

let middleindex: number = Math.floor(GuestList.length/2);

GuestList.splice(middleindex, 0, "MOON");

console.log("up dated list of our guests");

GuestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));

// invitation only two persons:

console.log("unfortunatly, program has been changesd now i am going to invite only two guest for dinner with me ");

// Using while loop to remove guest from the arry

while(GuestList.length > 2){
    let removeguest = GuestList.pop();
    console.log('sorry,${removedguest} i cant invite to dinner');

}
console.log("invitation  last the two guest");

GuestList.forEach(lasttwo =>console.log(`luckly ${lasttwo},YOU ARE STILL INVITED TO DINNER`));
// Removing lst two persons
GuestList.pop();
GuestList.pop();

console.log("empty list:",GuestList);





