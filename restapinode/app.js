const express = require('express')
const routes = require('./routes/api')
const app = express()

app.use('/api', routes)


app.listen(8080, () => console.log(`App listened on 8080`))