function birthdayCakeCandles(candles: number[]): number {
  let height = Math.max(...candles);
  let frequency = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == height) {
      frequency += 1;
    }
  }
  return frequency;
}

const candles = [3, 2, 1, 4, 0, 2, 1, 5, 5, 5];
const hasil1 = birthdayCakeCandles(candles);
console.log(hasil1);
