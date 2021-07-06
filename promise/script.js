$.ajax({
  url: 'https://us-central1-silicon-airlock-153323.cloudfunctions.net/rg-package-dummy?userId=anugrahaman71',
  success: results => {
    const userRuangguru = results.user;
    userRuangguru.forEach(m => {
      console.log(m);
    });
  },
  error: (e) => {
    console.log(e.responseText);
  }
});