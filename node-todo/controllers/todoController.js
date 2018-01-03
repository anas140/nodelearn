const bodyParser = require('body-parser')

const mongoose = require('mongoose')

// Connect db
mongoose.connect('mongodb://anas:asd123.@ds239097.mlab.com:39097/todo',(err) => {
	if (err) console.log(err) 
})

// Define a Todo Schema and Model
// Schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
	item: String
})

// Model
var Todo = mongoose.model('Todo', todoSchema)
// var item1 = Todo({item: 'buy flowers'}).save(function(err) {
// 	if(err) console.log(err)
// 	console.log('item saved')
// })

// var data = [{item: 'Get money'}, {item: 'complete nodejs basic'}, {item: 'learn mysql'}, {item: 'learn middleware'}, {item: 'learn rest api'}, {item: 'learn jwt'}, {item: 'learn oauth'}, {item: 'learn react'}, {item: 'learn querys mysl'}, {item: 'learn mysql normalisation'}]
var urlencodedParser = bodyParser.urlencoded({extended: false})
module.exports = function(app) {
	app.get('/todo', (req, res) => {
		//get data from the mongodb and pass it to the view
		Todo.find({}, function(err, docs) {
			if(err) console.log(err)
			res.render('todo', {todos: docs})
		})
		
	})
	app.post('/todo', urlencodedParser, (req, res) => {
		// get the data from form and save it to mongodb
		var newTodo = Todo(req.body).save(function(err, data) {
			if(err) console.log(err)
			res.json(data)
		})
	})
	app.delete('/todo/:item', (req, res) => {
		// delete the requested item from the mongo db
		Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
			if(err) console.log(err)
			res.json(data)
		})
	})
}