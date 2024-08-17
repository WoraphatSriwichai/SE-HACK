const express = require('express')
const prisma = require('./prisma')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Hello!
app.get('/hello', function (req, res) {
    res.send('SE!')
  })

app.listen(port, async () =>  {
  try{
  const data = prisma.user.findMany();
  res.send(data);
  } catch (error)
   {
    res.status(500).send(error.message);
  }
});

console.log('Application is currently listening on port', port)
