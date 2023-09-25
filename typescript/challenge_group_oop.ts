// class Makanan {
//   bahanDasar: string;
//   rasa: string;
//   tekstur: string;
//   harga: number;
//   cara: string;

//   constructor(
//     bahancons: string,
//     rasacons: string,
//     teksturcons: string,
//     hargacons: number,
//     caracons: string
//   ) {
//     this.bahanDasar = bahancons;
//     this.rasa = rasacons;
//     this.tekstur = teksturcons;
//     this.harga = hargacons;
//     this.cara = caracons;
//   }

//   detail() {
//     console.log("Terbuat dari: " + this.bahanDasar);
//     console.log("Rasanya: " + this.rasa);
//     console.log("Teksturnya: " + this.tekstur);
//     console.log(
//       "Harganya: " +
//         new Intl.NumberFormat("id-ID", {
//           style: "currency",
//           currency: "IDR",
//         }).format(this.harga)
//     );
//   }

//   caraBuat() {
//     console.log("Cara membuat: ", this.cara);
//   }
// }

// const Mie = new Makanan("Terigu", "Goreng", "Kenyal", 3000, "Direbus");
// const Kue = new Makanan("Terigu", "Manis", "Lembut", 10000, "Dipanggang");
// const Somay = new Makanan("Ikan", "Gurih", "Lembut", 5000, "Dikukus");
// const Baso = new Makanan("Daging", "Gurih", "Kenyal", 12000, "Direbus");

// Mie.detail();
// Mie.caraBuat();
// console.log("\n");

// Kue.detail();
// Kue.caraBuat();
// console.log("\n");

// Somay.detail();
// Somay.caraBuat();
// console.log("\n");

// Baso.detail();
// Baso.caraBuat();

interface makakananInter {
  tambahMakanan(): any;
}

abstract class MakananAbstrak {
  constructor(public merk: string, public harga: number) {}
  getMerk() {
    console.log(this.merk);
  }
  abstract getUkuran(): any;
}

class Makanan extends MakananAbstrak implements makakananInter {
  constructor(
    protected bahancons: string,
    protected rasacons: string,
    public teksturcons: string,
    public caracons: string,
    merk: string,
    harga: number,
    protected ukuran: string
  ) {
    super(merk, harga);
  }

  tambahMakanan() {
    console.log("Ini Tambah Makanan Interface");
  }

  getUkuran(): any {
    console.log(this.ukuran);
  }

  detail() {
    console.log("Terbuat dari: " + this.bahancons);
    console.log("Rasanya: " + this.rasacons);
    console.log("Teksturnya: " + this.teksturcons);
  }

  caraBuat() {
    console.log("Cara membuat: " + this.caracons);
  }

  DeskripsiMakanan(): any {
    return "Makanan ini cocok dimakan saat siang hari";
  }
}

// class Makan extends Makanan {
//   constructor(
//     bahancons: string,
//     rasacons: string,
//     teksturcons: string,
//     caracons: string,merk: string,
//     harga: number,
//     ukuran:,
//   ) {
//     super(bahancons, rasacons, teksturcons, caracons);
//   }

//   infoHarga() {
//     console.log(`Harga: ${this.harga}`);
//   }

//   infoHargaDetail() {
//     console.log(
//       `Makanan yang bahannya ${
//         this.bahancons
//       } harganya: ${new Intl.NumberFormat("id-ID", {
//         style: "currency",
//         currency: "IDR",
//       }).format(this.harga)}`
//     );
//     console.log("Berikut Detailnya:");
//     this.detail();
//   }
// }

class Makan extends Makanan {
  constructor(
    protected bahancons: string,
    protected rasacons: string,
    public teksturcons: string,
    public caracons: string,
    merk: string,
    harga: number,
    protected ukuran: string
  ) {
    super(bahancons, rasacons, teksturcons, caracons, merk, harga, ukuran);
  }

  // Override
  DeskripsiMakanan() {
    let hasil =
      super.DeskripsiMakanan() +
      " dengan harga " +
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.harga);
    console.log(hasil);
  }

  // Overload
  HargaBerdasarkanBahan(): any;
  HargaBerdasarkanBahan(namaTepung: string): any;

  HargaBerdasarkanBahan(namaTepung?: string) {
    if (namaTepung) {
      console.log(
        `Harga Tepung ${namaTepung}: ${new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(this.harga)}`
      );
    } else {
      console.log(
        `Harga Rata-rata tepung: ${new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(this.harga)}`
      );
    }
  }
}

const Mie = new Makan(
  "Terigu",
  "Enak",
  "Kenyal",
  "direbus",
  "Mie Ayam 2 Telor",
  12000,
  "Jumbo"
);
// Mie.tambahMakanan();
console.log("Contoh Override");
Mie.DeskripsiMakanan();
console.log("\n");
console.log("Contoh Overload");
Mie.HargaBerdasarkanBahan();
Mie.HargaBerdasarkanBahan("Terigu");
