const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
})

connection.connect((err) => {
    if(err) throw err
    console.log('Connected as id' + connection.threadId)
})