// Callback
// Hal dibawah ini disebut Syncrhonus Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt('Masukkan nama anda : ');
//   callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo ${nama}`));

// const mhs = [
//   {
//     "nama": "Wahyudi Andrian",
//     "nrp": "20172010",
//     "email": "whydandrian@gmail.com",
//     "jurusan": "Manajemen Informatika",
//     "idDosenWali": 1
//   },
//   {
//     "nama": "Ahmad Jamaluddin",
//     "nrp": "20170912",
//     "email": "jamall@gmail.com",
//     "jurusan": "Manajemen Informatika",
//     "idDosenWali": 2
//   },
//   {
//     "nama": "Sinta Purnamasari",
//     "nrp": "20170102",
//     "email": "sinta@gmail.com",
//     "jurusan": "Manajemen Informatika",
//     "idDosenWali": 2
//   }
// ];

// console.log('Mulai');
// mhs.forEach(m => {
//   //Simulasi Synchronus
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();    
//   }
//   console.log(m.nama)
// });
// console.log('selesai');

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   }

//   xhr.open('get', url);
//   xhr.send();
// }

// getDataMahasiswa('mahasiswa.json', results => {
//   const mhs = JSON.parse(results);
//   mhs.forEach(m => console.log(results));
  
// }, () => {});

// JQuery
// console.log('mulai');

// $.ajax({
//   url: 'mahasiswa.json',
//   success: (mhs) => {
//     mhs.forEach(m => console.log(m.nama));
//   },
//   error: () => {
//     console.log(e.responseText);
//   }
// });
// console.log('selesai');