function mencarinilaits(nilai: number) {
  let n = nilai;
  if (n >= 90 && n <= 100) {
    console.log(`nilai ${n} itu A`);
  } else if (n >= 80 && n < 90) {
    console.log(`nilai ${n} itu B`);
  } else if (n >= 70 && n < 80) {
    console.log(`nilai ${n} itu B-`);
  } else if (n >= 60 && n < 70) {
    console.log(`nilai ${n} itu C`);
  } else if (n >= 50 && n < 60) {
    console.log(`nilai ${n} itu C-`);
  } else if (n >= 40 && n < 50) {
    console.log(`nilai ${n} itu D`);
  } else {
    console.log(`nilai ${n} itu E`);
  }
}

mencarinilaits(80);

function mencarinilaitsswitch(nilai: number) {
    let n = nilai;
    switch (true) {
      case n >= 90 && n <= 100:
        console.log(`nilai ${n} itu A`);
        break;
      case n >= 80 && n < 90:
        console.log(`nilai ${n} itu B`);
        break;
      case n >= 70 && n < 80:
        console.log(`nilai ${n} itu B-`);
        break;
      case n >= 60 && n < 70:
        console.log(`nilai ${n} itu C`);
        break;
      case n >= 50 && n < 60:
        console.log(`nilai ${n} itu C-`);
        break;
      case n >= 40 && n < 50:
        console.log(`nilai ${n} itu D`);
        break;
      default:
        console.log(`nilai ${n} itu E`);
        break;
    }
  }
  
  mencarinilaitsswitch(80);
  