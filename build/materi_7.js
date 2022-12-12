"use strict";
// Function
// function declaration
function add(x, y) {
    return x + y;
}
console.log(add(3, 5));
// function expression
const addEx = function (x, y) {
    return x + y;
};
// arrow function
const addArrow = (x, y) => x + y;
// function with no return value
const hello = (name) => console.log("hello " + name);
function request(url, cb) {
    cb(url);
}
let fn = (str) => console.log(str);
request("https://www.typescriptlang.org/", fn);
// rest parameter
function fruitsCollection(item, ...restItems) {
    return item + " " + restItems.join(" ");
}
let fruits_rest = fruitsCollection("Apple", "Mango", "Avocado");
console.log("fruits_rest : ", fruits_rest);
// conditional type
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/
// with union
function CT(param) {
    return param;
}
// with generic
function CT_generic(param) {
    return param;
}
CT_generic("hello");
CT_generic(30);
