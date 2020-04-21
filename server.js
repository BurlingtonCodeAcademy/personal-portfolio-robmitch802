const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000;

app.use(express.static('public'))
app.use(express.static(path.join(__dirname, './client/build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client/build/index.html'))
})

app.listen(port, () => {
    console.log('Listening on port: ', port)
})