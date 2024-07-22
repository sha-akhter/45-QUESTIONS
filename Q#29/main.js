"use strict";
//Question no:29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/
//make a arry of fovorite fruits
let favorite_fruits = ["mango", "strawberries", "orange"];
//if statements
if (favorite_fruits.includes("mango")) {
    console.log("I really like mango");
}
if (favorite_fruits.includes("strawberries")) {
    console.log("I really like  starwberries");
}
if (favorite_fruits.includes("apple")) {
    console.log("I really like apple");
}
if (favorite_fruits.includes("orange")) {
    console.log("I really like orange");
}
if (favorite_fruits.includes("banana")) {
    console.log("I really like banana");
}
