# Introduction

## Change HTML Content

```bash
<p id="demo"></p>

<script>document.getElementById("demo").innerHTML = "Hello JavaScript";</script>
```

### Change HTML Attributes

```bash
<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
```

### Change HTML Styles

```bash
<p id="demo"></p>

<script>document.getElementById("demo").style.fontSize = "35px";</script>
```

### Functions - a block of JS code that can be executed when "invoked" or "called" for

## Output - JS displays data w/

### innerHTML

   ```bash
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

### `window.print()` - prints the content of the current window

 `<button onclick="window.print()">Print this page</button>`

## Statements - line of code commanding a task in a computer programming language (every program is just a sequence of statements)

### semicolons go at the end of each *executable* statement

### often start with a keyword to identify the JavaScript action to be performed

## Syntax

### Values - literals (fixed values) VS variables

### Expressions - combo of operators and operands that computes to a value

#### Operands - part of expression that represents the data being manipulated by the operator

#### Operators - used to execute operations on operands

##### Arithmetic ( + | - | * | / | % | ++ | -- )

- increment - adds 1 ( ++ ); returns the value from **BEFORE** the increment if placed **AFTER** the operand and returns the value from **AFTER** the increment if placed **BEFORE** the operand
- decrement - subtracts 1 ( -- ); returns the value from **BEFORE** the increment if placed **AFTER** the operand and returns the value from **AFTER** the increment if placed **BEFORE** the operand

##### Assignment ( = | += | -= | *= | /= | %= | **= |)

##### Comparison - compares operands and returns a logical value based on whether the comparison is true

##### ( < | > | <= | >= )

### Keywords - used to identify actions to be performed

### Identifiers - unique names that must begin with: a **letter**, **dollar sign**, or an **underscore**

### namespsace -  conceptual container that provides scope to identifiers; used to prevent collisions between them

### Variables - containers for storing any type of data

#### declare all variables at the beginning of a script

##### variables declared without a value have a **value AND type** of undefined

   **G2K:** you can manually empty a variable by setting it to undefined
   **NOTE:** an empty value isn't synonymous with undefined `let car = ""; // The value is "", the typeof is "string"`

<!-- Scope Redeclare Reassign Hoisted Binds this
var    No     Yes     Yes      Yes     Yes
let    Yes    No      Yes      No      No
const  Yes    No      No       No      No -->

## Data Types - Numbers, Strings, Bigint, Boolean, Undefined, Null, Symbol, Object

### objects - can contain an object, an array, or a date; object properties are written as name:value pairs

### numbers are always double (64-bit floating point)

### BigInt is used to store really big integer values `let x = BigInt("123456789012345678901234567890")`
