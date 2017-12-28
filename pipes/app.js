var fs = require('fs');
var http = require('http');

// Read strem
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')

// Write Stream
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// Piping to writeMe.txt
// myReadStream.pipe(myWriteStream);

var servar = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
	myReadStream.pipe(res)
})

servar.listen(3000, '127.0.0.1')