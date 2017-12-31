const express = require('express')

const app = express()
app.get('/', (req,res) => {
	res.send('home page')
})
app.get('/contact', (req,res) => {
	res.send('Contact Page')
})
app.listen(8000, () => console.log('app listened on port 8000'))