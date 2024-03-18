/* PART 1 */ const myHeading = /* PART2 */ document.querySelector("h1");

// PART 1 =  DECLARATION: where you "declare" an IDENTIFIER for the VARIABLE (we gave the variable the identifier "myHeading")  
//PART 2 = INITIALIZER: where you give a variable a "value" (we assigned the data contained in the h1 element to "myHeading")

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

myHeading.textContent = "Hello world!"; 


let iceCream = "chocolate";

/* lines 17-23 are a type of CONDITIONAL called an "if...else" STATEMENT; if comparison returns true the 1st block of code will run; if not, the 2nd block will run  */

    // expression inside if() is the test; uses the STRICT EQUALITY OPERATOR to compare the IDENTIFIER to the value. 
    if (iceCream === "chocolate") 
    
     {alert("Yay, I love chocolate ice cream!");} /* 1st block */

    else 
    
     {alert("Awwww, but chocolate is my favorite…");} /* 2nd block */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

let myVariable = document.querySelector("p");
/* document.querySelector is a pre-made FUNCTION; "p" is the PARAMETER passed into function, and the text inside the <p> element is the ARGUMENT */

// num1 and num2 are PARAMETERS
function multiply(num1, num2) {
    let result = num1 * num2;
    // "return" tells browser to retrieve a function's variable; must be done because variables defined inside functions aren't available outside of those functions
    return result;
  }

// numbers in parentheses are ARGUMENTS
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// document is EVENT TARGET and querySelector picks what we attach EVENT HANDLER to; then we call EH's addEEventListener function and pass in the name of the EVENT and a FUNCTION to run when that event happens
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });


/* source text of JavaScript script gets scanned from left to right, and is converted into a sequence of input elements which are tokens, control characters, line terminators, comments, or whitespace. (Spaces, tabs, and newline characters are considered whitespace.)                                                                                            */
