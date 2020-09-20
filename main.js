"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// starting
var message = 'Hello Ali!';
console.log(message);
// variable declaration
var isAuth = true;
var value = 5;
var Name = 'Ali!';
// null and undified are sub-types to other types
var n = null;
var u = undefined;
var isBool = null;
var str = undefined;
// pick any style you want
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
var person = [2, 'ali', 'family'];
// it will start from 3
var Color;
(function (Color) {
    Color[Color["green"] = 3] = "green";
    Color[Color["red"] = 4] = "red";
    Color[Color["blue"] = 5] = "blue";
})(Color || (Color = {}));
var val = Color.green;
// console.log({ val }); // 3
// you can reassgin to any type or unknown type
var anyValue = 4;
var any2Value = 4;
any2Value = true;
anyValue = 'Ali';
// anyValue.toUpperCase(); // compiler will gave an error
anyValue.toUpperCase();
function hasName(obj) {
    return !!obj && typeof obj === 'object' && name in obj;
}
// console.log(anyValue.name); // will gave an error
if (hasName(anyValue)) {
    console.log(anyValue.name);
}
// Composing Types
var multiType;
multiType = 2;
multiType = true;
// functions
var minus = function (num1, num2) { return num1 - num2; };
minus(5, 2); // arguments must be  2 numbers
// minus(5); // compiler will gave an error
var add = function (num1, num2) {
    if (num1 === void 0) { num1 = 4; }
    return num1 + num2;
};
// both will works because the optional
add(3); // the other will treated as undified and you can handle it in the functions
add(3, 2);
var fullName = function (person) {
    console.log(person.firstName + " " + person.lastName);
};
var p = {
    firstName: 'Sam',
    lastName: 'Fisher'
};
fullName(p);
// class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Ali');
emp1.greet();
console.log(emp1.employeeName);
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.assignTask = function () {
        console.log("manager assigning task!");
    };
    return Manager;
}(Employee));
var man1 = new Manager('Sam');
man1.assignTask();
man1.greet();
console.log(man1.employeeName);
