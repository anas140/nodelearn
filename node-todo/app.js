const express = require('express')
const todoController = require('./controllers/todoController')
const app = express()

// set View Engine
app.set('view engine', 'ejs')

// use static middleware for public assets
app.use(express.static('./public'))

// Fire Controllers
todoController(app)

// listen server
app.listen(8080, () => {
	console.log('Server listened on port 8080')
})
