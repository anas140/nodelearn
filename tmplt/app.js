const express = require('express');

const app = express()
	app.set('view engine', 'ejs')

	app.get('/', (req,res) => {
		res.sendFile(__dirname + '/views/index.html');
	})
	app.get('/contact', (req, res) => {
		res.sendFile(__dirname + '/views/contact.html')
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