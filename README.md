# Intro to Typescript


I start learning TypeScript and It's kind of fun, and before I start build my project I want to be familiar with the fundamental concepts of Typescript.

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. In this repo,I will go over the fundamental concepts like variable declarations, variable types, functions, interfaces, classes and access modifiers.

main.ts is what I wrote and main.js is how ts compile it after checking the types


## Why Typescript ?

TypeScript provides highly productive development tools for JavaScript IDEs and practices, like static checking. TypeScript makes code easier to read and understand. With TypeScript, we can make a huge improvement over plain JavaScript.



## install Typescript

To install TypeScript, ensure you already have a recent version of Node.js and npm on your machine, and invoke

`npm install -g typescript`

## The Types

A type expression can refer to a specific type, such as boolean, or it can indicate something about program behavior, for example void. Type expressions can even have type variables, which are traditionally given with capital letters. this is an overview:



| Type | Description |
| ---- | ----------- |
| <strong>v</strong> | <strong>Unit Type</strong> <br /> Any value represents a type that consists only of that single value. Example: the following are actually types: 42, false, -9.5, "dog", null. Don’t get confused between the value 42 and the type 42. |
|boolean|JavaScript’s boolean type.
number	|JavaScript’s number type.	
string	|JavaScript’s string type.
symbol	|JavaScript’s symbol type.
undefined	|The type containing only the value undefined. This is a unit type, but it’s so commonly used that it’s worth pointing out on its own. Don’t get confused between the value undefined and the type undefined.
null	|The type containing only the value null. This is a unit type, but it’s so commonly used that it’s worth pointing out on its own. Don’t get confused between the value null and the type null.
void	|Used to mark functions that reach the end of their executing without ever returning or throwing, and thus return undefined. Saying the function is a “void function” is more accurate than saying “this function returns the value undefined” because, really, the intent for these kinds of functions is never to use their return value at all.
never	|Used to mark functions that don’t return anything because they always throw.
any|	This type is compatible is every type. Anything can be assigned to an any, and an any can be assigned to anything. It is a way of saying “Don’t check types here!”
T[] <br />Array<T>	| Array Type <br /> The type of all arrays, of any length, in which all elements have type T.
[T1,T2,...Tn] |	Tuple Type <br> The type of all tuples of length n in which the first element has type T1, the second element has type T1, and so on. Tuple and array values are syntactically the same!
T \| U	| Union type <br>The type containing all the values of T and all the values of U.
T & U	| Intersection type
Enum type | Enumerated data types (enums) are a set of numeric values with more friendly names. It's an addition on top of JavaScript that TypeScript offers. The variables of enumerated data types are declared with the keyword enum. Here's how you can declare an enum variable and use it in TypeScript: <br>  `enum CardTypes { Debit, Credit, Virtual } let card: CardTypes = CardTypes.Debit;`
Interface type | interface { ... }






