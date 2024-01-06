// requirement :
// buat function yang bisa menerima sebuah parameter nama dan mereturn sebuah string
// jika nama yg dikirim kosong maka tampilkan "One for you, one for me."
// jika nama yg dikirim tidak maka tampilkan "One for {nama}, one for me."

// answer
export function twoFer(name: string): string {
  if (!name) {
    return "One for you, one for me.";
  } else {
    return "One for " + name + ", one for me.";
  }
}
