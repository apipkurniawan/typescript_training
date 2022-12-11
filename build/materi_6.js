"use strict";
// Object
// Object literal
// menggunakan type inference
let identitas = {
    nama: "Danu",
    umur: 23,
    alamat: "Jakarta",
};
console.log(identitas);
// menggunakan inline interface
let identitas_2;
identitas_2 = {
    nama: "Danu",
    umur: 23,
    alamat: "Jakarta",
};
let identitas_3;
let identitas_4;
let identitas_5 = {
    nama: "Danu",
    umur: 23,
    alamat: {
        jalan: "sudirman",
        kota: "jakarta selatan",
        prov: "DKI Jakarta",
    },
};
// destructuring
let { firstName, lastName } = {
    firstName: "apip",
    lastName: "kurniawan",
};
console.log("firstName : ", firstName);
// exercise :
// 1. buat nested, array of object menggunakan interface dan square brackets/generic type
// output :
// {
//     id: "U-1",
//     name: "Adi dodi",
//     address: [
//       {
//         street : "Jln. Setapak No.2",
//         city: "Jakarta"
//       },
//       {
//         street: "Jln. Lebar sekali no 10",
//         city: "Medan"
//       }
//     ]
//  }
// 2. buat nested, object of object
// output :
// {
//     idCart: "C1",
//     dateOrdered: "2020-05-20",
//     items: {
//       p1 :{
//         "id": "P-1",
//         "name": "Mechanical Keyboard",
//         "qty": 2
//       },
//       p2 :{
//         "id": "P-2",
//         "name": "USB Hub",
//         "qty": 1
//       },
//     }
// }
