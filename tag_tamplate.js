// Tagged Templates

// const nama = 'Wahyudi Andrian';
// const umur = 24;

// function coba(strings, ...values) {
//   // let result = '';
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ''}`
//   // });
//   // return result;

//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo nama saya, ${nama}, umur saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Wahyudi Andrian';
const umur = 24;
const email = 'whydandrian@gmail.com'
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo nama saya, ${nama}, umur saya ${umur} tahun. Email saya ${email}`;

document.body.innerHTML = str;