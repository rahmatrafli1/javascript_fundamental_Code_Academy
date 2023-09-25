const minimumNumber = (n: number, password: string): number => {
  let count = 0;

  if (password.match(/[A-Z]/)) {
    count++;
  }
  if (password.match(/[a-z]/)) {
    count++;
  }
  if (password.match(/[0-9]/)) {
    count++;
  }
  if (password.match(/[!@#$%^&*()\-+]/)) {
    count++;
  }
  if (n < 6) {
    let kurang = 6 - n; //4
    let kurangChar = 4 - count;
    if (kurang < kurangChar) {
      return kurangChar;
    } else {
      return kurang;
    }
  } else {
    return (count = 4 - count);
  }
};

console.log(minimumNumber(2, "+)"));
console.log(minimumNumber(3, "Ab1)"));
console.log(minimumNumber(4, "4700"));
console.log(minimumNumber(7, "AUzs-nV"));
