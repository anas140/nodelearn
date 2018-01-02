var data = [{item: 'Get money'}, {item: 'complete nodejs basic'}, {item: 'learn mysql'}, {item: 'learn middleware'}, {item: 'learn rest api'}, {item: 'learn jwt'}, {item: 'learn oauth'}, {item: 'learn react'}, {item: 'learn querys mysl'}, {item: 'learn mysql normalisation'}]
module.exports = function(app) {
	app.get('/todo', (req, res) => {
		res.render('todo', {todos: data})
	})
	app.post('/todo', (req, res) => {
		console.log('post todo')

	})
	app.delete('/todo', (req, res) => {
		console.log('delete todo')
	})
}