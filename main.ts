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

// Composing Types

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

// interface
interface Person {
  firstName: string;
  lastName: string;
}

const fullName = (person: Person) => {
  console.log(`${person.firstName} ${person.lastName}`);
};

let p = {
  firstName: 'Sam',
  lastName: 'Fisher',
};

fullName(p);

// class

class Employee {
  // private employeeName: string; // private and only accessible within class
  // protected employeeName: string; // protected and only accessible within class 'Employee' and its subclasses.
  public employeeName: string; // or without public would work as public

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Hello ${this.employeeName}`);
  }
}

let emp1 = new Employee('Ali');

emp1.greet();
console.log(emp1.employeeName);

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  assignTask() {
    console.log(`manager assigning task!`);
  }
}

let man1 = new Manager('Sam');

man1.assignTask();
man1.greet();
console.log(man1.employeeName);
