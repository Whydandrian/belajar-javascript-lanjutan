// Penggunaan Function Expression
// const tampilNama = function (nama) {
//   return `Hello ${nama}`;
// }

// console.log(tampilNama('Wahyudi Andrian'));

// Arrow Function
// 1. Penggunaan standar arrow function
// const tampilNama = (nama) => { return `Halo ${nama}`; }
// console.log('Wahyudi Andrian')

// 2. Penggunaan arrow function dengan 2 parameter
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu} Halo ${nama}`;
// }
// console.log(tampilNama('wahyudi', 'pagi'));


// 3. Penggunaan ringkas arrow function
// dengan 1 parameter dan 1 return
// const tampilNama = nama => { `Halo ${nama}`; }
// console.log('Wahyudi Andrian');

// const tampilNama = nama => `Halo ${nama}`;
// console.log('Wahyudi Andrian');



let mahasiswa = ['Wahyudi Andrian', 'David Sugianto', 'Alief Fatra'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

//Menggunakan implicit function
// let jumlahHuruf = mahasiswa.map( nama => nama.length );
// console.log(jumlahHuruf);

// Mengubah output menjadi object
// jika nama output dan parameter sama, maka boleh dituliskan satu kali saja
// let jumlahHuruf = mahasiswa.map( nama => ({ nama: nama, jumlahHuruf: nama.length }) );
// console.table(jumlahHuruf)

// Konsep this pada arrow function

//Constructor functino

// const Mahasiswa = function() {
//   this.nama = 'Wahyudi Andrian';
//   this.umur = 24;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, saya berumur ${this.umur} tahun.`)
//   }
// }

// const wahyudi = new Mahasiswa();


// Arrow Function
// const Mahasiswa = function() {
//   this.nama = 'Wahyudi Andrian';
//   this.umur = 24;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, saya berumur ${this.umur} tahun.`)
//   }
// }
  
// const wahyudi = new Mahasiswa();

// Object Literal
// const mhs1 = {
//   nama: 'Wahyudi',
//   umur:24,
//   sayHello: () => {
    // console.log(`Halo ${this.nama} saya berumur ${this.umur} tahun.`)
//     console.log(this);
//   }
// }


// const Mahasiswa = function() {
//   this.nama = 'Wahyudi Andrian';
//   this.umur = 24;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, saya berumur ${this.umur} tahun.`)
//   }

//   setInterval( () => {
//     console.log(this.umur++)
//   }, 500)

// }

// const wahyudi = new Mahasiswa();



