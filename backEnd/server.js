require('dotenv').config();
const express = require('express');
const mariadb = require('mariadb');
const cors = require('cors');

const app = express();
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 5
});

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from Node.js backend!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
