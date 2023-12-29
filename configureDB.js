const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const dbFilePath = 'todos.db';
if (fs.existsSync(dbFilePath)) {
  fs.unlinkSync(dbFilePath);
}

const db = new sqlite3.Database('todos.db'); // Use an in-memory database for simplicity


db.serialize(() => {
  db.run('CREATE TABLE todos (id INTEGER PRIMARY KEY, title TEXT, description TEXT)');
});


module.exports = db;