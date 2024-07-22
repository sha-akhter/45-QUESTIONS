//QUESTION NO:34
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
 For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
 such as I really love pizza*/
var pizza = ["tikka", "BBQ", "tandoori"];
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onepizza = pizza_1[_i];
    console.log("I like ".concat(onepizza));
}
console.log("I LOVE PIZZA");
//QUESTION NO:35
/*Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a sentence
 such as Any of these animals would make a great pet*/
var petAnimals = ["CAT", "DOG", "COW"];
for (var _a = 0, petAnimals_1 = petAnimals; _a < petAnimals_1.length; _a++) {
    var onepet = petAnimals_1[_a];
    console.log("A ".concat(onepet, " would make a great pet"));
}
console.log("ANY OF THESE ANIMALS WOULD MAKE A  GREAT PET!");
