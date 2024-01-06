"use strict";
// requirement :
// buat function yang bisa menerima sebuah parameter nama dan mereturn sebuah string
// jika nama yg dikirim kosong maka tampilkan "One for you, one for me."
// jika nama yg dikirim tidak maka tampilkan "One for {nama}, one for me."
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoFer = void 0;
// answer
function twoFer(name) {
    if (!name) {
        return "One for you, one for me.";
    }
    else {
        return "One for " + name + ", one for me.";
    }
}
exports.twoFer = twoFer;
