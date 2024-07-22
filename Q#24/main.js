"use strict";
//Q#24
/*More Conditional Tests: You don’t have to limit the number of tests you create to
10.
 If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators

• Test whether an item is in a array
• Test whether an item is not in a arraY*/
//TEST WITH STRINGS(equal, not equal)
let mango = "mango";
console.log(" Is mango is equal to mango?");
console.log(mango == "mango");
console.log("Is mango is not equal to mango?");
console.log(mango != "mango");
//TEST USING LOWERCASE FUNCTION(equal notequal)
let uppercaseMANGO = "MANGO";
console.log("  Is MANGO is equal to mango after converting to lowercase?");
console.log(uppercaseMANGO.toLowerCase() == "mango");
console.log("  IS MANGO is  not equal  to mango after converting to lowercase?");
console.log(uppercaseMANGO.toLowerCase() != "mango");
//TEST USING NUMERICALS(equal not equal,><, >= <=,)
let twenty = 20;
let thirty = 30;
console.log("Is 20  is equal to thirty ?");
console.log(twenty == thirty);
console.log("Is 20  is not equal to thirty ?");
console.log(twenty != thirty);
console.log("Is 20 is greater than thirty?");
console.log(20 > 30);
console.log("Is 20 is less than thirty?");
console.log(20 < 30);
console.log("Is 20 is greaterthan or equal to thirty?");
console.log(20 >= 30);
console.log("Is 20 is lessthan or equal to thirty?");
console.log(20 <= 30);
//TEST USING && (AND),|| (0R) operators
console.log("twenty is not equal  to thirty and thirty is greater then twenty");
console.log(twenty != 30 && thirty > twenty);
console.log("twenty is not equal to thirty and twenty is greaterthen 10");
console.log(twenty != 10 && twenty > 10);
console.log("20 is greter than 40  OR 20 is equal to 20");
console.log(20 > 40 || 20 == 20);
console.log("20 is greater then 40 or 20 is not equal to 20");
console.log(20 > 40 || 20 != 20);
// ARRY TEST(whether an item is include in arry)
let fruits = ["mango", "apple", "banana"];
console.log("Is mango include in my arry");
console.log(fruits.includes("mango"));
console.log("Is mango is not include  in my arry");
console.log(!fruits.includes("mango"));
