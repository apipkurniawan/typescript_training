// Function
// // function declaration
// function add(x: number, y: number): number {
//   return x + y;
// }

// console.log(add(3, 5));

// // function expression
// const addEx = function (x: number, y: number): number {
//   return x + y;
// };

// // arrow function
// const addArrow = (x: number, y: number) => x + y;

// // function with no return value
// const hello = (name: string) => console.log("hello " + name);

// // function with callback
// type Greater = (message: string) => void;
// function request(url: string, cb: Greater) {
//   cb(url);
// }

// let fn = (str: string) => console.log(str);
// request("https://www.typescriptlang.org/", fn);

// // rest parameter
// function fruitsCollection(item: string, ...restItems: string[]) {
//   return item + " " + restItems.join(" ");
// }
// let fruits_rest = fruitsCollection("Apple", "Mango", "Avocado");
// console.log("fruits_rest : ", fruits_rest);

// // conditional type
// /*
//   - accept parameter either string or number
//   - return either string or number
//   - don't use `any`
// */
// // with union
// function CT(param: string | number): string | number {
//   return param;
// }
// // with generic
// function CT_generic<T>(param: T) {
//   return param;
// }
// CT_generic<string>("hello");
// CT_generic<number>(30);
