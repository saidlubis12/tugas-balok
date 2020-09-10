function persegi(x2, l2, t2) {
  // Variabel
  p3 = 10;
  t3 = 5;
  l3 = 2;

  //Hasil
  jumlah = x2 * l2 * t2;
  luas = 2 * x2 * l2 + x2 * t2 + l2 * t2;

  return jumlah, luas;
}
persegi(10, 5, 2);
document.write(`<br>Menghitung luas volume balok`);
document.write(`<br>Panjang: ${p3}<br>`);
document.write(`Lebar : ${l3}<br>`);
document.write(`Tinggi ${t3}<br>`);
document.write(`Volume Balok : ${jumlah}<br>`);
document.write(`Luas permukaan Balok : ${luas}<br>`);
