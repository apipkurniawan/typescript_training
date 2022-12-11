// Array & Tuple

// Array
// ada beberapa cara untuk mendeklarasikan tipe data array
// - menggunakan type inference
// - menggunakan square brackets
// - menggunakan generic array type

// array of number
let list = [1, 2, 3]; // type inference
let list_2: number[] = [1, 2, 3]; // square brackets
let list_3: Array<number> = [1, 2, 3]; // generic array type

// array of string
let fruits = ["apel", "mangga", "jeruk"];
let fruits_2: string[] = ["apel", "mangga", "jeruk"];
let fruits_3: Array<string> = ["apel", "mangga", "jeruk"];

// array with union
let list_union = ["Hello", 1, 2];
let list_union_2: (string | number)[] = ["Hello", 1, 2];
let list_union_3: Array<string | number> = ["Hello", 1, 2];

// Tuple
// tidak bisa menggunakan type inference
// karena memiliki length yang fix
let list_tuple: [string, number, number];
list_tuple = ["apip", 3, 4];
console.log("list_tuple : ", list_tuple);
console.log("list_tuple[2] : ", list_tuple[2]);

// array of object
// menggunakan inline interface
let list_array_object: { color: string; index: number }[];
list_array_object = [
  { color: "red", index: 2 },
  { color: "blue", index: 1 },
];
// menggunakan generic array
let list_array_object_2: Array<{ color: string; index: number }>;
list_array_object = [
  { color: "red", index: 2 },
  { color: "blue", index: 1 },
];

// array multi dimension [[]]
// let matrix: number[][]; // square brackets
let matrix: Array<Array<number>>; // generic array type
matrix = [
  [2, 3],
  [5, 4],
];

// destructuring
let [kk, ll, mm]: [number, number, string] = [3, 6, "hello"];
console.log("destructuring : ", mm);
