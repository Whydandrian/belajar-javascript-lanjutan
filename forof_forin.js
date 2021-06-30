// For .. Of loop
// const mhs = ['Wahyudi', 'David', 'Eko'];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// String Looping
// foreach tidak bisa digunakan untuk looping string
// const nama = 'wahyudi';
//  for (const n of nama) {
//    console.log(n);
//  }

const mhs = ['Wahyudi', 'David', 'Eko'];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke${i}`);
// });

// for (const [i,m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke${i}`);
// }

// Nodelist
const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.textContent););
// for (const n of liNama) {
//   console.log(n.innerHTML);
// }

// Arguments
function jumlahkanAngka(){
  // return arguments.reduce((1, i) => a+i);
  // arguments.forEach(a => jumlah += a);
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}

console.log(jumlahkanAngka(1,2,3,4,5));