const express = require('express')
const app = express()

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port ' + port))