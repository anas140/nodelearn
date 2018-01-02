module.exports = function(app) {
	app.get('/todo', (req, res) => {
		console.log(req.url)
		res.send('anas')
	})
	app.post('/todo', (req, res) => {
		console.log('post todo')

	})
	app.delete('/todo', (req, res) => {
		console.log('delete todo')
	})
}