const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'application/json'})
	let myObj = {
		name : 'Muhammed Anas',
		job: 'Web Developer',
		age: 22
	}
	res.end(JSON.stringify(myObj))
})

server.listen(8888)