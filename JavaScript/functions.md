# function - block of code designed to perform a particular task; allows us to reuse code
 ## components: function keyword --> name, --> () **in this order!**
  ### () may include **parameter** names separated by commas, which would be listed inside the () in the function definition;
  ### function cannot be called without the () operator
  ### **NOTE: accessing a function w/o () will return the function itself, NOT the result of the function**
  ### **arguments** are the values received by the function when it is invoked (IOW: **PARAMETERS = VARIABLES & ARGUMENTS = VALUES)
  ### the code to be executed by the function is placed in {}
   ```
    function name(parameter1, parameter2, parameter3) {
    // code to be executed
    }
   ```

## invocation - when "something" **calls** a function
 ### 1. When an **event** occurs 
 ### 2. When it is called from JS code
 ### 3. Automatically (self-invoked)

## return statement - where the function stops executing
 ### after invocation (part 1), JS "returns" to execute the code (part 3)
 ### when functions compute a **return value**. it is "returned" back to the "caller"

## return value - the computed result of the function (IOW it can exist outside of the {} )

### PART 1: `let x = myFunction(4, 3);` - **INVOCATION**
### function is "called" to execute the code(see invocation example 2) 
 #### **variable x - CALLER**
  #### **Note: the RETURN VALLUE** ***WILL*** **end up inside the x variable; ATP in the operation, this has** ***NOT*** **happened yet.**

### PART 2: **RETURN**
```
function myFunction(a, b){
    return a * b;
}
```
### product of a and b - **RETURN VALUE** 
### the return value (12) is officially inside the variable x and available for use

### ```
### function toCelsius(fahrenheit) {
###  return (5/9) * (fahrenheit-32);
### }
### ```

## AS YOU FORMULATE YOUR CODE, BE SURE TO KEEP IN MIND WHAT IT IS THAT YOU ARE WANTING YOUR CODE TO ACTUALLY ***DO***.  
 
 ### when to use ()
  ### `let value = toCelsius;` - ### returns the **function itself**

  ### `let value = toCelsius(77)`; ### returns the **result** of the function

 ### incorrect parameter usage
  ### `<p id="demo"></p>`; there is no innerHTML in the `<p>` tag
  ### `document.getElementById("demo").innerHTML = value;`; w/ nothing to insert, the return value will be **NaN**
   ### **NaN** - Not a Number; used to represent an **undefined or unrepresentable value**. You get NaN when an operation that's supposed to return a number, but can't because of an **error or undefined/empty value**.
   ### hint: you can `isNaN()` to check whether a value is NaN; returns false if it's a number or can be converted to one.If true, you can use `Number()' to convert it to one.

 ### using functions as variables
  ### variable is used to store the return value of a function
  ```
  let x = toCelsius(77);
  let text = "The temperature is " + x + " Celsius";
  ```
  ### `let text = "The temperature is " + toCelsius(77) + " Celsius";` function used directly to represent variable value
  
  ### local variables - variables declared within a function
   ### created when a function starts, deleted when the function is completed
   ### can only be accessed from WITHIN the function they're declared in (note: this means variables with the same name can be used in other functions)
  ### 

  ```
  // code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

  // code here can NOT use carName
  ```
## will organizer later

Self-invoking functions in Javascript
Samah Gaber
Samah Gaber

·
Follow

3 min read
·
Oct 18, 2020
29


2



IIFE — IMMEDIATELY INVOKED FUNCTION EXPRESSION


Photo by Roman Synkevych on Unsplash
In JavaScript, it’s common to hear lots of strange terminology without a lot of description around what it is or what it does. I want to try and explain what a self invoking function is and why you should consider them.

In JavaScript, functions are usually declared like this:

function myFunctionName (parameters) {
   //some code that does something.
}
This is called a declared function. Declared functions are not executed immediately. Basically, declared functions are saved for you to use them somewhere else so this means it’s not called upon or “invoked” until you call it like this:

myFunctionName ("Function parameters");
A self-invoking function is a nameless (anonymous) function that is invoked immediately after its definition.

An anonymous function is enclosed inside a set of parentheses followed by another set of parentheses (), which does the execution.

(function(){
    console.log("This function is called immediately");
})();
Self-invoking functions are useful for initialization tasks. For example, if we have a web page in which we want to attach event listeners to DOM elements and other initialization work, self-invoking functions would be the best tool for the job!

The primary benefit of self-invoking functions is that they execute only once and won’t fill the global namespace with all sorts of crud that lasts for the lifetime of the page.

It doesn’t seem like adding a few things to the global namespace would be a problm until you start getting into thousands of lines of javascript and having collisions between functions or variables.

How they actually work ?
Since the function is defined anonymously, there are neither global nor even local variables except, of course, the variables declared inside the function’s body. We do not keep reference to the function, not even to its return value. After the function has been initialized, it is being immediately invoked and it’s executed only once as after the execution we’ll lose the reference to the function.

How to write them ?
There is a few small (but important) syntax variations. Douglas Crockford’s JSLint offers the correct declaration for self-invoking functions as:

(function () {
  // body
}());
An alternative syntax, which Crockford calls “dog balls”, is as follows:

(function () {
  // body
})();
I personally find the second variant to be more clear.

You can also pass parameters to the self-invoking functions. It is a commonly used practice to pass references to global objects:

(function (w, d, $) {
  // body
}(window, document, jQuery));
A self-invoking function can have variables and methods but they cannot be accessed from outside of it. To access them, the global window object has to be passed as a parameter.

Consider a self-invoking function below, containing the variable pi and the function e(). A global window object is passed and both pi and e() are assigned to the global variables window.pi and window.e respectively

(function(window){
    var pi = 3.141;
    function e() {
	return Math.E;
    }
    
    window.pi = pi;
    window.e = e;
})(window);
In the browser console, the command pi will return 3.141 and the command e() will return 2.718281828459045.

> pi; // 3.141
> e(); // 2.718281828459045
Important note:
In programming we usually call functions which invoke themselves recursive functions. That is the reason Ben Alman gave self-invoking functions a new name: Immediately Invoked Function Expression (IIFE). It is recommended to use the term IIFE since it’s semantically correct and more clear.

Conclusion
The purpose of wrapping the function is for the namespace and controling the visibility of member functions. It wraps the code inside a function scope and decreases clashing with other libraries. And it’s useful for initialization tasks.