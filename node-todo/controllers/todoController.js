module.exports = function(app) {
	app.get('/todo', (req, res) => {
		res.render('todo')
	})
	app.post('/todo', (req, res) => {
		console.log('post todo')

	})
	app.delete('/todo', (req, res) => {
		console.log('delete todo')
	})
}