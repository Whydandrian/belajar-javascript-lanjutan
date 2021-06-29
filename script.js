// Membuat Object di Javascript

// 1. Object literal
// problem : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'Wahyudi Andrian',
//     energi:10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat datang ${this.nama}, selamat makan!`)
//     }
// }

// let mahasiswa2 = {
//     nama: 'Deny Cagur',
//     energi:10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat datang ${this.nama}, selamat makan!`)
//     }
// }

// 2. Function Declaration
// Keuntungan karena penggunaan instansiasi
// duplikasi tetap dilakukan dan disimpan ke memori terhadap function yang dibuat
// untuk alternatifnya, kedua method makan dan energi dimasukkan kedalam object yang lain
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
    //pembuatan properti nama dan energi
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan yah..`)
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat makan yah..`)
//     }

//     return mahasiswa;

// }

// let wahyudi = Mahasiswa('Wahyudi', 10);
// let david = Mahasiswa('David', 12);

// const methodMahasiswa = {

//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan yah..`);
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main yah..`);
//     },
//     tidur: function(jam) {
//         this.energi += jam*2;
//         console.log(`Halo ${this.nama}, selamat tidur..`);
//     },
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);

//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;

// }
// let wahyudi = Mahasiswa('Wahyudi', 10);
// let david = Mahasiswa('David', 12);

// 3. Function Constructor
// tidak perlu menuliskan declaration variable dan return
// function Mahasiswa(nama, energi) {
    
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan yah..`)
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat makan yah..`)
//     }
// }

// let wahyudi = new Mahasiswa('Wahyudi', 10);


// Penggunaan Prototype untuk pembuatan object

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;

//     return `Halo ${this.nama}, selamat makan yah..`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;

//     return `Halo ${this.nama}, selamat bermain yah..`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam*2;

//     return `Halo ${this.nama}, selamat tidur yah..`;
// }

// let wahyudi = new Mahasiswa('Wahyudi', 10);


// Execution context, hoisting & Scope

// console.log(nama);
// var nama = 'Wahyudi';

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]
    }

    this.classList.toggle(satu);

    setTimeout(() => {
      this.classList.toggle(dua);
    }, 600);
});