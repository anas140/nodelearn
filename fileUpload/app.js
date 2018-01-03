const formidable = require('formidable')
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/upload.html').pipe(res)
    } else if(req.url === '/upload' && req.method === 'POST') {
        var form = new formidable.IncomingForm()
        form.parse(req, (err, fields, files) => {
            if(err) throw err;
            fs.rename(files.myFile.path, __dirname + '/uploads/' + files.myFile.name, (err) => {
                if(err) console.log(err)
                res.write('File Uploaded successfully');
                res.end()
            })
            
        })        
    }
})
server.listen(8000, () => console.log('server listened on port 8080'))