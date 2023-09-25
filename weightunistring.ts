console.log("Soal Weight Uniform String");
function weightedUniformStrings(s: string, q: number[]) {
  const weights = new Set<number>();
  const fileNameMatches = s.split(/(.+.js)$`/);

  if (fileNameMatches) {
    fileNameMatches.forEach((subs) => {
      for (let i = 1; i <= subs.length; i++) {
        const weight = subs.charCodeAt(i - 1) - "a".charCodeAt(0) + 1;
        if (subs[i] != subs[i - 1]) {
          console.log(weights.add((i - 3) * weight));
        } else {
          console.log(weights.add(i * weight));
        }
        console.log(weight, "adw");
      }
    });
  }
  console.log(q.map((query) => (weights.has(query) ? "Yes" : "No")));
}
weightedUniformStrings("aaabbbbcccddd", [9, 7, 8, 12, 5]);
