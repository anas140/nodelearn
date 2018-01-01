const express = require('express')
const bodyParser = require('body-parser')

const app = express()
	
	// parse application/x-www-form-urlencoded
	var urlencodedParser = app.use(bodyParser.urlencoded({ extended: false }))

	app.set('view engine', 'ejs')

	app.use('/assets', express.static('assets'));

	app.get('/', (req,res) => {
		res.render('index');
	})
	app.get('/contact', (req, res) => {
		console.log(req.query)
		res.render('contact', {qs: req.query})
	})
	app.post('/contact', function(req, res) {
		console.log(req.body)
		res.render('contact-success', {data: req.body})
	})
	app.get('/profile/:name', (req, res) => {
		const data = {
			age: 22,
			job: 'Web Developer',
			hobbies: ['code', 'eat', 'sleep', 'loop']
		}
		res.render('profile', {person: req.params.name, data: data})
	})
app.listen(8000, () => console.log('server on port 8000'))