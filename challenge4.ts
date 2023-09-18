console.log("----------------------------PANGRAMS-------------------------");

function pangrams(s: string) {
  const change = s.toLowerCase();
  const abc = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < abc.length; i++) {
    if (change.indexOf(abc[i]) < 0) {
      console.log(s);
      return "answer: " + "not pangrams";
    }
  }
  console.log(s);
  return "answer: " + "pangrams";
}

let hasilpangrams = pangrams("Rahmat pergi ke hutan sendirian");
console.log(hasilpangrams);

console.log("\n-------------------------REPEAT STRING-----------------------");

function repeatedString(s: string, n: number) {
  let jadi = s.split("a").length - 1;
  let maks = Math.floor(n / s.length);
  let total = jadi * maks;
  total += s.slice(0, n % s.length).split("a").length - 1;
  console.log(s);
  console.log(n);
  return "answer: " + total;
}

let hasilrepeatstring = repeatedString("aba", 10);
console.log(hasilrepeatstring);
