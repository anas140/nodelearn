const express = require('express')

const app = express()
app.get('/', (req,res) => {
	// res.send('home page')
})
app.get('/contact', (req,res) => {
	res.send('Contact Page')
})
// Route Parameters
app.get('/profile/:id', (req,res) => {
	res.send('You requested the id with ' + req.params.id)
})

app.listen(8000, () => console.log('app listened on port 8000'))