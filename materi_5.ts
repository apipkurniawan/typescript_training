// // * Array & Tuple

// // * Array
// // ada beberapa cara untuk mendeklarasikan tipe data array
// // - menggunakan type inference
// // - menggunakan square brackets
// // - menggunakan generic array type

// // array of number
// let list = [1, 2, 3]; // type inference
// let list_2: number[] = [1, 2, 3]; // square brackets
// let list_3: Array<number> = [1, 2, 3]; // generic array type

// // array of string
// // ...

// // array with union (string dan number)
// let list_U: (string | number)[] = [1, 2, "tes"];
// let list_UG: Array<string | number> = [1, 2, "tes"];

// // * Tuple
// // array yg memiliki length yang fix
// // tidak bisa menggunakan type inference

// let list_tuple: [string, number, number];
// list_tuple = ["apip", 3, 4];
// console.log("list_tuple : ", list_tuple);
// // console.log("list_tuple[2] : ", list_tuple[2]);

// // array of object
// // menggunakan inline interface
// let list_array_object: Color[];
// list_array_object = [
//   {
//     color: "red",
//     index: 3,
//   },
//   { color: "blue", index: 1 },
// ];

// interface Color {
//   color: string;
//   index: number;
// }

// // menggunakan generic array
// let list_array_object_G: Array<Color>;
// list_array_object_G = [
//   {
//     color: "red",
//     index: 2,
//   },
// ];

// // array multi dimension [[]]
// let matrix: number[][]; // square brackets
// // let matrix: Array<Array<number>>; // generic array type
// matrix = [
//   [2, 3],
//   [5, 4],
// ];

// // destructuring
// let [kk, ll, mm]: [number, number, string] = [3, 6, "hello"];
// console.log("destructuring : ", mm);
// console.log("destructuring : ", kk);
// console.log("destructuring : ", ll);

// let ar_biasa = [3, 6, "hello"];
// console.log("array biasa : ", ar_biasa[2]);
