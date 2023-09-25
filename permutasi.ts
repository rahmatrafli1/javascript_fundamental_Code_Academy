function permutationEquation(p: number[]): number[] {
  const result: number[] = [];

  const indexMap = new Map<number, number>();
  for (let i = 0; i < p.length; i++) {
    const h1 = indexMap.set(p[i], i + 1);
    // console.log(h1); //kalo penasaran gimana, buka2in komennya ae, bingung gw juga jelasinnya, baru ae nemu ini kodingannya wkwk
  }

  for (let i = 1; i <= p.length; i++) {
    const index1 = indexMap.get(i)!;
    // console.log("i1:",index1);
    const index2 = indexMap.get(index1)!;
    // console.log("i2:",index2);
    result.push(index2);
  }

  return result;
}

console.log(permutationEquation([2, 3, 1]));
console.log(permutationEquation([4, 3, 5, 1, 2]));
