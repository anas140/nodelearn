var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
var i = 0;
myReadStream.on('data', (chunk) => {
	console.log('new data ' + ++i);
	console.log(chunk);
})