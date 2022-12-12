"use strict";
// // Interface
// /**
//  * Object
//  */
// interface IUser {
//   name: string;
//   age: number;
// }
// type TUser = {
//   name: string;
//   age: number;
// };
// /**
//  * Merge
//  */
// interface Song {
//   songName: string;
// }
// interface Song {
//   // songName: number;
//   artisName: string;
// }
// const mySong: Song = {
//   artisName: "apip",
//   songName: "Rosanna",
// };
// /**
//  * Implements
//  */
// interface Person extends Address {
//   name: string;
//   age: number;
//   getName(id: number): string;
// }
// class People implements Person {
//   name: string;
//   age: number;
//   street: string;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this.street = "Jakarta";
//   }
//   getName(id: number): string {
//     return id.toString();
//   }
// }
// /**
//  * Extend
//  */
// interface Address {
//   street: string;
// }
