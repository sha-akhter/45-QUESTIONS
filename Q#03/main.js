"use strict";
//QUESTION NO:03
//Name Cases: Store a person’s name in a variable, and then print that person’s name
// in lowercase, uppercase, and titlecase.
let personName = "Shabana";
console.log("Lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\b\W/g, c => c.toUpperCase()));
