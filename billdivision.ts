const billdiv = (bill: number[], k: number, b: number) => {
  var tot = bill.reduce((total, c, i) => {
    if (i != k) {
      total += c;
    }
    return total;
  }, 0);
  var last = tot / 2;
  if (last < b) {
    var true_tot = Math.abs(tot / 2 - b);
    console.log(true_tot);
  } else {
    console.log("Bon Appetti");
  }
};

billdiv([1, 2, 3], 3, 3);
