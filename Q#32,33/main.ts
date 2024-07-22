// QUESTION NO:32

/*Checking Usernames: Do the following to create a program that simulates how websites
 ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
 are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username. 

if a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not
 be accepted.*/

 //ARRY OF CURRENT USERS
 let current_users = ["Hameed","Imran","aamir","osman","Raza"]

 //ARRY OF NEW USERS
 let new_users = ["Aamir","Raani","Osman","Zuby","Sana"]

 //THROUGH LOOP CHECKING
 new_users.forEach(new_one_user =>{let our_condition = current_users.some(current_one_user => 
   current_one_user.toLowerCase() === new_one_user.toLowerCase())
 
 if(our_condition){console.log( `sorry ${new_one_user} is already taken!`)
 }else{
console.log( `This user name ${new_one_user} is avaiable`)
 }
})

//Questions NO:33
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 

Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a 
separate line.*/

let number = [1,2,3,4,5,6,7,8,9]
   for(let oneNumber of number){
   let ordinalEnding: String;
   if(oneNumber === 1){
      ordinalEnding = "st"
   }else if(oneNumber === 2){
      ordinalEnding = "nd"
   }else if(oneNumber === 3){
      ordinalEnding = "rd"
   }else{ordinalEnding = "th"
      console.log(`${oneNumber}${ordinalEnding}`)
   
   }
}

 
