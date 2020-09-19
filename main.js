"use strict";
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
// multi type varoables
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
