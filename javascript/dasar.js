function add(a, b) {
  let angka1 = a;
  let angka2 = b;

  if(typeof angka1 != 'number' || typeof angka2 != 'number'){
    throw new Error('angka harus berupa angka!')
  }
  return angka1 + angka2;
}

let result = add(20, 20);

try {
  console.log(result);
} catch (err) {
  console.log({ name: err.name, message: err.message });
}
