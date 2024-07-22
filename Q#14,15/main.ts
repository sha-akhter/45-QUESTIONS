//Question#14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would 
//you invite? Make a list that includes at least three people 
//you’d like to invite to dinner. Then use your list to print a message to each 
//person, inviting them to dinner.

 let guestlist = ["HINA", "BUSHRA", "ASFA", "NAZ", "RIJA" ];
  guestlist.forEach(oneGuest => console.log(`salam ${oneGuest}, wouid you like to dinner to me?`));


//Question#15
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.


let GuestList  = ["HINA", "BUSHRA", "ASFA", "NAZ", "RIJA" ];
let dontcome = guestlist[0];
console.log(dontcome, "not coming");
GuestList.splice(0, 1, "HUMA");
GuestList.forEach(guest => console.log(`salam ${guest}, wouid you like to dinner with me?`));





  
