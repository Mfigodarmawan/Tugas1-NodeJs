const express = require('express');
const dataSiswa = require('./DataSiswa');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Selamat Datang Di Data Center Siswa Indonesia');
});

app.get('/DataSiswa', (req, res) => {
  res.json(dataSiswa);
});

app.listen(port, () => {
  console.log(`Server berjalan di ${port}`);
});
