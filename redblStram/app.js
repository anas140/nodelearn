var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');

// write the data to another writeMe.txt filr
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

var i = 0;
myReadStream.on('data', (chunk) => {
	console.log('new data ' + ++i);
	// console.log(chunk);
	//write that chunk of data into writeMe.txt file
	myWriteStream.write(chunk);
	console.log('writed data ' + i)
})