const sqlite3 = require('sqlite3').verbose();
const dbName = './data/learninganalytics.db'
const db = new sqlite3.Database(dbName, sqlite3.OPEN_READWRITE, err => {
  if(err) {
    console.error(err.message)
  }
  console.log('Connected to the database')
});

closeDatabase = db => db.close(err => {
  if(err) {
    console.error(err.message)
  }
  console.log('Database closed')
})

module.exports = {
  db
}