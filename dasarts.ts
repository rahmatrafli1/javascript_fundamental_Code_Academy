// example
const customError = (nama: string, str: string, code: string) => {
  const result = {
    name: nama,
    message: str,
    code: code,
  };

  return result;
};

const penambahan = (a: number, b: number): number | string => {
  try {
    if (a <= 0 || b <= 0) {
      //   throw new Error("Angka tidak boleh kosong atau bernilai negatif");
      throw customError(
        "Validasi Error",
        "Angka tidak boleh kosong atau bernilai negatif",
        "401"
      );
    }
    return a + b;
  } catch (error: any) {
    return error;
  }
};

let result1 = penambahan(0, 2);
console.log(result1);

const getUser = (firstname: string, lastname: string): string[] => {
  try {
    if (firstname && lastname) {
      const user = [firstname, lastname];
      return user;
    }
    throw new Error("Firstname or Lastname Must Required!");
  } catch (error: any) {
    return error.message;
  }
};

let result = getUser("Rahmat", "Rafli");
let [namaAwal, namaAkhir] = getUser("Rahmat", "Rafli");
console.log(result[0], result[1]);
console.log(result.toString());
console.log(namaAwal);

const getUser1 = (firstname: string, lastname: string) => {
  try {
    if (firstname && lastname) {
      const user = { firstname: firstname, lastname: lastname };
      return user;
    }
    throw new Error("Firstname or Lastname Must Required!");
  } catch (error: any) {
    return error.message;
  }
};

let { firstname, lastname } = getUser1("Rahmat", "Rafli");
console.log(firstname, lastname);

// Async Await
// const startEngine = () => {
//   setTimeout(() => {
//     console.log("Silahkan Nyalakan Mesin!");
//   }, 1000);
// };

// const changeGear = (gear: number) => {
//   setTimeout(() => {
//     console.log(`Pindahkan ke Gigi ${gear} untuk menggerakkan kendaraan`);
//   }, 2000);
// };

// const goCar = () => {
//   setTimeout(() => {
//     console.log("Kendaraan Bergerak");
//   }, 3000);
// };

// const stopCar = () => {
//   setTimeout(() => {
//     console.log("Kendaraan Berhenti");
//   }, 4000);
// };

// const shutdownEngine = () => {
//   setTimeout(() => {
//     console.log("Matikan Mesin!!");
//   }, 5000);
// };

const startEngine1 = (gear: number) => {
  console.log("silahkan nyalakan mesin!");
  setTimeout(() => {
    console.log(`Masukkan gigi ${gear}`);
    setTimeout(() => {
      console.log("Kendaraan Bergerak");
      setTimeout(() => {
        console.log("Kendaraan Berhenti");
        setTimeout(() => {
          console.log("Matikan Mesin!!");
        }, 1000);
      }, 2000);
    }, 3000);
  }, 4000);
};

const startEngine2 = () => {
  const result = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve("silahkan nyalakan mesin!");
    }, 1000);
  });
  return result;
};

const changeGear = (gear: number) => {
  const result = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve(`Pindahkan ke Gigi ${gear} untuk menggerakkan kendaraan`);
    }, 1000);
  });
  return result;
};

const goCar = () => {
  const result = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve("Kendaraan Bergerak");
    }, 1000);
  });
  return result;
};

const stopCar = () => {
  const result = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve("Kendaraan Berhenti");
    }, 1000);
  });
  return result;
};

const shutdownEngine = () => {
  const result = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve("Matikan Mesin!!");
    }, 1000);
  });
  return result;
};

const driveCar = async () => {
  console.log(await startEngine2());
  console.log(await changeGear(1));
  console.log(await goCar());
  console.log(await stopCar());
  console.log(await shutdownEngine());
};

driveCar();
