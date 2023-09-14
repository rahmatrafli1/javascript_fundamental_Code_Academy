// Async Function
// let nama = "Batch 4";
// (function (nama, lama) {
//   console.log("Selamat Belajar JavaScript", nama, "selama", lama, "bulan");
// })(nama, 3);

// const pesan = function () {
//   console.log("Selamat Belajar JavaScript!");
// };

// pesan();

// Callback Function
// function tambah(a: number, b: number) {
//   console.log(a + b);
// }

// function umum(cb: any) {
//   cb(5, 8);
// }

// umum(tambah);

// Arrow Function
// const tambah = (a: number, b: number) => {
//   console.log(a + b);
// };

// tambah(5, 5);

let str = "";

// if (str) {
//   console.log("Halo " + str);
// }

// alternatif if
str &&= "Halo " + str;

// alternatif if else
str ||= "Halo " + str;

console.log(str);
