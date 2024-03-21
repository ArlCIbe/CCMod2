# function - block of code designed to perform a particular task; allows us to reuse code
  ### cannot be called without the () operator; accessing it w/o them will return the function itself, NOT the result of the function**
  ### () may include **parameter** names separated by commas; enclosed in () immediately following the identifier
  ### **arguments** are the values received by the function when it is invoked (IOW: **PARAMETERS = VARIABLES & ARGUMENTS = VALUES)

  ## immediately invoked function expressions - executed immediately after being defined; cannot be referenced after being called unless the global window object is passed as a parameter
   ### ( --> function keyword --> () --> {code} --> ) --> ()
   ```
    (function(){
       console.log("This function is called immediately");
    })();
   ```
  ## DECLARED - executed only after being called
   ### function keyword --> name, --> () --> {code} **in this order!** 
   ```
    function name(parameter1, parameter2, parameter3) {
    // code to be executed
    }
   ```
  ## invocation - when "something" **calls** a function
   1. **When an event occurs** 
   2. **When it is called from JS code**
   3. **Automatically (self-invoked)**

  ## return statement - where the function stops executing
   - **after invocation (part 1), JS "returns" to execute the code (part 3)**
   - **when functions compute a **return value**. it is "returned" back to the "caller"**

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

  ```
  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  ```
## AS YOU FORMULATE YOUR CODE, BE SURE TO KEEP IN MIND WHAT IT IS THAT YOU ARE WANTING YOUR CODE TO ACTUALLY ***DO***.  
 
 ### when to use ()
  #### `let value = toCelsius;` - ### returns the **function itself**

  #### `let value = toCelsius(77)`; ### returns the **result** of the function

 ### incorrect parameter usage
  #### `<p id="demo"></p>`; there is no innerHTML in the `<p>` tag
  #### `document.getElementById("demo").innerHTML = value;`; w/ nothing to insert, the return value will be **NaN**
   ##### **NaN** - Not a Number; used to represent an **undefined or unrepresentable value**. You get NaN when an operation that's supposed to return a number, but can't because of an **error or undefined/empty value**.
   ##### you can `isNaN()` to check whether a value is NaN; returns false if it's a number or can be converted to one.If true, you can use `Number()' to convert it to one.

 ### using functions as variables
  #### variable is used to store the return value of a function
  ```
  let x = toCelsius(77);
  let text = "The temperature is " + x + " Celsius";
  ```
  #### `let text = "The temperature is " + toCelsius(77) + " Celsius";` function used directly to represent variable value
  
  ### local variables - variables declared within a function
   #### created when a function starts, deleted when the function is completed
   #### can only be accessed from WITHIN the function they're declared in (note: this means variables with the same name can be used in other functions)
  ### 

  ### IIFEs tidbits
   #### good for initialization tasks
   #### useful for when you only need code to execute once
   #### wrapping them in () prevents collisions between identifiers and controls visibility of member functions