const compareTheTriplets = (a: number[], b: number[]) => {
  let alicePoint = 0;
  let bobPoint = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alicePoint++;
    } else if (a[i] < b[i]) {
      bobPoint++;
    }
  }

  const result = [alicePoint, bobPoint];
  return result;
};

const a = [1, 2, 3];
const b = [3, 2, 1];
const result = compareTheTriplets(a, b);
console.log(result);
