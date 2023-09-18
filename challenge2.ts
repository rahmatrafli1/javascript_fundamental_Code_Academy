// soal 6
const getCordinat = (
  x1: number | string,
  y1: number | string,
  x2: number | string,
  y2: number | string
) => {
  try {
    let patern = /\d/g;
    if (
      x1.toString().match(patern) &&
      x2.toString().match(patern) &&
      y1.toString().match(patern) &&
      y2.toString().match(patern)
    ) {
      let a1 = +x1 - +x2;
      let a2 = +y1 - +y2;

      let powA1 = Math.pow(a1, 2);
      let powA2 = Math.pow(a2, 2);

      let hasilCordinat = Math.sqrt(powA1 + powA2);

      console.log(hasilCordinat);
    } else {
      throw new Error("Input koordinat dalam angka");
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

// getCordinat(3, 4, -4, -5);
// getCordinat("1", "2", "-1", "-2");
// getCordinat("x", "2", "-y", "-2");
// getCordinat(3.2, 4.5, -4.4, -5);
// console.log("\n");

// soal 7
const sumDigit = (n: any) => {
  try {
    if (n > 10000) {
      throw "angka tidak boleh lebih dari 10000";
    }

    let nStr = String(n);

    if (!/^\d+$/.test(nStr)) {
      throw "bukan angka";
    }

    let nDgt = nStr.match(/\d/g);

    if (nDgt) {
      return nDgt.reduce((na: any, nb: any) => na + parseInt(nb), 0);
    }
  } catch (err) {
    return err;
  }
};

// console.log(sumDigit(1234));
// console.log(sumDigit("1234"));
// console.log(sumDigit(12345));
// console.log(sumDigit("a123"));
// console.log("\n");

// soal 8
const getPeriodTimes = (n: string) => {
  try {
    const hari = Math.floor(parseInt(n) / 86400);
    let sisaDetik = parseInt(n) % 86400;
    const jam = Math.floor(sisaDetik / 3600);
    sisaDetik = sisaDetik % 3600;
    const menit = Math.floor(sisaDetik / 60);
    sisaDetik = sisaDetik % 60;

    // @ts-ignore
    const hariStr = hari.toString().padStart(2, "0");
    // @ts-ignore
    const jamStr = jam.toString().padStart(2, "0");
    // @ts-ignore
    const menitStr = menit.toString().padStart(2, "0");
    // @ts-ignore
    const detikStr = sisaDetik.toString().padStart(2, "0");
    let hasil = `${hariStr} Hari ${jamStr} Jam ${menitStr} Menit ${detikStr} Detik`;
    if (n.search(/[a-zA-Z]/g) > 1) {
      throw new Error(n + " is not number");
    } else {
      console.log(hasil);
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
// getPeriodTimes("7000005A");
// getPeriodTimes("7000005");
// console.log("\n");

// soal 9
const getRandom = (s: any) => {
  try {
    if (!s.toString().match(/[a-zA-z]/g)) {
      throw new Error("Inputan harus String");
    } else if (s.length < 6) {
      throw new Error("Inputan harus lebih dari 6");
    } else {
      let password = Math.random().toString(36).substring(2, 8);
      console.log(password);
    }
  } catch (err: any) {
    console.log(err.message);
  }
};

// getRandom("123456");
// getRandom(3422);
// getRandom("code");
// getRandom("code-id");
// console.log("\n");

// soal 10
const convertToRupiah = (n: number, str: string) => {
  try {
    if (str == "usd" || str == "yen" || str == "euro") {
      if (str == "usd") {
        let total = n * 15361.75;
        console.log(
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(total)
        );
      } else if (str == "yen") {
        let total = n * 103.96;
        console.log(
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(total)
        );
      } else if (str == "euro") {
        let total = n * 16379.09;
        console.log(
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(total)
        );
      }
    } else {
      throw new Error("No match type currency!");
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

// convertToRupiah(1000, "yen");
// convertToRupiah(100, "usd");
// convertToRupiah(100, "euro");
// convertToRupiah(100, "");
// console.log("\n");

// soal 11
function getHeavier(w1: number, w2: number, w3: number): number | string {
  try {
    if (isNaN(w1) || isNaN(w2) || isNaN(w3)) {
      throw new Error("Input harus berupa angka");
    }

    if (w1 >= w2 && w1 >= w3) {
      return w1;
    } else if (w2 >= w1 && w2 >= w3) {
      return w2;
    } else {
      return w3;
    }
  } catch (error) {
    return (error as Error).message;
  }
}

// console.log(getHeavier(12, 45, 70));
// console.log("\n");

// soal 12
const getDays = (month: number | string, year: number | string) => {
  try {
    let cek = /\d/g;

    if (month.toString().match(cek)) {
      if (year.toString().match(cek)) {
        switch (+month) {
          case 1:

          case 3:

          case 5:

          case 7:

          case 8:

          case 10:

          case 12:
            return "31 Hari";
            break;

          case 2:
            return "29 Hari";
            break;
          case 4:

          case 6:

          case 9:

          case 11:
            return "30 Hari";

          default:
            return "Data bulan tidak ditemukan";
        }
      } else {
        throw new Error("Tahun Harus Integer");
      }
    } else {
      throw new Error("Bulan Harus Integer");
    }
  } catch (error: any) {
    return error.message;
  }
};

// soal 13
const soal13 = (angka: string | number) => {
  try {
    if (typeof angka == "string") {
      if (angka.search(/\D/g) == -1) {
        if (angka.length == 4) {
          let y: string = "";
          for (let i = angka.length - 1; i >= 0; i--) {
            y += angka.charAt(i);
          }
          if (y == angka) {
            console.log("Ini Bilangan Palindrom");
          } else {
            console.log("Ini Bukan Bilangan Palindrom");
          }
        } else {
          throw new Error("Inputan Harus 4 Digit Angka");
        }
      } else {
        throw new Error("Inputan Tidak Valid");
      }
    } else {
      if (angka.toString().length != 4) {
        throw new Error("Inputan Harus 4 Digit Angka");
      } else {
        let y: string = "";
        for (let i = angka.toString().length - 1; i >= 0; i--) {
          y += angka.toString().charAt(i);
        }
        if (+y == angka) {
          console.log("Ini Bilangan Palindrom");
        } else {
          console.log("Ini Bukan Bilangan Palindrom");
        }
      }
    }
  } catch (error: any) {
    console.log(error.message);
  }
};



// soal 14

// soal 15
function totalGaji(gaji1: number, gaji2: number, gaji3: number): string {
  try {
    if (isNaN(gaji1) || isNaN(gaji2) || isNaN(gaji3)) {
      throw new Error("Gaji harus dalam bentuk angka");
    }

    const pajak1 = gaji1 * 0.02;
    const pajak2 = gaji2 * 0.05;
    const pajak3 = gaji3 * 0.1;

    const totalGaji1 = gaji1 + pajak1;
    const totalGaji2 = gaji2 + pajak2;
    const totalGaji3 = gaji3 + pajak3;

    const totalGaji = totalGaji1 + totalGaji2 + totalGaji3;

    return `Total gaji yang harus dibayar :
Emp1 Rp.${gaji1} + Pajak (2%) = Rp.${totalGaji1}
Emp2 Rp.${gaji2} + Pajak (5%) = Rp.${totalGaji2}
Emp3 Rp.${gaji3} + Pajak (10%) = Rp.${totalGaji3}
Total: Rp.${totalGaji}`;
  } catch (error) {
    return (error as Error).message;
  }
}

console.log(totalGaji(500, 2000, 12000));
