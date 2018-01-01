const express = require('express');

const app = express()

	app.set('view engine', 'ejs')
	app.use('/assets', express.static('assets'));

	app.get('/', (req,res) => {
		res.render('index');
	})
	app.get('/contact', (req, res) => {
		console.log(req.query)
		res.render('contact', {qs: req.query})
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