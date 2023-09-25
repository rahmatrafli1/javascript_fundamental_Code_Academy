const countApplesAndOranges = (
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
) => {
  let hitungApple = 0;
  let hitungjeruk = 0;

  const posisiApple = apples.map((jarak) => a + jarak);
  const posisiJeruk = oranges.map((jarak) => b + jarak);

  posisiApple.forEach((posisi) => {
    if (posisi >= s && posisi <= t) {
      hitungApple++;
    }
  });

  posisiJeruk.forEach((posisi) => {
    if (posisi >= s && posisi <= t) {
      hitungjeruk++;
    }
  });

  console.log(hitungApple);
  console.log(hitungjeruk);
};

const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);
