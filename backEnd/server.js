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
async function addUser(user) {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const conn = await pool.getConnection();
    const result = await conn.query('INSERT INTO user (email, password) VALUES (?, ?)', [user.email, hashedPassword]);
    conn.release();
    console.log('User added:', result);
    return result;
  } catch (error) {
    //console.error('Database connection failed:', error);
    return [];
  }
}

// Add a new user
// const user = { email: 'omar@gmail.com', password: '123456' };
// addUser(user)

// Login validation
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const conn = await pool.getConnection();
    const [user] = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
    conn.release();
    //
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: `Incorrect Password` });
      } 
    }
      else {
      res.status(401).json({ error: `The email entered is not associated with any account` });
    }
  } catch (error) {
    //console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

app.post('/api/validate-email', async (req, res) => {
  const { email } = req.body;
  try {
    const conn = await pool.getConnection();
    const user = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
    conn.release();

    if (user && user.length) {
      res.status(200).json(true);
    } else {
      res.status(404).json(false);
    }
  } catch (error) {
    //console.error('Validation error:', error);
    res.status(500).json(false);
  }
});


app.post('/api/reset-password-email', async (req, res) => {
  const { email } = req.body;
  try {
    const conn = await pool.getConnection();
    const user = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
    conn.release();
    //
    if (user) {
      res.status(200).json({ message: 'Password Reset Link was sent to your email' });
    } else {
      res.status(401).json({ error: 'The email entered is not associated with any account' });
    } 
  } catch (error) {
    //console.error('Login error:', error);
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
