require('dotenv').config();
const express = require('express');
const mariadb = require('mariadb');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const pool = mariadb.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3366,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_DATABASE || 'caloriefit',
  connectionLimit: 5,
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
    console.error('Database connection failed:', error);
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
      res.status(401).json({ error: `The Email entered is not associated with any account` });
    }
  } catch (error) {
    //console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

app.post('/api/register', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  console.log(first_name, last_name, email, password);
  return
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const conn = await pool.getConnection();

    // Check if the user already exists
    const [existingUser] = await conn.query(
      'SELECT id FROM user WHERE email = ?',
      [email]
    );

    if (existingUser.length > 0) {
      conn.release();
      return res.status(409).json({ error: 'Email is already registered' });
    }

    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const [result] = await conn.query(
      `
      INSERT INTO user (first_name, last_name, email, password) 
      VALUES (?, ?, ?, ?)`,
      [first_name, last_name, email, hashedPassword]
    );

    conn.release();

    // Send success response
    res.status(201).json({
      message: 'User registered successfully',
      userId: result.insertId,
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Failed to register the account' });
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
