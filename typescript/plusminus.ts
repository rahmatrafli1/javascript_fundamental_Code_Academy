console.log("Soal Plus Minus");
const plusminus = (arr: any) => {
  var n = arr.length;
  var positive = 0,
    negative = 0,
    zero = 0;
  console.log(arr);
  for (var i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }
  console.log(positive);
  console.log(negative);
  console.log(zero);
  var pos = positive / n;
  var neg = negative / n;
  var zer = zero / n;
  console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zer.toFixed(6));
};

plusminus([4, 2, -5, -10, 0, 3]);
