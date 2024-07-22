//Q#18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//•Store the locations in a array. Make sure the array is not in alphabetical order.

//•Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let countriestovist: string[] = ["japan","behrain","london","canada","america"]
console.log(" original order:", countriestovist);

//print arry in alphbatical order
console.log("alphabetical order:",[...countriestovist].sort());

//still in its orginal order by prining it
console.log("still in an original order:", countriestovist);

//reverse alphabetical order wiyhout modifying
console.log("reverse original order:",[...countriestovist].reverse());

//change the origijal order again
console.log("back to original order:", countriestovist);

//reverse the order of list 
console.log("reverse the original arry:", countriestovist.reverse());

//back  reverse the order of list
console.log("back  in original arry:", countriestovist.reverse());


//sort to change arry now its reverse in alphabetical order
console.log("sorted in alphabetical order:", countriestovist.sort());

//original arry reverse again
console.log("original arry reVrse again:", countriestovist.reverse());                                                                                                                                                                  





