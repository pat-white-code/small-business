const mysql = require('mysql');
const pool = require('../../connection')

const createUser = (req, res) => {
  let sql = `
    INSERT INTO users (
      username, password
    )
    VALUES
      (?, ?);`
  
  let replacements = [req.body.username, req.body.password]

  sql = mysql.format(sql, replacements);
  
  pool.query(sql, (err, results)=> {
    if(err){return res.status(500).send(err)}
    return res.status(201).send(`user created with id: ${results.insertId}`)
  })
}

module.exports = createUser;