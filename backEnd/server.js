require('dotenv').config();
const express = require('express');
const mariadb = require('mariadb');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// Setup the MariaDB connection pool
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 5,
});

// Function to get users
async function getUsers() {
  try {
    const users = await pool.query('SELECT * FROM user');
    return users;
  } catch (error) {
    console.error('Database connection failed:', error);
    return [];
  }
}

// Function to add a user
async function addUser(user) {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const conn = await pool.getConnection();
    const result = await conn.query('INSERT INTO user (email, password) VALUES (?, ?)', [user.email, hashedPassword]);
    conn.release();
    console.log('User added:', result);
    return result;
  } catch (error) {
    console.error('Error adding user:', error);
    return [];
  }
}

// Login validation route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const conn = await pool.getConnection();
    const [user] = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
    conn.release();
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Incorrect Password' });
      }
    } else {
      res.status(401).json({ error: 'The Email entered is not associated with any account' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Get users route
app.get('/api/data/users', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// Route to fetch workout plans based on frequency
app.get('/api/workout/:frequency', async (req, res) => {
  const frequency = req.params.frequency;
  const tableMapping = {
    once: 'once_a_week',
    three: 'three_times_a_week',
    four: 'four_times_a_week',
    six: 'six_times_a_week',
  };

  const tableName = tableMapping[frequency];
  if (!tableName) {
    return res.status(400).json({ error: 'Invalid frequency' });
  }

  try {
    const conn = await pool.getConnection();
    const results = await conn.query(`SELECT * FROM ${tableName}`);
    conn.release();
    res.json(results);
  } catch (error) {
    console.error('Error fetching workout plans:', error);
    res.status(500).json({ error: 'Failed to fetch workout plans' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
