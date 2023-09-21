{
  abstract class AbstrakKaryawan {
    constructor(public TahunLahir: number) {}

    abstract getSisaMasaPensiun(): any;

    getTahunLahir(): any {
      return `${this.TahunLahir}`;
    }
  }

  interface Kar {
    getTunjanganLembur(): any;
    getStatusKaryawan(): any;
  }

  class Karyawan extends AbstrakKaryawan implements Kar {
    constructor(
      private FirstName: string,
      private LastName: string,
      public TahunMasuk: number,
      TahunLahir: number
    ) {
      super(TahunLahir);
    }

    getNamaLengkap() {
      return `${this.FirstName} ${this.LastName}`;
    }

    protected getDataKaryawan() {
      console.log(`${this.FirstName} ${this.LastName} 
      tahun masuk ${this.TahunMasuk}`);
    }

    setNamaKaryawan(FirstName: string, LastName: string) {
      return (this.FirstName = FirstName), (this.LastName = LastName);
    }

    getSisaMasaPensiun() {
      let yearNow = new Date().getFullYear();
      let sisaPensiun = 60 - (yearNow - this.TahunLahir);
      console.log(
        `Sisa Masa Pensiun : 60 - ${yearNow - this.TahunLahir} = ` +
          sisaPensiun +
          " tahun"
      );
    }

    getTunjanganLembur(): any;
    getTunjanganLembur(hour: number): any;

    getTunjanganLembur(hour?: number) {
      if (hour) {
        console.log(`${hour} jam`);
        console.log(
          "dapat uang lembur: " +
            `${hour} jam * ${new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(100000)} = ` +
            new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(hour * 100000)
        );
      } else {
        console.log(`0 jam`);
        console.log("tidak dapat uang lembur!!");
      }
    }

    getStatusKaryawan(): any {
      let tahunsekarang = new Date().getFullYear();
      let tahunmasuk = this.TahunMasuk;
      let tahunkerja = tahunsekarang - tahunmasuk;
      if (tahunkerja > 1) {
        return "Karyawan tetap";
      } else {
        return "Karyawan masih dalam percobaan";
      }
    }
  }

  class KaryawanTetap extends Karyawan {
    constructor(
      FirstName: string,
      LastName: string,
      TahunMasuk: number,
      TahunLahir: number,
      public Gaji: number,
      public Posisi: string
    ) {
      super(FirstName, LastName, TahunMasuk, TahunLahir);
    }

    getDetailDataKaryawan() {
      console.log("Nama Lengkap: " + this.getNamaLengkap());
      console.log("Tahun Lahir: " + this.getTahunLahir());
      console.log("Tahun Masuk: " + this.TahunMasuk);
      console.log(
        "Gaji Anda: " +
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(this.Gaji)
      );
      console.log("Posisi: " + this.Posisi);
    }

    getBonus() {
      let tahunsekarang = new Date().getFullYear();
      let tahun = tahunsekarang - this.TahunMasuk;

      if (tahun > 1) {
        console.log("Lama Anda bekerja: " + tahun + " tahun");
        console.log("Dapat Uang Bonus");
      } else {
        console.log("Lama Anda bekerja: 0 tahun");
        console.log("Belum Dapat Uang Bonus");
      }
    }

    getStatusKaryawan() {
      console.log(this.getNamaLengkap() + ". " + super.getStatusKaryawan());
    }
  }

  const FullName = new Karyawan("Rahmat", "Rafli", 2023, 1998);
  const KaryawanJar = new KaryawanTetap(
    "Rahmat",
    "Rafli",
    2020,
    1998,
    4500000,
    "IT Support"
  );
  // Detail Data Karyawan
  KaryawanJar.getDetailDataKaryawan();
  console.log();

  // Ubah Nama
  console.log("1. Ubah Nama");
  console.log(FullName.getNamaLengkap());
  FullName.setNamaKaryawan("Ahmad", "Rafli");
  console.log(FullName.getNamaLengkap());
  console.log();

  // Menghitung Sisa Masa Pensiun
  console.log("2. Menghitung Sisa Masa Pensiun");
  FullName.getSisaMasaPensiun();
  console.log();

  // Menghitung Bonus
  console.log("3. Menghitung Bonus");
  KaryawanJar.getBonus();
  console.log();

  // Menentukan Status Karyawan
  console.log("4. Menentukan Status Karyawan");
  KaryawanJar.getStatusKaryawan();
  console.log();

  // Menghitung Tunjangan Lembur
  console.log("5. Menghitung Tunjangan Lembur");
  KaryawanJar.getTunjanganLembur();
  KaryawanJar.getTunjanganLembur(8);
}
