const mysql = require('mysql');
const pool = require('../../connection')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
const { handleSQLError } = require('../../sql/error');

const saltRounds = 10

const createUser = (req, res) => {
  const { username, password } = req.body
  let sql = "INSERT INTO users (username, password) VALUES (?, ?)"

  bcrypt.hash(password, saltRounds, function(err, hash) {
    sql = mysql.format(sql, [ username, hash ])
  
    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).send('Username is taken')
        return handleSQLError(res, err)
      }
      return res.send('Sign-up successful')
    })
  })
}

// const createUser = (req, res) => {
//   let sql = `
//     INSERT INTO users (
//       username, password
//     )
//     VALUES
//       (?, ?);`
  
//   let replacements = [req.body.username, req.body.password]

//   sql = mysql.format(sql, replacements);
  
//   pool.query(sql, (err, results)=> {
//     if(err){return res.status(500).send(err)}
//     return res.status(201).send(`user created with id: ${results.insertId}`)
//   })
// }

module.exports = createUser;