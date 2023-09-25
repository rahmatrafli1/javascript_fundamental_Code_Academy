function twoStrings(s1: string, s2: string): string {
  // Write your code here
  let result: string = "";
  const s1Array: string[] = s1.split(""); //buat ubah jadi array per karakter
  // console.log("Array s1 = ",s1Array); //buat tes output yg jadi array tadi
  const s2Array: string[] = s2.split("");
  // console.log("Array s2 = ",s2Array);
  const matchingCharacters: string[] = s1Array.filter(
    (x: string) => s2Array.indexOf(x) > -1
  ); //buat cek per index/per karakter ada yg sama ga antara s1Array & s2Array
  // console.log("Karakter yg sama = ",matchingCharacters); //buat tes output karakter apa aja yg sama
  // console.log("Jumlah karakter yg sama = ",matchingCharacters.length); //buat tes hasil output matchingCharacter

  if (s1.length >= 1 && s2.length >= 1) {
    if (matchingCharacters.length > 0) {
      //kalo matchingCharacters > 0 alias ada karakter yg sama
      result = "YES";
    } else {
      result = "NO";
    }
  }

  return result;
}

console.log(twoStrings("Hello", "Hello"));
