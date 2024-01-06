"use strict";
// * Function
// function declaration
function add(x, y, z = 0) {
    return x + y + z;
}
console.log("hasil : ", add(3, 5, 4));
console.log("hasil : ", add(3, 5));
// function expression
const addEx = function (x, y) {
    return x + y;
};
console.log("expression : ", addEx(3, 10));
// arrow function
// with return value
const addArrow1 = (x, y) => x + y;
const addArrow2 = (x, y) => {
    if (x) {
        return x + y;
    }
};
console.log("arrow funct1 : ", addArrow1(3, 4));
console.log("arrow funct2 : ", addArrow2(3, 4));
// with no return value
const hello = (name) => console.log("hello " + name);
hello("apip");
// rest parameter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
function fruitsCollection(item, ...restItems) {
    //   return item + "/" + restItems.join("/");
    return `${item}/${restItems.join("/")}`;
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
// function CT(param: string | number): string | number {
//   return param;
// }
// with generic
function CT_generic(param) {
    return param;
}
console.log(CT_generic("hello"));
console.log(CT_generic(32));
console.log(CT_generic("jakarta"));
console.log(CT_generic({ name: "red" }));
