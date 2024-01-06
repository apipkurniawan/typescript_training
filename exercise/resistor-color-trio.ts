// requirement :
// buat sebuah function dengan mereturn sebuah string dengan parameter string array
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
// tampilkan dan gabungkan sebuah value number berdasarkan parameter key yg dikirim (hanya index 0 dan 1)
// dan gabungkan nilai 0 berdasarkan jumlah value index yg kedua, value == 1 maka 0, value == 2 maka 00, value == 3 maka 000, dst
// secara default nilai yg didapat memiliki satuan ohms
// setiap 1 kiloohms = 1000 ohms
// jika kurang dari 1000 ohms tampilkan dengan satuan ohms
// lebih dari atau sama dengan itu tampilkan dengan satuan kiloohms
// misal : decodedValue([brown, red, orange]), maka return value yg dihasilkan "12 kiloohms"
// misal : decodedValue([violet, red, brown]), maka return value yg dihasilkan "720 ohms"

// answer
export function decodedResistorValue(arrParam: string[]): string {
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
  let numOfDigit = 0;
  let twoNumOfFirst = 0;
  arrParam.forEach((v, i) => {
    let index = findIndex(arrayVal, v);
    if (i < 2) {
      indexes.push(index);
    }
    if (i == 2) {
      numOfDigit = index;
    }
  });

  twoNumOfFirst = Number(indexes.join(""));
  let nilai = `${twoNumOfFirst}${quantityZero(numOfDigit)}`;
  if (nilai.length <= 3) {
    return `${nilai} ohms`;
  } else {
    return `${Math.round(Number(nilai) / 1000)} kiloohms`;
  }
}

function findIndex(array: string[], value: string): number {
  const isSameString = (element: string) =>
    element.toLowerCase() == value.toLowerCase();
  return array.findIndex(isSameString);
}

function quantityZero(length: number): string {
  let zeroes = "";
  for (let i = 0; i < length; i++) {
    zeroes += "0";
  }
  return zeroes;
}
