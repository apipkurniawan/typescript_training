"use strict";
// Interface
const mySong = {
    artisName: "apip",
    songName: "Rosanna",
};
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.street = "Jakarta";
    }
    getName(id) {
        return id.toString();
    }
}
