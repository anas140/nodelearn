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
var item1 = Todo({item: 'buy flowers'}).save(function(err) {
	if(err) console.log(err)
	console.log('item saved')
})

var data = [{item: 'Get money'}, {item: 'complete nodejs basic'}, {item: 'learn mysql'}, {item: 'learn middleware'}, {item: 'learn rest api'}, {item: 'learn jwt'}, {item: 'learn oauth'}, {item: 'learn react'}, {item: 'learn querys mysl'}, {item: 'learn mysql normalisation'}]
var urlencodedParser = bodyParser.urlencoded({extended: false})
module.exports = function(app) {
	app.get('/todo', (req, res) => {
		res.render('todo', {todos: data})
	})
	app.post('/todo', urlencodedParser, (req, res) => {
		console.log(req.body)
		data.push(req.body)
		res.json(data)
	})
	app.delete('/todo/:item', (req, res) => {
		data = data.filter(function(todo) {
			return todo.item.replace(/ /g, '-') !== req.params.item
		})
		res.json(data)
	})
}