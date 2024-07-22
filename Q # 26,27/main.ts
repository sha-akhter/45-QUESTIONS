//QUESTIONS NO:26

/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 
5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player 
just earned 10 points.
• Write one version of this program that runs the if block and another that runs
the else block*/

 let alienColor = "green";
 if (alienColor === "green") {
    console.log(" the plyers just earned 5 points");
    
 }
 else {
    console.log("the players just earned 10 points");
    
 }

 //version of this program
 if (alienColor  ===  "black"){
    console.log("come from if stament");   
 }
 else{
    console.log("come from else satement");
 } 

 //Questions no:27
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.*/

// VERSION1
let alienColor1 : "green";

if(alienColor === "green"){ 
    console.log("version1:the players earned 5 points");
}
else if(alienColor === "yellow"){
    console.log("the playes earned 10 points");   
}
else if(alienColor === "red"){
    console.log("the playes earned 15 points");  
}

//VERSION2
let alienColor2 = "yellow";
if(alienColor2 === "green"){
    console.log("the players earned 5 points");   
}
else if(alienColor2 === "yellow"){
    console.log("version2:the players earned 10 points");  
}
else if(alienColor2 === "red"){
    console.log("the players earned 15 points");  
}

//VERSION3
let alienColor3 = "red";
if (alienColor3 === "green"){
    console.log("the players earned 5 points");
    
}
else if (alienColor3 === "yellow"){
    console.log("the players earned 10 points");
    
}
else if(alienColor3 === "red"){
    console.log("version3: the plyers earned 15 points");
    
}
 


