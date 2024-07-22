"use strict";
/*QUESTION NO:42
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `the Great ${name}`);
}
let magicians_name = ["Muneer", "Muqbool", "Zahoor"];
let great_magicians = make_great(magicians_name);
show_magicians(great_magicians);
/*QUESTION NO:43
Unchanged Magicians: Start with your work from Exercise 40.(42) Call the function make_great() with a copy of the array
of magicians’ names. Because the original array will be unchanged, return the new array and store it in a
separate array. Call show_magicians() with each array to show that you have one array of the original
 names and one array with the Great added to each magician’s name.*/
function show_Magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_Great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_names = ["Muneer", "Muqbool", "Zahoor"];
let copy_magicians_name = magicians_name.slice();
let copy_great_magicians = make_great(copy_magicians_name);
console.log("\noriginal Array\n");
show_magicians(magicians_name);
console.log("\ncopied  Array\n");
show_magicians(copy_great_magicians);
