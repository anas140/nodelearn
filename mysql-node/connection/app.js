const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})

connection.connect((err) => {
    if(err) throw err
    console.log('Connected as id' + connection.threadId)
    // Create a databse using mysql Query
    // connection.query('CREATE DATABASE nodedb', (err, result) => {
    //     if(err) console.log(err)
    //     // console.log(result)
    // })

    // Create a table using mysql
    // connection.query('CREATE TABLE customers (name varchar(255), address varchar(255))', (error, results, fields) => {
    //     if(error) throw error.message
    //     console.log('table created')
    // })
})