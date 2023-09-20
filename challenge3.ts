// Async Await
// Cara 1: SetTimeOut
// const getAntri = (nomor: number): any => {
//   setTimeout(() => {
//     console.log(nomor);
//     return nomor;
//   }, 1000);
// };

// const orderMakanan = (nomor: number, paket: string): any => {
//   setTimeout(() => {
//     try {
//       if (nomor) {
//         if (paket == "a" || paket == "A") {
//           return "paket A";
//         } else if (paket == "b" || paket == "B") {
//           return "paket B";
//         } else {
//           throw new Error("Silahkan pilih pesanan anda!");
//         }
//       } else {
//         throw new Error("Silahkan ambil nomor antrian!");
//       }
//     } catch (error: any) {
//       console.log(error.message);
//     }
//   }, 2000);
// };

// const bayarTagihan = (paket: string) => {
//   setTimeout(() => {
//     try {
//       if (String(paket).toLowerCase() == "paket A".toLowerCase()) {
//         return 25000;
//       } else if (String(paket).toLowerCase() == "paket B".toLowerCase()) {
//         return 37000;
//       } else {
//         throw new Error("Belum ada pemesanan!");
//       }
//     } catch (error: any) {
//       console.log(error.message);
//     }
//   }, 3000);
// };

// const orderKFC = () => {
//   const nomor = getAntri(10);
//   console.log(nomor);
//   const pesanan = orderMakanan(nomor, "A");
//   console.log(pesanan);
//   console.log(bayarTagihan(pesanan));
// };

// orderKFC();

// Cara 2: Callback
// const orderKFC = (nomor: number, paket: string) => {
//   try {
//     setTimeout(() => {
//       console.log(`nomor antrian anda: ${nomor}`);
//       setTimeout(() => {
//         try {
//           if (nomor) {
//             if (paket == "a" || paket == "A") {
//               console.log("paket A");
//             } else if (paket == "b" || paket == "B") {
//               console.log("paket B");
//             } else {
//               throw new Error("Silahkan pilih pesanan anda!");
//             }
//           } else {
//             throw new Error("Silahkan ambil nomor antrian!");
//           }
//         } catch (error: any) {
//           console.log(error.message);
//         }
//         setTimeout(() => {
//           try {
//             if (paket == "A") {
//               let priceA = 25000;
//               console.log(
//                 "Anda memilih paket ini seharga " +
//                   new Intl.NumberFormat("id-ID", {
//                     style: "currency",
//                     currency: "IDR",
//                   }).format(priceA)
//               );
//             } else if (paket == "B") {
//               let priceB = 37000;
//               console.log(
//                 "Anda memilih paket ini seharga " +
//                   new Intl.NumberFormat("id-ID", {
//                     style: "currency",
//                     currency: "IDR",
//                   }).format(priceB)
//               );
//             } else {
//               throw new Error("Belum ada pemesanan!");
//             }
//           } catch (error: any) {
//             console.log(error.message);
//           }
//         }, 1000);
//       }, 2000);
//     }, 3000);
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };

// orderKFC(5, "A");

// Cara 3: Async Await
const getAntri = (nomor: number): any => {
  const result = new Promise((resolve: any) => {
    setTimeout(() => {
      // resolve(nomor);
      let tampung = [nomor, "A"];
      resolve(tampung);
    }, 1000);
  });
  return result;
};

const orderMakanan = (nomor: number, paket: string): any => {
  const result = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      if (nomor > 0) {
        if (paket == "a" || paket == "A") {
          resolve("paket A");
        } else if (paket == "b" || paket == "B") {
          resolve("paket B");
        } else {
          reject("Silahkan pilih pesanan anda!");
        }
      } else {
        reject("Silahkan ambil nomor antrian!");
      }
    }, 2000);
  });
  return result;
};

const bayarTagihan = (paket: string): any => {
  const result = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      if (paket == "paket A") {
        resolve(25000);
      } else if (paket == "paket B") {
        resolve(37000);
      } else {
        reject("Belum ada pemesanan!");
      }
    }, 3000);
  });
  return result;
};

// const orderKFC = async () => {
//   try {
//     const nomor = await getAntri(2);
//     console.log(nomor);
//     const pesanan = await orderMakanan(nomor, "a");
//     console.log(pesanan);
//     let res = await bayarTagihan(pesanan);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// orderKFC();

// Cara 4: Chaining
const result = getAntri(10);

result
  .then((nomor: any) => {
    console.log(nomor);
    return orderMakanan(nomor[0], nomor[1]);
  })
  .then((paket: string) => {
    console.log(paket);
    return bayarTagihan(paket);
  })
  .then((bil1: number) => {
    console.log(bil1);
  })
  .catch((err: any) => {
    console.log(err);
  });
