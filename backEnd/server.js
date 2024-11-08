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
async function getUsers() {
  try {
    const users = await pool.query("SELECT * from user");
    return users;
  } catch (error) {
    console.error('Database connection failed:', error);
    return [];
  }
}

app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from Node.js backend!" });
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
  //const result = await pool.query("SELECT 1 as val");
 // console.log(result);
  /*let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM your_table");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  } finally {
    if (conn) conn.release();
  }*/
  //res.render('./src/index.html');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
