export {};

// starting
const message = 'Hello Ali!';
console.log(message);

// variable declaration
const isAuth: boolean = true;
const value: number = 5;
const Name: string = 'Ali!';

// null and undified are sub-types to other types
const n: null = null;
const u: undefined = undefined;

const isBool: boolean = null;
const str: string = undefined;

// pick any style you want
let list1: number[] = [1, 2, 3, 4];
const list2: Array<Number> = [1, 2, 3, 4];

const person: [number, string, string] = [2, 'ali', 'family'];

// it will start from 3
enum Color {
  green = 3,
  red,
  blue,
}

const val: Color = Color.green;

// console.log({ val }); // 3

// you can reassgin to any type or unknown type
let anyValue: unknown = 4;
let any2Value: any = 4;

any2Value = true;
anyValue = 'Ali';

// anyValue.toUpperCase(); // compiler will gave an error
(anyValue as string).toUpperCase();

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === 'object' && name in obj;
}

// console.log(anyValue.name); // will gave an error

if (hasName(anyValue)) {
  console.log(anyValue.name);
}

// multi type varoables

let multiType: number | boolean;

multiType = 2;
multiType = true;

// functions

const minus = (num1: number, num2: number): number => num1 - num2;
minus(5, 2); // arguments must be  2 numbers
// minus(5); // compiler will gave an error

const add = (num1: number = 4, num2?: number): number => num1 + num2;

// both will works because the optional
add(3); // the other will treated as undified and you can handle it in the functions
add(3, 2);
