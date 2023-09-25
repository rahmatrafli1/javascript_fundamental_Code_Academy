// // contoh object oriented programing
// // 1. Encapsulation
// class Tumbuhan {
//   //   warna: string;
//   //   daun: string;
//   //   batang: string;
//   //   umur: number;

//   //   dengan constructor

//   //   constructor(
//   //     warnaConst: string,
//   //     daunConst: string,
//   //     batangConst: string,
//   //     umurConst: number
//   //   ) {
//   //     (this.warna = warnaConst),
//   //       (this.daun = daunConst),
//   //       (this.batang = batangConst),
//   //       (this.umur = umurConst);
//   //   }

//   static status: boolean = true;

//   constructor(
//     protected warnaConst: string,
//     protected daunConst: string,
//     protected batangConst: string,
//     protected umurConst: number
//   ) {}
//   //   tanpa constructor

//   //   warna: string = "";
//   //   daun: string = "";
//   //   batang: string = "";
//   //   umur: number = 0;
//   protected menampilkanTumbuhan() {
//     console.log(
//       this.warnaConst,
//       this.daunConst,
//       this.batangConst,
//       this.umurConst
//     );
//   }

//   static tampilstatic() {
//     console.log(`${Tumbuhan.status}`);
//   }
// }

// // dengan constructor

// // const bungaMawar = new Tumbuhan("merah", "kecil", "berduri", 2);

// // tanpa constructor

// // const bungaMawar = new Tumbuhan()
// // bungaMawar.warna = "merah";
// // bungaMawar.daun = "kecil";
// // bungaMawar.batang = "berduri";
// // bungaMawar.umur = 2;

// // bungaMawar.menampilkanTumbuhan();

// class Bunga extends Tumbuhan {
//   constructor(
//     warnaConst: string,
//     daunConst: string,
//     batangConst: string,
//     umurConst: number,
//     public harga: number
//   ) {
//     super(warnaConst, daunConst, batangConst, umurConst);
//   }

//   informasiHarga() {
//     console.log(`Harga Bunga ${this.harga}`);
//   }

//   informasiDetail() {
//     console.log("Dengan Detail Bunga: \n");
//     this.menampilkanTumbuhan();
//   }
// }

// const bungaMawar = new Bunga("Merah", "Kecil", "duri", 2, 25000);
// // bungaMawar.menampilkanTumbuhan();
// bungaMawar.informasiHarga();
// bungaMawar.informasiDetail();
// Tumbuhan.tampilstatic();

