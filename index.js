const express = require('express');
const cookieParser = require('cookie-parser')
const app = express()
app.use(express.json());
app.use(cookieParser());
const port = 8080;

app.post('/login', (req, res) => {
    var theirName = req.body.name
    res.cookie("name", theirName)
    res.status(201).send(`${theirName} I have stolen your name and set it to a cookie!!!`)
  }
)

app.get('/hello', (req, res) => {
  var theirName = req.cookies.name
  res.status(200).send(`Welcome ${theirName}, You can have your name back!`)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


