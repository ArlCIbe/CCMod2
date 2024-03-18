## Variables
 ### When to Use var, let, or const
  - Always use const if the value or type (arrays and objects) should not be changed
  - Only use let if you can't use const
  - Only use var if you MUST support old browsers.

 ### let 
 - has block scope 
 - can't be redeclared ***in the same scope***
    ``` 
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
   - &= - 
   - ^=  
   - |=  

  #### Comparison 
   - == - equal to 
   - === - equal value and equal type
   - != - not equal
   - !== - not equal value/type 
   - ? - ternary

  #### Logical
   - && - and
   - || - or
   - ! - not

  #### Bitwise 
   - & 
   - | 
   - ~ 
   - ^ 
   - << - left shift
   - >> - right shift
   - >>> - unsigned right shift

  #### Type
   - typeof - returns the type of a variable
   - instanceof - returns true if an object is an instance of an object type

  #### Bitwise Assignment ( &= / |= / ~= / ^= / <<= / >>= / >>>= )

