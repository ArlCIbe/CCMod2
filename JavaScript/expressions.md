Variables

### When to Use var, let, or const

- Always use const if the value or type (arrays and objects) should not be changed
  - Only use let if you can't use const
  - Only use var if you MUST support old browsers.

### let

- has block scope
- can't be redeclared ***in the same scope***

``` bash
    let x = 10;
    // Here x is 10

    {
    let x = 2;
    // Here x is 2
    }

    // Here x is 10
    ```
 - **CAN'T** be accessed from outside the block it's declared in

 ### var 
 - always has global scope
 - redeclaring a variable inside a block will also redeclare the variable outside the block
    ```
    var x = 10;
    // Here x is 10

    {
    var x = 2;  
    // Here x is 2
    }

    // Here x is 2
    ```
 - **CAN** be accessed from outside the block it's declared in
 - can be initialized at any time (i.e. can be used before it's declared)

 ### const - constant reference to a value
 - has block scope
 - can't be redeclared or reassigned
 - hoisted to the top, but **NOT** initialized
  NOTE: using a const variable before it is declared will result in a ReferenceError

 ### Hoisting -  moving declarations to the top

 ### Other Operators [Operator Precedence](https://www.w3schools.com/js/js_precedence.asp)
  
  #### Bitwise - treats their operands as a set of 32 bits (zeros and ones) 
   - & - and
   - | - or
   - ~ - not
   - ^ - xor
   - << / >> / >>> - left / right / unsigned right shift

   #### Logical - determine the logic between variables or values
   - && - and
   - || - or
   - ! - not  

  #### Other Comparison - determine equality or difference between variables or values
   - == - equal to 
   - === - equal value and equal type
   - != - not equal
   - !== - not equal value or not equal type 
   - ? - **ternary:** assigns a value to a variable based on some condition.
    `variablename = (condition) ? value1:value2`
   - ?. - **optional chaining:** returns undefined if an object is undefined or null (instead of throwing an error)
    ```
    // Create an object:
    const car = {type:"Fiat", model:"500", color:"white"};
    // Ask for car name:
    document.getElementById("demo").innerHTML = car?.name;
    ```

  #### Type
   - typeof - returns the type of a variable/expression `typeof "John" // Returns "string"`
   - instanceof - returns true if an object is an instance of an object type

  ### Other Assignment

   ##### Bitwise ( &= / ^= / |= )

   ##### Shift ( <<= / >>= / >>>= )

- ?? - **nullish (null or undefined) coalescing:** if the first value is undefined or null, the second value is assigned.

### note
 #### if the first operand is a string, all operands are treated as strings
 #### Extra large or extra small numbers can be written with scientific (exponential) notation
  ```
  let y = 123e5;    // 12300000
  let z = 123e-5;   // 0.00123
  ```
 ####
