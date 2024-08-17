const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Hello!
app.get('/hello', function (req, res) {
    res.send('SE!')
  })

app.listen(port)
console.log('Application is currently listening on port', port)