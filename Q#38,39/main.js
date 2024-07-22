"use strict";
//QUESTION NO:38
/*Cities: Write a function called describe_city() that accepts the name of a city and its country.
 The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country
a default value. Call your function for three different cities, at least one of which is not in the
 default country.*/
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("sidni", "Australia");
//QUESTION NO:39
/*City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returne*/
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("sidni", "Australia"));
console.log(city_country("Tokyo", "Japan"));
