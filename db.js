const sqlite3 = require('sqlite3').verbose();
const dbName = './data/learninganalytics.db'

const getDatabase = () => new sqlite3.Database(dbName, sqlite3.OPEN_READWRITE, err => {
  if(err) {
    console.error(err.message)
  }
  console.log('Connected to the database')
});

const closeDatabase = db => db.close(err => {
  if(err) {
    console.error(err.message)
  }
  console.log('Database closed')
})

const fetchAll = db => (table, filters = [], filterValues = [], orderBy, groupBy, select = '*') =>
  new Promise(resolve => {
    if(filters.length !== filterValues.length) {
      throw new Error('filters and values are not the same length')
    }
    let whereSql = 'WHERE'
    filters.forEach((filter, index) => whereSql += ` ${filter} ${index !== filters.length - 1 ? 'AND' : ''}`)
    const orderSql = orderBy ? ` ORDER BY ${orderBy}` : ''
    const groupSql = groupBy ? ` GROUP BY ${groupBy}` : ''
    let sql = `SELECT ${select} FROM ${table} ${whereSql} ${orderSql} ${groupSql}`;
    console.log(sql)
    db.all(sql, filterValues, (err, rows) => {
      if(err) {
        throw err
      }
      resolve(rows)
    });
  })

const rawQuery = db => sql => new Promise(resolve => {
  db.all(sql, [], (err, rows) => {
    if(err) {
      throw err
    }
    resolve(rows)
  });
})

const fetchSubmissions = db => fetchAll(db)('submission', ['score>?', 'time_on_task>?'], [0, 0], '')
const fetchStudentMaxScores = db => fetchAll(db)('submission', ['score>?', 'time_on_task>?'], [0, 0], '','assign_id, user_id', 'MAX(score) AS score, *', )
const fetchCombinedStudentData = db => rawQuery(db)('SELECT  MAX(score) AS score, * FROM submission s LEFT JOIN background_variables bv ON s.user_id =  bv.user_id WHERE score > 0 AND time_on_task > 0  AND s.user_id  = 855 GROUP BY s.assign_id, s.user_id')
const fetchAssignments = db => fetchAll(db)('assignment', ['assignment_id=?'], [1], '')

const fetchStudentLastSubmissions = db => fetchAll(db)('submission', )
module.exports = {
  getDatabase,
  fetchSubmissions,
  fetchAssignments,
  fetchStudentMaxScores,
  fetchCombinedStudentData,
  closeDatabase
}