// const mhs = {
//   nama: 'Wahyudi Andrian',
//   umur: 24,
//   nrp: '2017005162',
//   email: 'whydandrian@gmail.com'
// };

// const el =`<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nrp}</span>
// </div>`

// Menampilkan data dengan looping

// const mhs = [
//   {
//     nama: 'Wahyudi Andrian',
//     email: 'whydandrian@gmail.com'
//   },
//   {
//     nama: 'David Sugianto',
//     email: 'davids@gmail.com'
//   },
//   {
//     nama: 'Alief Fatra',
//     email: 'fatra@gmail.com'
//   }
// ];

// const el = `<div class="mhs">
//   ${mhs.map(m =>  `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//   </ul>`).join(' ')}
// </div>`;

// 3. Conditional
// ternary
// const lagu ={
//   judul: 'Tetap dalam jiwa',
//   penyanyi: 'Isyana S.',
//   feat: 'Randi S.'
// }

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//   </ul>
// </div>`

// 4. Nested
// HTML Fragments Bersarang

const mhs = {
  nama: 'Wahyudi Andrian',
  semester: 5,
  mataKuliah: [
    'Rekayasa Web',
    'Analisis Sistem Informasi',
    'Desain Database',
    'Datawarehouse'
  ]
};

function cetakMataKuliah(mataKuliah) {
  return `
  <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
  </ol>
  `;
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">${mhs.semester}</span>
  <h4>Matakuliah</h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;