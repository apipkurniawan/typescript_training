// // * Object

// // Object literal
// // menggunakan type inference
// let identitas = {
//   nama: "Danu",
//   umur: 23,
//   alamat: "Jakarta",
// };
// console.log(identitas);

// // menggunakan inline interface
// // let identitas_2: {
// //   nama: string;
// //   umur: number;
// //   alamat: string;
// // };
// // identitas_2 = {
// //   nama: "Danu",
// //   umur: 23,
// //   alamat: "Jakarta",
// // };

// // menggunakan interface
// // interface Identitas {
// //   nama: string;
// //   umur: number;
// //   alamat: string;
// // }
// // let identitas_3: Identitas;
// // let identitas_4: Identitas;

// // * Nested object
// // interface IdentitasNested {
// //   nama: string;
// //   umur: number;
// //   alamat: Alamat;
// // }
// // interface Alamat {
// //   jalan: string;
// //   kota: string;
// //   prov: string;
// // }

// // buatkan interfacenya ??
// interface Person {
//   nama: string;
//   umur: number;
//   alamat: Alamat;
// }
// interface Alamat {
//   jalan: string;
//   kota: string;
//   prov: string;
// }
// let identitas_5: Person;
// identitas_5 = {
//   nama: "Danu",
//   umur: 23,
//   alamat: {
//     jalan: "sudirman",
//     kota: "jakarta selatan",
//     prov: "DKI Jakarta",
//   },
// };

// // * destructuring
// // let { firstName, lastName }: { firstName: string; lastName: string } = {
// //   firstName: "apip",
// //   lastName: "kurniawan",
// // };
// // console.log("firstName : ", firstName);

// // * latihan sederhana :
// // 1. buat nested, array of object menggunakan interface dan square brackets/generic type
// // output :
// // {
// //     id: "U-1",
// //     name: "Adi dodi",
// //     address: [
// //       {
// //         street : "Jln. Setapak No.2",
// //         city: "Jakarta",
// //         post : 2278
// //       },
// //       {
// //         street: "Jln. Lebar sekali no 10",
// //         city: "Medan",
// //         post : 2255
// //       }
// //     ]
// //  }
