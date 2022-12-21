// // * Tipe data & Typescript Type

// // cara deklarasi type dalam typescript :
// let ti = "hello"; // type inference (implicit)
// let ta: string = "hello ts"; // type annotations (explicit)

// let a; // undefined
// console.log("a", typeof a);
// let b = true; // boolean
// // console.log("b", typeof b);
// let c = 1; // number
// // console.log("c", typeof c);
// let d = "hello"; // string
// // console.log("d", typeof d);
// let e = 100n; // big int (starting ES2020)
// // console.log("e", typeof e);
// let f = Symbol("Sym"); // symbol (starting ES2015)
// // console.log("f", typeof f);
// let g = function () {
//   return null;
// };
// // console.log("g", typeof g);
// let h = null; // null
// // console.log("h", typeof h);
// let i = {}; // Object Literal
// // console.log("i", typeof i);
// let j: any[] = []; // array
// // console.log("j", typeof j);

// // bisa diisi dengan berbagai macam type data
// let k: any; // kurang disarankan karena benefit dari typescript jadi hilang
// k = "apip";
// k = 34;
// k = [6, 7, 8];

// // union (tipe data yang terdiri dari lebih dari satu dan dipisah dengan simbol vertical bar)
// let multi: string | number;
// multi = "Hello";
// multi = 78;
// // multi = true; // tidak bisa diisi selain tipe data yg di deklarasikan

// // type aliases (membuat tipe data)
// type customType = string | boolean;

// let myType: customType;
// myType = "apip";
// myType = true;
