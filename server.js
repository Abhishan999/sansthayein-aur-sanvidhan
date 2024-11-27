const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./database');
require('dotenv').config();

const app = express();
app.use(express.json());

// Register a user
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.run(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, hashedPassword],
            function (err) {
                if (err) {
                    return res.status(500).json({ message: 'Error saving user.' });
                }
                res.status(201).json({ message: 'User registered successfully.' });
            }
        );
    } catch (error) {
        res.status(500).json({ message: 'Error hashing password.' });
    }
});

// Login a user
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
        if (err || !user) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            res.status(200).json({ message: 'Login successful.' });
        } else {
            res.status(401).json({ message: 'Invalid username or password.' });
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
