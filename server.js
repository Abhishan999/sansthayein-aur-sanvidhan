const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./database');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS if necessary

// Helper function to handle db.run asynchronously
const runAsync = (query, params) => {
    return new Promise((resolve, reject) => {
        db.run(query, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
};

// Simple input validation function
const validateInput = (username, password) => {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
        return 'Username can only contain alphanumeric characters and underscores.';
    }
    if (password.length < 6) {
        return 'Password must be at least 6 characters long.';
    }
    return null;
};

// Register a user
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    const validationError = validateInput(username, password);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await runAsync('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// Login a user
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
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
    } catch (error) {
        res.status(500).json({ message: 'Error during password comparison.' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
