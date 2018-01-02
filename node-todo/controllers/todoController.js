const bodyParser = require('body-parser')
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