// Union type
// let number: string | number | boolean = "Hai";

// alias type
// type number2 = string | number | boolean;
// let number2baru: number2 = 12;

// any type
// let number3: any = { num1: 1, angka1: 2 };

// array multi
// let number4: number[] = [1, 2, 3, 4];

// object multi
// let objOrang: {} = {
//   nama: "Udin",
//   alamat: "Bekasi",
// };

// object array
// let arrObjOrang: {}[] = [
//   { nama: "Udin", alamat: "Bekasi" },
//   { nama: "Mamat", alamat: "Bandung" },
// ];

// console.log(typeof number);
// console.log(typeof number2baru);
// console.log(typeof number3);
// console.log(typeof number4);
// console.log(typeof objOrang);
// console.log(typeof arrObjOrang);

// function
// function tambah(a: number, b: number): number {
//   return a + b;
// }

// console.log(tambah(1, 2));

// function perkalian(a: number, b: number): void {
//   console.log(a * b);
// }

// perkalian(4, 5);

// custom error
const customError = (name: string, message: string) => {
  return { name: name, message: message };
};

// throw catch
try {
  let umur = 0;
  if (!umur) {
    throw customError("Kesalahan", "Silahkan isi umur anda!");
  }
  console.log("Kamu berusia", umur, "tahun.");
} catch (error: any) {
  console.log(error.name + ":", error.message);
}
