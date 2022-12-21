// // requirement :
// // buat sebuah function dengan mereturn sebuah number dengan parameter string array
// // buat sebuah nilai constant dengan tipe data array
// //   - Black : 0
// //   - Brown : 1
// //   - Red : 2
// //   - Orange : 3
// //   - Yellow : 4
// //   - Green : 5
// //   - Blue : 6
// //   - Violet : 7
// //   - Grey : 8
// //   - White : 9
// // tampilkan dan gabungkan sebuah value number dengan maksimal length 2 digit berdasarkan parameter key yg dikirim
// // misal : decodedValue([brown, red]), maka return value yg dihasilkan 12

// // answer
// export function decodedValue(arrParam: string[]): number {
//   const arrayVal = [
//     "Black",
//     "Brown",
//     "Red",
//     "Orange",
//     "Yellow",
//     "Green",
//     "Blue",
//     "Violet",
//     "Grey",
//     "White",
//   ];

//   let indexes: (string | number)[] = [];
//   arrParam.forEach((v, i) => {
//     if (i < 2) {
//       const isSameString = (element: string) =>
//         element.toLowerCase() == v.toLowerCase();
//       let index = arrayVal.findIndex(isSameString);
//       indexes.push(index);
//     }
//   });
//   return Number(indexes.join(""));
// }

interface Color {
  key: number;
  value: string;
}

export function decodedValue(arrParam: string[]): number {
  // constant array
  const listColor: Color[] = [
    { key: 0, value: "Black" },
    { key: 1, value: "Brown" },
    { key: 2, value: "Red" },
    { key: 3, value: "Orange" },
    { key: 4, value: "Yellow" },
    { key: 5, value: "Green" },
    { key: 6, value: "Blue" },
    { key: 7, value: "Violet" },
    { key: 8, value: "Grey" },
    { key: 9, value: "White" },
  ];

  let numbers: (string | number)[] = [];
  // looping array param
  arrParam.forEach((v, i) => {
    if (i < 2) {
      const isSameString = (element: Color) =>
        element.value.toLowerCase() == v.toLowerCase();
      let index = listColor.findIndex(isSameString);
      numbers.push(listColor[index].key);
    }
  });
  return Number(numbers.join(""));
}

console.log('["brown", "black"] : ', decodedValue(["brown", "black"]));
console.log('["blue", "grey"] : ', decodedValue(["blue", "grey"]));
console.log('["yellow", "violet"] : ', decodedValue(["yellow", "violet"]));
console.log('["orange", "orange"] : ', decodedValue(["orange", "orange"]));
console.log(
  '["green", "brown", "orange"] : ',
  decodedValue(["green", "brown", "orange"])
);
