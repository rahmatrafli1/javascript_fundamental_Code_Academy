const segitigasmasisiganjil = (n: number) => {
  let bilganjil = 1;
  for (let i = 1; i <= n; i++) {
    let row = " ";
    let str = bilganjil + " ";

    let cetak = row.repeat(n - i) + str.repeat(i);
    console.log(cetak);
    bilganjil += 2;
  }
};

const segitigasmasisiterbalikganjil = (n: number) => {
  let k = 1;
  for (let i = n; i >= 1; i--) {
    let start = " ";
    let space = start.repeat(n - i);
    let hasil = (k + " ").repeat(i);
    console.log(space, hasil);
    k += 2;
  }
};

const segitigasiku2abjadkecil = (n: number) => {
  let charCode = 97;

  for (let i = 1; i <= n; i++) {
    console.log(String.fromCharCode(charCode).repeat(i));
    charCode++;
  }
};

const diagonalkiriataskananbawahabjadkapital = (n: number) => {
  let charCode = 65;
  let space = " ";

  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(i) + String.fromCharCode(charCode));
    charCode++;
  }
};

const diagonalkananataskiribawahbilganjil = (n: number) => {
  let bilganjil = 1;
  for (let i = 0; i < n; i++) {
    let space = " ";
    console.log(space.repeat(n - i) + bilganjil);
    bilganjil = bilganjil + 2;
  }
};

const diagonalkanankirikanan = (n: number) => {
  var ascii = 97;
  var angka = 2;
  var diagonal1 = 0;
  var diagonal2 = n - 1;

  for (let i = 0; i < n; i++) {
    var temp = "";
    for (let j = 0; j < n; j++) {
      if (i == diagonal1 && j == diagonal2) {
        angka.toString();
        temp += angka;
        angka = angka + 2;
        diagonal1++;
        diagonal2--;
      } else if (i == j) {
        temp += String.fromCharCode(ascii);
        ascii++;
      } else {
        temp += " ";
      }
    }
    console.log(temp);
  }
};

const segitigasiku2terbalikabjadbiasa = (n: number) => {
  let ascii = 97;
  let space = " ";

  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(i) + String.fromCharCode(ascii).repeat(n - i));
    ascii++;
  }
};

const segitigasiku2bilgenap = (n: number) => {
  let bilgenap = 1;
  for (let i = n; i >= 1; --i) {
    let row = " ";

    let str = bilgenap + "";
    let cetak = row.repeat(n - i) + str.repeat(i);
    console.log(cetak);
    bilgenap += 2;
  }
};

segitigasmasisiganjil(5);
console.log("\n");

segitigasmasisiterbalikganjil(5);
console.log("\n");

segitigasiku2abjadkecil(5);
console.log("\n");

diagonalkiriataskananbawahabjadkapital(5);
console.log("\n");

diagonalkananataskiribawahbilganjil(5);
console.log("\n");

diagonalkanankirikanan(5);
console.log("\n");

segitigasiku2terbalikabjadbiasa(5);
console.log("\n");

segitigasiku2bilgenap(5);
console.log("\n");
