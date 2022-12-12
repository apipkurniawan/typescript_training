// // Classes
// // 1. class basic : constructor, properties, method
// // 2. access modifier (private, public readonly)
// // 3. inheritance/sub class
// // 4. static member
// // 5. abstract classes

// // class --> biasanya digunakan untuk menerapkan OOP ( Object Oriented Programming)
// // class --> outputnya object instance

// /**
//  * Object User :
//  * - User have personal like such id, firstName, lastName
//  * - User have method such as login(), register()
//  * - Max Failed login = 5
//  */

// class User {
//   // properties
//   id: number;
//   firstName: string;
//   lastName: string;
//   private token: string;
//   protected save: boolean;
//   static MAX_FAILED_LOGIN = 2;

//   // method
//   login() {}

//   // method built in
//   constructor(id: number, firstName: string, lastName: string) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.token = "";
//     this.save = false;
//   }
// }

// let myUser = new User(1, "apip", "kurniawan"); // instansiasi class
// console.log(myUser);
// User.MAX_FAILED_LOGIN; // get static member

// // subclass
// class EnhancementUser extends User {
//   location: string;

//   constructor(
//     location: string,
//     id: number,
//     firstName: string,
//     lastName: string
//   ) {
//     super(id, firstName, lastName);
//     this.location = location;
//     this.save; // protected bisa diakses di subclass
//   }
// }

// // abstract classes
// abstract class Root {
//   abstract done: boolean;
// }
// class AnotherUser extends Root {
//   done: boolean;
//   constructor() {
//     super();
//     this.done = true;
//   }
// }
