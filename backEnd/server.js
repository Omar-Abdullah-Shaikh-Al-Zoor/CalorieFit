require('dotenv').config();
const express = require('express');
const mariadb = require('mariadb');
const cors = require('cors');
const bcrypt = require('bcrypt');

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
async function getUsers() {
  try {
    const users = await pool.query("SELECT * from user");
    return users;
  } catch (error) {
    console.error('Database connection failed:', error);
    return [];
  }
}

// Login validation
app.post('/api/login', async (req, res) => {
  console.log(req)
  const { email, password } = req.body;
  try {
    const conn = await pool.getConnection();
    const [user] = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
    conn.release();
    //await bcrypt.compare( )
    if (user && password == user.password) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: `Invalid credentials` });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

app.get('/api/data/users', async (req, res) => {
  try {
    const users = await getUsers(); // Wait for the promise to resolve
    res.json(users); // Send the resolved data as JSON
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
