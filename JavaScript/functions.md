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

### PART 2: 
### ```
### function myFunction(a, b) {
### // Function returns the product of a and b
###  return a * b;
### }
### ```

### **RETURN VALUE** is officially inside the variable x and available for use

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
   ### `<p id="demo"></p>`; 
   ### `document.getElementById("demo").innerHTML = value;` 
   ### , so there is no innerHTML to insert into the function

