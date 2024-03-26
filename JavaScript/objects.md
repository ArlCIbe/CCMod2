# object - variable that is a container for **properties** and **methods**; usually declared with **const** keyword

## defined and/or created with an **object literal** or with keyword **new**

## **property** - named value inside an object written as a name:value pair

## use `objectName["propertyName"]` or `objectName.propertyName` to access object properties

## **method** - function stored inside a property as a **function defintion**; performs actions on objects

## use `objectName.methodName()` to access object methods

## EXAMPLE OF **OBJECT LITERAL:**

  ```bash
   const person = {
   firstName: "John",
   lastNamhe : "Doe",
   id: 5566,
   fullName : function() {
     return this.firstName + " " + this.lastName;
    }
   };
  ```

## EXAMPLE OF **NEW** KEYWORD

  ```bas
   function Foo(bar1, bar2) {
   this.bar1 = bar1;
   this.bar2 = bar2;
   }

   const test = {carName: Foo()}

   const car1 = new Car('Eagle', 'Talon TSi', 1993, test);
   ```

## **NOTE: Do Not Declare Strings, Numbers, and Booleans as Objects**

## **this** - a keyword that refers to an object; WHICH object depends on how **this** is being invoked

- object method - refers to the object.
  - alone - refers to the global object.
  - function - refers to the global object.
  - function in strict mode - undefined.
  - event - refers to the element that received the event.
  - methods like call(), apply(), and bind() - can refer this to any object.

## in a function definition, **this refers to the object that "owns" it *

## e.g. "person" owns "firstName" in the object literal above

## NOTE: this is **NOT** a variable; you cannot change its value
  
### will organize this later

functions are first-class objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called

Class versus object

A class is a template for objects. A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class.

What is class or object in JavaScript?
Objects are more flexible and can be modified dynamically by adding or removing properties and methods at runtime. In summary, classes provide a more formal and organised way of defining objects and their behavior, while objects offer more flexibility and dynamic capabilities.

What is a class in programming?
In object-oriented programming, a class is a template definition of the methods and variables in a particular kind of object. Thus, an object is a specific instance of a class; it contains real values instead of variables. The class is one of the defining ideas of object-oriented programming.
