"use strict";
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
class User {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.num = 0;
        this.save = true;
    }
    // method
    login() { }
}
User.MAX_LOGIN = 3;
// // subclass
class EnhancementUser extends User {
    constructor(location, id, firstName, lastName) {
        super(id, firstName, lastName);
        this.location = location;
        this.save;
    }
}
let myUser = new User(1, "apip", "kurniawan"); // instansiasi class
let myEnhanceUser = new EnhancementUser("jakarta", 1, "apip", "kurniawan"); // instansiasi subclass
console.log(myUser);
console.log("static : ", User.MAX_LOGIN); // get static member
// abstract classes
class Root {
}
class AnotherUser extends Root {
    constructor() {
        super();
        this.done = true;
    }
}
