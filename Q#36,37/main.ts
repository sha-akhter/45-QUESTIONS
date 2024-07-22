//QUESTIONS NO:36
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be
 printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message
  printed on it. Call the function.*/

  function make_shirt(size: string, printMessage: string){
    console.log( `you selected ${ size} ${printMessage} print on shirt`);

  }
     make_shirt("medium","Be happy")

  
//QUESTION NO:37
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
 I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a 
 different message*/

 function make_Shirt(size: string ="Large", printMessage: string = "I love typescript"){
    console.log(`creating a ${size} shirt with the  ${printMessage} print on shirt`);
    
 }
 make_Shirt()
 make_Shirt ("medium")
 make_Shirt ("small","I love javascript")