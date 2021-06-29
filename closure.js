// function init() {
//   let nama = 'Wahyudi';

//   function tampilNama() {
//     console.log(nama);
//   }

//   return tampilNama;
// }

// let panggilNama = init();

// panggilNama();

// function ucapakanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan.`);
//   }
// }

// let selamatPagi = ucapakanSalam('Pagi');
// let selamatSiang = ucapakanSalam('Siang');
// let selamatMalam = ucapakanSalam('Malam');

// selamatMalam('Wahyudi');

// console.dir(selamatPagi);
// Dengan variabel add yang diisi denbgan function yang dibungkus
// dan menjalankan function tersebut dengan tanda () pada sebelum penutup
// hal tersebut alternatif untuk menampilkan data tanpa menganggu jika
// variable counter ditambahkan nilai atau dilakukan manipulasi nilai
// untuk lebih mudahnya bisa dilihat pada console di browser

// let add = (function() {
//   let counter = 0;

//   return function () {
//     return ++counter;
//   }
// })();

// counter = 100;

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

