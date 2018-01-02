var fs = require('fs');

// // console.log(fs.readFileSync('readMe.txt', 'utf8'));

// // write to another file
// // fs.writeFileSync('newFile.txt',fs.readFileSync('readMe.txt', 'utf8'));

// // Asynchtounous

// fs.readFile('readMe.txt', 'utf8', (err, data) => {
// 	if(err) {
// 		console.log(err);
// 	}
// 	fs.writeFile('writefile.txt', data , (err) => {
// 		if(err) throw err;
// 	});
// })

// Deleet File
// fs.unlink('deleteMe.txt', (err) => {
// 	if(err) console.log(err);
// 	console.log('successfully deleted')
// })
// console.log('first');

// // # Make & Remove Directory
// 	//sync
 
 // fs.mkdirSync('newDir')
 // fs.rmdirSync('newDir');

// Create a directory and a copy file into inner directery file.
	fs.mkdir('app', (err) => {
		if(err) throw errr
		fs.readFile('readMe.txt', 'utf8', (err, data) => {
			if(err) throw err;
			fs.writeFile('./app/newFile.txt', data, (err) => {
				if(err) throw err;
				console.log('file copied')
			})
		})
	})