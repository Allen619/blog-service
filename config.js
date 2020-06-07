const mysql = require('mysql')

const connectdb = () => {
  let connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1q2w3e4r!@',
    database: 'vue-blog'
  })
  return connection;
}

module.exports = connectdb;