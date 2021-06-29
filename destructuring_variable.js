// Destructuring Variable

// Destructuring Array

// const perkenalan = ['Halo', 'nama', 'saya','Wahyudi Andrian'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];

// const [salam, satu, dua, nama] = perkenalan;
// const [salam, , , nama] = perkenalan;

// console.log(salam)
// console.log(satu)
// console.log(dua)
// console.log(nama)

// Swap Item

// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// Return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a,b]=coba();
// console.log(b);

// Rest Parameter

// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(values);

// Destructuring Object

// const mhs = {
//   nama:'Wahyudi Andrian',
//   umur:24
// }
// // penamaan harus sama dengan nama properti di object
// const {nama, umur} = mhs;
// console.log(nama);
// console.log(umur);

// Assigment tanpa deklarasi obbjet
// (nama, umur = {
//   nama:'Wahyudi Andrian',
//   umur:24
// })
// console.log(nama);

// Assign ke variable baru
// const mhs = {
//   nama:'Wahyudi Andrian',
//   umur:24
// }
// const {nama: n, umur: u} = mhs;
// console.log(n);
// console.log(u);

// Memberikan DEfault Value
// const mhs = {
//   nama:'Wahyudi Andrian',
//   umur:24,
//   email: 'whydandrian@gmail.com'
// }
// const {nama: n, umur: u, email: e = 'email@gmail.com'} = mhs;
// console.log(n);
// console.log(u);
// console.log(e);

// Rest Parameter
// const mhs = {
//   nama:'Wahyudi Andrian',
//   umur:24,
//   email: 'whydandrian@gmail.com'
// }
// const {nama,...value} = mhs;
// console.log(nama);

// Mengambil field object, setelah dikirim sebagai parameter untuk function
// Contoh : mengambil ID dari API dan langsung ditampilkan melalui function yang kita buar
// const mhs = {
//   id:123,
//   nama:'Wahyudi Andrian',
//   umur:24,
//   email: 'whydandrian@gmail.com'
// }

// function getIdMhs({id}) {
//   return id;
// }

// console.log(getIdMhs(mhs));

// DEstructuring 6.2

// function kalkulasi(a, b) {
//   return [a+b, a-b, a*b, a/b];
// }
// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];
// const [jumlah, kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi] = kalkulasi(2,3);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);

// function kalkulasi(a,b) {
//   return {
//     tambah:a+b,
//     kurang:a-b,
//     kali:a*b,
//     bagi:a/b
//   }
// }
// const {bagi, tambah, kali,kurang} = kalkulasi(2,3);
// console.log(bagi);

// Destructuring Function Arguments
const mhs1 = {
  nama:'Wahyudi Andrian',
  umur:24,
  email:'whydandrian@gmail.com',
  nilai:{
    tugas:80,
    uts:89,
    uas:90
  }
}
// function cetakMhs(nama, umur){
//   return `Halo, nama saya ${nama}, saya umur ${umur} tahun.`
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));
// function cetakMhs(mhs){
//   return `Halo, nama saya ${mhs.nama}, saya umur ${mhs.umur} tahun.`
// }
// console.log(cetakMhs(mhs1));
function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}){
  return `Halo, nama saya ${nama}, saya umur ${umur} tahun.
  Nilai Uas saya adalah ${uas}, sedangkan uts saya ${uts}`
}
console.log(cetakMhs(mhs1));
