const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'fitness_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.get('/api/workout/:frequency', (req, res) => {
  const frequency = req.params.frequency;
  let table;

  switch (frequency) {
    case 'once':
      table = 'once_a_week';
      break;
    case 'three':
      table = 'three_times_a_week';
      break;
    case 'four':
      table = 'four_times_a_week';
      break;
    case 'six':
      table = 'six_times_a_week';
      break;
    default:
      return res.status(400).json({ error: 'Invalid frequency' });
  }

  const query = `SELECT * FROM ${table}`;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});