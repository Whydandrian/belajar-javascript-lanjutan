// const angka = [-1, 2, 5, 1 ,-4, -5, 8, 3, 7, 10];

//mencari angka >=3
// menggunakan for
// const newAngka = []
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// mengunakan filter
// const newAngka = angka.filter(function () {
//   return a >= 3;
// });
// const newAngka = angka.filter(a => a >= 3 );
// console.log(newAngka);

//Menggunakan Map
// Kalikan semua angka di array dengan nilai 2

// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);


// Menggunakan reduce
// jumlahkan seluruh elemen pada array\

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator+currentValue);
// const newAngkaBaru = angka.reduce((accumulator, currentValue) => accumulator+currentValue, 5);
// console.log(newAngka);
// console.log(newAngkaBaru);

// Method Chaining (Method Berantai)
// CMencari angka lebih besar dari 5 dan hasilnya dikalikan 3 dan dijumlahkan
// const hasil = angka.filter(a => a > 5)
//   .map(a => a*3)
//   .reduce((acc, curr) => acc + curr);
// console.log(hasil);


/**
 * Studi Kasus dalam penggunaan Filter, Map dan Reduce
 */

// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yuang JAVASCRIPT LANJUTAN
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// Ambil durasi masing-masing video
.map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu => {
  const parts = waktu.split(':').map(part => parseFloat(part));
  return (parts[0] * 60) + parts[1];
})

// jumlahkan semua detik
.reduce((total, detik) => total + detik);

// mengubah kembali menjadi menit dan detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
let jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const pJmlVideo = document.querySelector('.jumlah-video');

pJmlVideo.textContent = `${jmlVideo} Video.`

console.log();