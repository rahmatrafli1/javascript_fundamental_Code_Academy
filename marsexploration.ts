const marsex = (pesan: string) => {
  var banyak = 0;
  for (let i = 0; i < pesan.length; i += 3) {
    if (pesan.toUpperCase().charAt(i) != "S") {
      //console.log(pesan.toUpperCase().charAt(i));
      banyak++;
    }
    if (pesan.toUpperCase().charAt(i + 1) != "O") {
      //console.log(pesan.toUpperCase().charAt(i+1));
      banyak++;
    }
    if (pesan.toUpperCase().charAt(i + 2) != "S") {
      //console.log(pesan.toUpperCase().charAt(i+1));
      banyak++;
    }
  }
  return banyak;
};

console.log(marsex("Hai, Apa Kabar?"));
