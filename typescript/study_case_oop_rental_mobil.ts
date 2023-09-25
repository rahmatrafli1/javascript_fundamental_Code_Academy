type ObjectVenicle = {
  nopol: string;
  venicleType: string;
  year: number;
  price: number;
  tax: number;
  seat: number;
  transactionDate: string;
  [key: string]: any;
};

interface RenCar {
  TotalVenicle(): any;
  TotalIncomeVenicle(): any;
}

abstract class VenicleAbstract {
  constructor(public merk: string) {}

  getMerk() {
    console.log(this.merk);
  }

  abstract getUkuran(): any;
}

class Venicle extends VenicleAbstract implements RenCar {
  static listVenicle: ObjectVenicle[] = [];

  constructor(
    public nopol: string,
    public venicleType: string,
    public year: number,
    public price: number,
    public tax: number,
    public seat: number,
    public transaction_date: string,
    merk: string,
    public ukuran: string
  ) {
    super(merk);
  }

  getUkuran(): any {
    console.log("Ukuran Kendaraan: " + this.ukuran);
  }

  TotalVenicle(): any;
  TotalVenicle(tipeKendaraan: string): any;

  TotalVenicle(tipeKendaraan?: string): any {
    if (tipeKendaraan) {
      let hasil = Venicle.listVenicle.filter((isi) => {
        return isi.venicleType == tipeKendaraan;
      });

      return `Total Kendaraan yang bertipe ${tipeKendaraan} : ` + hasil.length;
    } else {
      return Venicle.listVenicle.length;
    }
  }

  TotalIncomeVenicle(): any;
  TotalIncomeVenicle(tipeKendaraan: string): any;

  TotalIncomeVenicle(tipeKendaraan?: string): any {
    if (tipeKendaraan) {
      let hasil = Venicle.listVenicle.filter((isi) => {
        return isi.venicleType == tipeKendaraan;
      });

      let total = 0;
      hasil.map((item) => {
        if (item.rent) {
          total += item.rent + item.driver;
        } else {
          total += item.order * item.orderPerKM;
        }
      });

      return (
        `Total Kemasukkan yang bertipe ${tipeKendaraan} : ` +
        new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(total)
      );
    } else {
      let total = 0;
      Venicle.listVenicle.map((item) => {
        if (item.rent) {
          total += item.rent + item.driver;
        } else {
          total += item.order * item.orderPerKM;
        }
      });

      return (
        `Total Kemasukkan : ` +
        new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(total)
      );
    }
  }

  DescriptionVenicle(): any {
    return "Ini Contoh Deskripsi Venicle";
  }
}

class SUV extends Venicle {
  constructor(
    nopol: string,
    venicleType: string,
    year: number,
    price: number,
    tax: number,
    seat: number,
    transaction_date: string,
    merk: string,
    ukuran: string,
    public rent: number,
    public driver: number
  ) {
    super(
      nopol,
      venicleType,
      year,
      price,
      tax,
      seat,
      transaction_date,
      merk,
      ukuran
    );
  }
}

class Rent extends Venicle {
  constructor(
    nopol: string,
    venicleType: string,
    year: number,
    price: number,
    tax: number,
    seat: number,
    transaction_date: string,
    merk: string,
    ukuran: string,
    public rent: number,
    public driver: number
  ) {
    super(
      nopol,
      venicleType,
      year,
      price,
      tax,
      seat,
      transaction_date,
      merk,
      ukuran
    );

    this.insertVenicle();
  }

  insertVenicle() {
    Venicle.listVenicle.push({
      nopol: this.nopol,
      venicleType: this.venicleType,
      year: this.year,
      price: this.price,
      tax: this.tax,
      seat: this.seat,
      transactionDate: this.transaction_date,
      merk: this.merk,
      ukuran: this.ukuran,
      rent: this.rent,
      driver: this.driver,
    });
  }
  // Override
  DescriptionVenicle() {
    return super.DescriptionVenicle() + " pada Rent Car";
  }
}

class Taxi extends Venicle {
  constructor(
    nopol: string,
    venicleType: string,
    year: number,
    price: number,
    tax: number,
    seat: number,
    transaction_date: string,
    merk: string,
    ukuran: string,
    public order: number,
    public orderPerKM: number
  ) {
    super(
      nopol,
      venicleType,
      year,
      price,
      tax,
      seat,
      transaction_date,
      merk,
      ukuran
    );

    this.insertVenicle();
  }

  insertVenicle() {
    Venicle.listVenicle.push({
      nopol: this.nopol,
      venicleType: this.venicleType,
      year: this.year,
      price: this.price,
      tax: this.tax,
      seat: this.seat,
      transactionDate: this.transaction_date,
      merk: this.merk,
      ukuran: this.ukuran,
      order: this.order,
      orderPerKM: this.orderPerKM,
    });
  }
  // Override
  DescriptionVenicle() {
    return super.DescriptionVenicle() + " pada Taxi Car";
  }
}

const RentProduct = new Rent(
  "D 1001 UM",
  "SUV",
  2010,
  350000000,
  35000000,
  4,
  "10/01/2023",
  "Avanza",
  "439,5 cm x 173 cm",
  500000,
  150000
);
const RentProduct2 = new Rent(
  "D 1002 UM",
  "SUV",
  2010,
  350000000,
  35000000,
  4,
  "10/01/2023",
  "Avanza",
  "439,5 cm x 173 cm",
  500000,
  150000
);
const RentProduct3 = new Rent(
  "D 1003 UM",
  "SUV",
  2015,
  350000000,
  35000000,
  5,
  "12/01/2023",
  "Avanza",
  "439,5 cm x 173 cm",
  500000,
  150000
);
const RentProduct4 = new Rent(
  "D 1004 UM",
  "SUV",
  2015,
  350000000,
  35000000,
  5,
  "12/01/2023",
  "Avanza",
  "439,5 cm x 173 cm",
  500000,
  150000
);
const TaxiProduct = new Taxi(
  "D 11 UK",
  "Taxi",
  2002,
  1750000000,
  1750000,
  4,
  "13/01/2023",
  "Avanza",
  "439,5 cm x 173 cm",
  45,
  4500
);
const TaxiProduct2 = new Taxi(
  "D 12 UK",
  "Taxi",
  2002,
  1750000000,
  1750000,
  4,
  "13/01/2023",
  "Avanza",
  "439,5 cm x 173 cm",
  75,
  4500
);
const TaxiProduct3 = new Taxi(
  "D 13 UK",
  "Taxi",
  2002,
  1750000000,
  1750000,
  4,
  "13/01/2023",
  "Avanza",
  "439,5 cm x 173 cm",
  90,
  4500
);
const JetProduct = new Rent(
  "ID8089",
  "PrivateJet",
  2015,
  150000000000,
  1500000000,
  12,
  "23/12/2022",
  "Jet Sky 12 A",
  "439,5 cm x 173 cm",
  35000000,
  15000000
);
const JetProduct2 = new Rent(
  "ID8089",
  "PrivateJet",
  2015,
  175000000000,
  1750000000,
  15,
  "25/12/2022",
  "Jet Sky 12 B",
  "439,5 cm x 175 cm",
  55000000,
  25000000
);

// console.log(Venicle.listVenicle);
console.log("Studi Kasus OOP Rental Mobil\n");
// console.log("Ini Enkasulapsi dan turunan dan juga implementasi antar kelas");
// console.log(
//   "Total Semua Kendaraan: " + RentProduct.TotalVenicle() + " Kendaraan"
// );
// console.log("Total Income: " + RentProduct.TotalIncomeVenicle() + "\n");
// RentProduct.TotalIncomeVenicle();
// console.log("Ini Abstrak");
// RentProduct.getUkuran();
// console.log("\nIni Override");
// console.log(RentProduct.DescriptionVenicle());

// console.log("\nIni Overload");
// console.log(RentProduct.TotalVenicle());
// console.log(RentProduct.TotalVenicle("PrivateJet"));

// console.log(RentProduct.TotalIncomeVenicle());
// console.log(RentProduct.TotalIncomeVenicle("Taxi"));
console.log("Soal 1: dapatkan total kendaraan");
console.log("Total Kendaraan : " + RentProduct.TotalVenicle() + " kendaraan");

console.log("\nSoal 2: dapatkan total kendaraan yang bertipe 'SUV'");
console.log(RentProduct.TotalVenicle("SUV") + " kendaraan");

console.log("\nSoal 3: dapatkan total kemasukkan yang bertipe 'SUV'");
console.log(RentProduct.TotalIncomeVenicle("SUV"));

console.log("\nSoal 4: dapatkan total kemasukkan yang bertipe 'Taxi'");
console.log(RentProduct.TotalIncomeVenicle("Taxi"));

console.log("\nSoal 5: dapatkan total kemasukkan yang bertipe 'PrivateJet'");
console.log(RentProduct.TotalIncomeVenicle("PrivateJet"));

console.log("\nSoal 6: dapatkan total kemasukkan");
console.log(RentProduct.TotalIncomeVenicle());
