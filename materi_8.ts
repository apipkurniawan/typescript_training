// * Classes
// class --> biasanya digunakan untuk menerapkan OOP ( Object Oriented Programming)
// class --> outputnya object instance
// 1. class basic : constructor, properties, method
// 2. access modifier (private, public, protected, readonly)
// 3. inheritance/sub class
// 4. static member
// 5. abstract classes

//
//  Object User :
//   - User have personal like such id, firstName, lastName
//   - User have method such as login(), register()
//   - Max Failed login = 5
//

// class User {
//   // properties
//   id: number;
//   firstName: string;
//   lastName: string;
//   private num: number;
//   protected save: boolean;
//   static MAX_LOGIN = 3;

//   // method
//   login() {}

//   constructor(id: number, firstName: string, lastName: string) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.num = 0;
//     this.save = true;
//   }
// }
// // // subclass
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
//     this.save;
//   }
// }
// let myUser = new User(1, "apip", "kurniawan"); // instansiasi class
// let myEnhanceUser = new EnhancementUser("jakarta", 1, "apip", "kurniawan"); // instansiasi subclass
// console.log(myUser);
// console.log("static : ", User.MAX_LOGIN); // get static member

// // abstract classes
// abstract class Root {
//   abstract done: boolean;
// }
// class AnotherUser extends Root {
//   done: boolean; // properti yang ada didalam abstract class wajib dipanggil
//   constructor() {
//     super();
//     this.done = true;
//   }
// }
