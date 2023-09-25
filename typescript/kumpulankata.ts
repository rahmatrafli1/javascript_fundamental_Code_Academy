const kumpulanKata = "SaveChangesInTheEditor";
const camelCase = (s: any) => {
  let hurufAwal = 1;
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      hurufAwal++;
    }
  }
  return hurufAwal;
};
const hitungHuruf = camelCase(kumpulanKata);
console.log(hitungHuruf);
