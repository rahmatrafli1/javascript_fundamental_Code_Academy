const divisibleSumPairs = (n: number, k: number, array: number[]): number => {
  let hasil = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((array[i] + array[j]) % k === 0) {
        hasil++;
      }
    }
  }

  return hasil;
};
let array = [1, 3, 2, 6, 1, 2];
console.log(divisibleSumPairs(6, 3, array));
