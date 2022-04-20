require('dotenv').config();

const express = require('express');
const port = 3000 || process.env.port;

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Success' });
});

app.listen(port, () => {
  console.log(`Accede al sitio web dando click aquí: http://localhost:${port}`);
});