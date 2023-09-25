const stringConstruction = (s: string) => {
  let val = new Set(s);
  let array = [...val];
  let lengthStr = array.length;
  return lengthStr;
};

let hasil = stringConstruction("1234");
console.log(hasil);
