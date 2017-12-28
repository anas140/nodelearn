const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
	if(req.url === '/home' || req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html'})
		fs.createReadStream(__dirname + '/index.html').pipe(res)
	} else if(req.url == '/contact') {
		res.writeHead(200, {'Content-Type': 'text/html'})
		fs.createReadStream(__dirname + '/contact.html').pipe(res)
	} else if(req.url === '/api/user') {
		res.writeHead(200, {'Content-Type': 'application/json'})
		let users = [{name: 'anas', age:22},{name: 'rafnas', age: 23}]
		res.end(JSON.stringify(users))
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'})
		fs.createReadStream(__dirname + '/404.html').pipe(res)
	}
})
server.listen(8000)