// requirement :
// buat sebuah function dengan mereturn sebuah number dengan parameter string array
// buat sebuah nilai constant dengan tipe data array
//   - Black : 0
//   - Brown : 1
//   - Red : 2
//   - Orange : 3
//   - Yellow : 4
//   - Green : 5
//   - Blue : 6
//   - Violet : 7
//   - Grey : 8
//   - White : 9
// tampilkan dan gabungkan sebuah value number dengan maksimal length 2 digit berdasarkan parameter key yg dikirim
// misal : decodedValue([brown, red]), maka return value yg dihasilkan 12

// answer
export function decodedValue(arrParam: string[]): number {
  const arrayVal = [
    "Black",
    "Brown",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Violet",
    "Grey",
    "White",
  ];

  let indexes: (string | number)[] = [];
  arrParam.forEach((v, i) => {
    if (i < 2) {
      const isSameString = (element: string) =>
        element.toLowerCase() == v.toLowerCase();
      let index = arrayVal.findIndex(isSameString);
      indexes.push(index);
    }
  });
  return Number(indexes.join(""));
}
