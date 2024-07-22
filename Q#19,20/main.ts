//Q#19

//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.

// according to ex.14
let guestlist = ["HINA", "BUSHRA", "ASFA", "NAZ", "RIJA" ];
 // guestlist.forEach(oneGuest => console.log(`salam ${oneGuest}, wouid you like to dinner to me?`));

 let lengthguest: number = guestlist.length;
 console.log(`we are inviting total ${lengthguest} guest.`);

 //Q#20
 //Think of something you could store in a array. For example, you could make a list of mountains,
 // rivers, countries, cities, languages, or anything else you’d like.
 // Write a program that creates a list containing these items.

 let mountainsname: string[] = ["himalia", "hidukush", "k2", "nangaburbat", "tirchmir",];
 console.log("list of mountains.");
 mountainsname.forEach(mountainsname => console.log(mountainsname));



