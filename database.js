const sqlite3 = require('sqlite3').verbose();

// Initialize the database
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');

        db.run(
            `CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            )`,
            (err) => {
                if (err) {
                    console.error('Error creating table:', err.message);
                } else {
                    console.log('Table created successfully.');
                }
            }
        );
    }
});

module.exports = db;
