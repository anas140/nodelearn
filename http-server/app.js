// # Http server creation

var http = require('http')

var server = http.createServer(function(req, res) {
	console.log(req);
	res.writeHead(200, 'appname' , {'Content-Type': 'text/plain'})
	res.end('anas')
})
server.listen(8088,'127.0.0.1')

