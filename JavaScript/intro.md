# Introduction

### Change HTML Content
```
document.getElementById("demo").innerHTML = "Hello JavaScript";
```

### Change HTML Attributes
```
<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
```

### Change HTML Styles
```
document.getElementById("demo").style.fontSize = "35px";
```

### Functions - a block of JS code that can be executed when "invoked" or "called" for.

## Output - JS displays data w/:
 ### innerHTML 
   ```
   <p id="demo"></p>

   <script>document.getElementById("demo").innerHTML = 5 + 6;</script>
   ```
 ### `document.write()`
  **NOTE:** Using document.write() **after** an HTML document is loaded will delete all existing HTML; should only be used for testing.
   `<script>document.write(5 + 6);</script>` 
 ### `window.alert()`
  `<script>window.alert(5 + 6);</script>`
  NOTE: the **window** keyword is optional; **window** is the global scope object, meaning variables, properties, and methods by default belong to it
 ### `console.log()` - good for debugging
 ### `window.print()` - prints the content of the current window.
 `<button onclick="window.print()">Print this page</button>`

## Statements 
 ### semicolons go at the end of each *executable* statement
 ### often start with a keyword to identify the JavaScript action to be performed

## Syntax
 ### Values - literals (fixed values) VS variables

 ### Expressions - combo of operators and operands that computes to a value.

  #### Operands - part of expression that represents the data being manipulated by the operator.

  #### Operators - used to execute operations on operands

   ##### Arithmetic ( + | - | * | / | % | ++ | -- )
   - increment - adds 1 ( ++ ); returns the value from **BEFORE** the increment if placed **AFTER** the operand and returns the value from **AFTER** the increment if placed **BEFORE** the operand 
   - decrement - subtracts 1 ( -- ); returns the value from **BEFORE** the increment if placed **AFTER** the operand and returns the value from **AFTER** the increment if placed **BEFORE** the operand

   ##### Assignment ( = | += | -= | *= | /= | %= | **= |)

   ##### Comparison - compares operands and returns a logical value based on whether the comparison is true 
   ##### ( < | > | <= | >= )
 
 ### Keywords - used to identify actions to be performed.

 ### Identifiers - unique names that must begin with: a **letter**, **dollar sign**, or an **underscore**

 ### Variables - containers for storing data
  ##### declare all variables at the beginning of a script
  ##### undefined variables - variables declared without a value

      Scope Redeclare Reassign Hoisted Binds this
var	   No     Yes	    Yes	     Yes     Yes
let	   Yes 	  No	    Yes	     No	     No
const  Yes	  No	    No	     No      No

## Data Types - Numbers, Strings, Bigint, Boolean, Undefined, Null, Symbol, Object