console.log("----------------------------PANGRAMS-------------------------");

function pangrams(s: string): string {
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

let hasilpangrams = pangrams(
  "We promptly judged antique ivory buckles for the next prize"
);
console.log(hasilpangrams);

console.log("\n-------------------------REPEAT STRING-----------------------");

function repeatedString(s: string, n: number): number {
  let jadi = s.split("a").length - 1;
  let maks = Math.floor(n / s.length);
  let total = jadi * maks;
  total += s.slice(0, n % s.length).split("a").length - 1;
  console.log(s);
  console.log(n);
  return total;
}

let hasilrepeatstring = repeatedString("aba", 10);
console.log(hasilrepeatstring);
