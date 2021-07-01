// Rest Parameter
// Mengambil sisa nilai parameter
// function myFunc() {
  // return `a = ${a}, b ${b}, myArgs = ${myArgs}`;
  // return myArgs;
  // return Array.from(arguments);
  // return [...myArgs];
//}

// console.log(myFunc(1,2,3,4,5));
// Penggunaan Rest Parameter
// function jumlahkan(...angka) {
  // penggunaan for of
  // let total = 0;
  // for (const a of angka) {
  //   total += a;
  // }
  // return total;
  //menggunakan reduce
//   return angka.reduce((a, b) => a+b);
// }

// console.log(jumlahkan(1,2,3,4,5));

// Array Destructuring
// const kelompok1 = ['Wahyudi', 'Jamal', 'Indah', 'Dani', 'Lono'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);

// Object Destructuring
// const team = {
//   pm:'Wahyudi',
//   frontEnd1:'Deni',
//   frontEnd2:'Budi',
//   backEnd: 'Manda',
//   ux:'Tono',
//   devOps:'David'
// }
// const {pm, ...myTeam} = team;
// console.log(pm);

// Filtering Parameter
function filterBy(type, ...values) {
  // melakukan filter  terhadap type values dari inputan
  return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'Wahyudi', false, 10, true, 'Deni'));
console.log(filterBy('string', 1, 2, 'Wahyudi', false, 10, true, 'Deni'));
console.log(filterBy('boolean', 1, 2, 'Wahyudi', false, 10, true, 'Deni'));