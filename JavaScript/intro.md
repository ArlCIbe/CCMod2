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

## Functions - a block of JS code that can be executed when "invoked" or "called" for

## Output - JS data that we can see (as opposed to HTML, which automatically displays in the browser)

### innerHTML

   ```bash
   <p id="demo"></p>

   <script>document.getElementById("demo").innerHTML = 5 + 6;</script>
   ```

### `document.write()`

  **NOTE:** Using document.write() **after** an HTML document is loaded will delete all existing HTML; should only be used for testing.

   `<script>document.write(5 + 6);</script>`

### `window.alert()`

  **NOTE:** `Window` is the global scope object, meaning variables, properties, and methods by default belong to it, so actually writing it is optional. IOW, both of the lines of code below are valid and would give you the same result.

  `<script>window.alert(5 + 6);</script>`

  `<script>alert(5 + 6)</script>` 

### `console.log()` - displays info in the browser's console; good for debugging as it will display error messages when your code is not working correctly

### `window.print()` - opens printer dialog box; prints the content of the current window

## Statements - line of code commanding a task in a programming language (every program is just a sequence of statements)

### composed of values, operators, expressions, keywords, and comments

### executed, one by one, in the same order as they are written.

### semicolons go at the end of each *executable* statement

### statements can be grouped together inside {}; this group is called a code block, and it indicates that the statements inside it are meant to be executed together.

### statements often begin with a keyword; keywords help identify the JS action to be performed

## Syntax - rules that dictate the structure of a programming language's symbols, punctuation, and words

### JS syntax defines two types of values: literals and variables

### literals - numbers can be written w/ or w/o decimals and string is text written in ' ' or " "

### variables - name of a location that stores data values

### Expressions -  line of code that produces a value

### Operators - used to perform operations on operands

### Operands - values that the operator works on

### Types of Operators:

### Arithmetic ( + | - | * | / | % | ++ | -- )

### increment - adds 1 ( ++ ); returns the value from **BEFORE** the increment if placed **AFTER** the operand and returns the value from **AFTER** the increment if placed **BEFORE** the operand

### decrement - subtracts 1 ( -- ); returns the value from **BEFORE** the increment if placed **AFTER** the operand and returns the value from **AFTER** the increment if placed **BEFORE** the operand

### Assignment ( = | += | -= | *= | /= | %= | **= |)

### Comparison ( < | > | <= | >= ) 

### compares operands and returns a logical value based on whether the comparison is true

### Identifiers - unique names that must begin with a letter, dollar sign, or an underscore

### Data Types

### Numbers 

### Strings

### Bigint

### Boolean

### Undefined 

### Null

### Symbol

### Object

### objects - can contain an object, an array, or a date;<br> their properties are written as name:value pairs

### numbers are always double (64-bit floating point)

### BigInt is used to store really big integer values `let x = BigInt("123456789012345678901234567890")`

### events - "things" that happen to HTML elements