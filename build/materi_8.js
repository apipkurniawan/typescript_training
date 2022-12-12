"use strict";
// Classes
// 1. class basic : constructor, properties, method
// 2. access modifier (private, public readonly)
// 3. inheritance/sub class
// 4. static member
// 5. abstract classes
// class --> biasanya digunakan untuk menerapkan OOP ( Object Oriented Programming)
// class --> outputnya object instance
/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */
class User {
    // method built in
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.token = "";
        this.save = false;
    }
    // method
    login() { }
}
User.MAX_FAILED_LOGIN = 2;
let myUser = new User(1, "apip", "kurniawan"); // instansiasi class
console.log(myUser);
User.MAX_FAILED_LOGIN; // get static member
// subclass
class EnhancementUser extends User {
    constructor(location, id, firstName, lastName) {
        super(id, firstName, lastName);
        this.location = location;
        this.save; // protected bisa diakses di subclass
    }
}
// abstract classes
class Root {
}
class AnotherUser extends Root {
    constructor() {
        super();
        this.done = true;
    }
}
